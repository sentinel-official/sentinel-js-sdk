#!/usr/bin/env bash
set -euo pipefail

runtime_dir="${XDG_RUNTIME_DIR:-/tmp}"
secret_file="${runtime_dir}/sentinel-js-sdk-mnemonic-${UID}"

umask 077
IFS= read -r -s -p "Sentinel wallet mnemonic (hidden): " mnemonic
printf '\n'

word_count="$(wc -w <<<"${mnemonic}")"
if (( word_count < 12 )); then
    unset mnemonic
    printf 'The value has fewer than 12 words; nothing was written.\n' >&2
    exit 1
fi

printf '%s\n' "${mnemonic}" > "${secret_file}"
unset mnemonic
chmod 0600 "${secret_file}"

printf 'Mnemonic stored at: %s\n' "${secret_file}"
printf 'Remove it immediately after the smoke tests.\n'
