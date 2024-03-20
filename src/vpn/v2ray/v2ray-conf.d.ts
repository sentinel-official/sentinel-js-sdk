// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-conf.d.ts

import V2RayProtocol from "./v2ray-protocol";
import V2RayTransport, { V2RayStreamSettings } from "./v2ray-transport";

declare namespace V2RayConf {
    namespace Log {
        type Level = "debug" | "info" | "warning" | "error" | "none";
    }
    interface Log {
        // https://www.v2ray.com/en/configuration/overview.html#logobject
        access?: string | "none";
        error?: string | "none";
        loglevel?: Log.Level;
    }

    namespace Api {
        type Service = "HandlerService" | "LoggerService" | "StatsService";
    }
    interface Api {
        // https://www.v2ray.com/en/configuration/api.html
        tag: string;
        services: Api.Service[];
    }

    namespace Dns {
        // https://www.v2ray.com/en/configuration/dns.html#serverobject
        interface Server {
            address: string;
            port?: number;
            // clientIp?: string;
            domains?: string[];
            // expectIPs?: string;
        }
    }
    interface Dns {
        // https://www.v2ray.com/en/configuration/dns.html
        hosts: Record<string, string>;
        servers: (string | Dns.Server | "localhost")[];
        clientIp?: string;
        // (V2Ray 4.13+) All traffic initiated from this DNS, except to localhost, will have this tag as inbound. It can be used for routing.
        tag?: string;
    }

    namespace Routing {
        type domainStrategy = "AsIs" | "IPIfNonMatch" | "IPOnDemand";
        namespace Rule {
            type Type = "field";
        }
        type Network = "tcp" | "udp" | "tcp,udp";
        type Protocol = "http" | "tls" | "bittorrent";
        interface Rule {
            // https://www.v2ray.com/en/configuration/routing.html#ruleobject
            type: Rule.Type;
            domain?: string[];
            ip?: string[];
            port?: number | string;
            // sourcePort?: number | string;
            network?: Rule.Network;
            source?: string[];
            user?: string[];
            inboundTag?: string[];
            protocol?: Rule.Protocol[];
            attrs?: string;
            // (V2Ray 4.18+) A Starlark script, used for detecting traffic attributes. When this script returns true, this rule takes effect.
            outboundTag?: string;
            balancerTag?: string;
        }
        interface Balancer {
            // https://www.v2ray.com/en/configuration/routing.html#ruleobject
            tag: string;
            selector: string[];
        }
    }
    interface Routing {
        // https://www.v2ray.com/en/configuration/routing.html
        domainStrategy?: Routing.DomainStrategy;
        rules: Routing.Rule[];
        balancers?: Routing.Balancer[];
        // (V2Ray 4.4+) An array of load balancers. When a routing rule points to a load balancer, the balancer will select an outbound based on configuration. Then traffic will be sent to that outbound.
    }

    namespace Policy {
        interface LevelPolicy {
            // https://www.v2ray.com/en/configuration/policy.html#levelpolicyobject
            handshake?: number;
            connIdle?: number;
            uplinkOnly?: number;
            downlinkOnly?: number;
            statsUserUplink?: boolean;
            statsUserDownlink?: boolean;
            bufferSize?: number;
        }
    }
    interface Policy {
        // https://www.v2ray.com/en/configuration/policy.html
        levels?: Record<string, Policy.LevelPolicy>;
        system?: {
            statsInboundUplink?: boolean;
            statsInboundDownlink?: boolean;
            statsOutboundUplink?: boolean;  // not documented
            statsOutboundDownlink?: boolean;  // not documented
        };
    }

    namespace Inbound {
        namespace Sniffing {
            type OverrideProtocol = "http" | "tls";
        }
        interface Sniffing {
            // https://www.v2ray.com/en/configuration/overview.html#sniffingobject
            enabled: boolean;
            destOverride: Sniffing.OverrideProtocol[];
        }
        interface Allocate {
            // https://www.v2ray.com/en/configuration/overview.html#allocateobject
            strategy: "always" | "random";
            refresh: number;
            concurrency: number;
        }
    }
    interface Inbound {
        // https://www.v2ray.com/en/configuration/overview.html#inboundobject
        listen?: string;
        port: number | string;
        protocol: V2RayProtocol.InboundProtocolNames;
        settings: V2RayProtocol.InboundProtocols;
        streamSettings?: V2RayStreamSettings;
        tag?: string;
        sniffing?: Inbound.Sniffing;
        allocate?: Inbound.Allocate;
    }

    namespace Outbound {
        interface ProxySettings {
            tag: string;
        }

        interface Mux {
            enabled?: boolean;
            concurrency?: number;
        }
    }
    interface Outbound {
        // https://www.v2ray.com/en/configuration/overview.html#outboundobject
        sendThrough?: string;
        protocol: V2RayProtocol.OutboundProtocolNames;
        settings: V2RayProtocol.OutboundProtocols;
        tag?: string;
        streamSettings?: V2RayStreamSettings;
        proxySettings?: Outbound.ProxySettings;
        mux?: Outbound.Mux;
    }

    namespace Reverse {
        interface Bridge {
            // https://www.v2ray.com/en/configuration/reverse.html
            tag: string;
            domain: string;
        }
        interface Portal {
            // https://www.v2ray.com/en/configuration/reverse.html#portalobject
            tag: string;
            domain: string;
        }
    }
    interface Reverse {
        // https://www.v2ray.com/en/configuration/reverse.html
        // Reverse proxy is available in V2Ray 4.0+. It is now in beta, and may be improved in near future.
        bridges: Reverse.Bridge[];
        portals: Reverse.Portal[];
    }
}

interface V2RayConf {
    log?: V2RayConf.Log;
    // Log configuration to control log outputs.
    api?: V2RayConf.Api;
    // RPC API to control the V2Ray instance. See API configuration for details.
    dns?: V2RayConf.Dns;
    // Configuration for internal DNS server's configurations. If this section is omitted, V2Ray will use your system-wide DNS configuration. For details, see DNS Configurations.
    routing: V2RayConf.Routing;
    // Configuration for internal Routing strategy.
    policy?: V2RayConf.Policy;
    // Configurations for permissions and other security strategies. For details, see Local Policy.
    inbounds: V2RayConf.Inbound[];
    // An array of Inbound as configuration for inbound proxies.
    outbounds: V2RayConf.Outbound[];
    // An array of Outbound as configuration for outbound proxies. The first outbound in the array is the main one. It is the default outbound in routing decision.
    transport?: V2RayTransport;
    // Low-level transport protocol's configurations. For details, see Protocol Transport Options.
    stats?: Record<any, any>;
    // When specified, internal Statistics is enabled.
    reverse?: V2RayConf.Reverse;
    // Low-level transport protocol's configurations. For details, see Protocol Transport Options.
  }

export default V2RayConf;