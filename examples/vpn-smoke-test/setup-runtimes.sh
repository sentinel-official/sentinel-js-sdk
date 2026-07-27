#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
bin_dir="${script_dir}/bin"

if [[ "$(uname -s)" != "Linux" || "$(uname -m)" != "x86_64" ]]; then
    printf 'This helper currently supports Linux x86_64 only.\n' >&2
    exit 1
fi

required_commands=(curl git go install make mktemp nproc sha256sum unzip)
for command_name in "${required_commands[@]}"; do
    if ! command -v "${command_name}" >/dev/null 2>&1; then
        printf 'Required build command not found: %s\n' "${command_name}" >&2
        exit 1
    fi
done

work_dir="$(mktemp -d -t sentinel-js-sdk-runtimes.XXXXXXXX)"
trap 'rm -rf -- "${work_dir}"' EXIT

xray_version="v26.3.27"
xray_sha256="23cd9af937744d97776ee35ecad4972cf4b2109d1e0fe6be9930467608f7c8ae"
hysteria_version="v2.9.2"
hysteria_sha256="86fef8e2f1b2bf41318ac96724eee6c3b449e4e510022cc89658b63a6713922a"
amneziawg_tools_commit="61e741780e8465a67a7d7fb6cffe14a8a15d624a"
amneziawg_go_commit="1cc94272ca8e9e223a5fe76382f5880f09d3c12d"

mkdir -p "${bin_dir}"

curl -fsSL --retry 3 --retry-delay 2 \
    -o "${work_dir}/xray.zip" \
    "https://github.com/XTLS/Xray-core/releases/download/${xray_version}/Xray-linux-64.zip"
printf '%s  %s\n' "${xray_sha256}" "${work_dir}/xray.zip" | sha256sum -c -
unzip -j "${work_dir}/xray.zip" xray -d "${work_dir}/xray"
install -m 0755 "${work_dir}/xray/xray" "${bin_dir}/xray"

curl -fsSL --retry 3 --retry-delay 2 \
    -o "${work_dir}/hysteria2" \
    "https://github.com/apernet/hysteria/releases/download/app/${hysteria_version}/hysteria-linux-amd64"
printf '%s  %s\n' "${hysteria_sha256}" "${work_dir}/hysteria2" | sha256sum -c -
install -m 0755 "${work_dir}/hysteria2" "${bin_dir}/hysteria2"

git clone --quiet https://github.com/amnezia-vpn/amneziawg-tools.git \
    "${work_dir}/amneziawg-tools"
git -C "${work_dir}/amneziawg-tools" checkout --quiet "${amneziawg_tools_commit}"
make -C "${work_dir}/amneziawg-tools/src" --jobs="$(nproc)"
make -C "${work_dir}/amneziawg-tools/src" install \
    DESTDIR="${work_dir}/amneziawg-out" \
    PREFIX=/usr \
    WITH_WGQUICK=yes \
    WITH_BASHCOMPLETION=no \
    WITH_SYSTEMDUNITS=no
install -m 0755 "${work_dir}/amneziawg-out/usr/bin/awg" "${bin_dir}/awg"
install -m 0755 "${work_dir}/amneziawg-out/usr/bin/awg-quick" "${bin_dir}/awg-quick"

git clone --quiet https://github.com/amnezia-vpn/amneziawg-go.git \
    "${work_dir}/amneziawg-go"
git -C "${work_dir}/amneziawg-go" checkout --quiet "${amneziawg_go_commit}"
(
    cd "${work_dir}/amneziawg-go"
    go build -o "${bin_dir}/amneziawg-go" .
)

printf 'VPN runtimes installed in %s\n' "${bin_dir}"
"${bin_dir}/xray" version
"${bin_dir}/hysteria2" version
"${bin_dir}/awg" --version
