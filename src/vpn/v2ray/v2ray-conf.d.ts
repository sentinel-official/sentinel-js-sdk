// Credits: https://github.com/vast-api/t-v2ray/blob/master/types/v2ray-conf.d.ts

import V2RayProtocol from "./v2ray-protocol";
import V2RayTransport, { V2RayStreamSettings } from "./v2ray-transport";

declare namespace V2RayConf {
  namespace Log {
    type Level = "debug" | "info" | "warning" | "error" | "none";
  }
  interface Log {
    access?: string | "none";
    error?: string | "none";
    loglevel?: Log.Level;
  }

  namespace Api {
    type Service = "HandlerService" | "LoggerService" | "StatsService";
  }
  interface Api {
    tag: string;
    services: Api.Service[];
  }

  namespace Dns {
    interface Server {
      address: string;
      port?: number;
      clientIp?: string;
      domains?: string[];
      expectIPs?: string;
    }
  }
  interface Dns {
    hosts: Record<string, string>;
    servers: (string | Dns.Server | "localhost")[];
    clientIp?: string;
  }

  namespace Routing {
    type domainStrategy = "AsIs" | "IPIfNonMatch" | "IPOnDemand";
    namespace Rule {
      type Type = "field";
    }
    type Network = "tcp" | "udp" | "tcp,udp";
    type Protocol = "http" | "tls" | "bittorrent";
    interface Rule {
      type: Rule.Type;
      domain?: string[];
      ip?: string[];
      port?: number | string;
      sourcePort?: number | string;
      network?: Rule.Network;
      source?: string[];
      user?: string[];
      inboundTag?: string[];
      protocol?: Rule.Protocol[];
      attrs?: string;
      outboundTag?: string;
      balancerTag?: string;
    }
    interface Balancer {
      tag: string;
      selector: string[];
    }
  }
  interface Routing {
    domainStrategy?: Routing.DomainStrategy;
    rules: Routing.Rule[];
    balancers?: Routing.Balancer[];
  }

  namespace Policy {
    interface LevelPolicy {
      handshake?: number;
      connIdle?: number;
      uplinkOnly?: number;
      downlinkOnly?: number;
      statsUserUplink: boolean;
      statsUserDownlink: boolean;
      bufferSize: number;
    }
  }
  interface Policy {
    levels?: Record<number, Policy.LevelPolicy>;
    system?: {
      statsInboundUplink?: boolean;
      statsInboundDownlink?: boolean;
      statsOutboundUplink?: boolean;
      statsOutboundDownlink?: boolean;
    };
  }

  namespace Inbound {
    namespace Sniffing {
      type OverrideProtocol = "http" | "tls";
    }
    interface Sniffing {
      enabled: boolean;
      destOverride: Sniffing.OverrideProtocol[];
    }
    interface Allocate {
      strategy: "always" | "random";
      refresh: number;
      concurrency: number;
    }
  }
  interface Inbound {
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
      tag: string;
      domain: string;
    }
    interface Portal {
      tag: string;
      domain: string;
    }
  }
  interface Reverse {
    bridges: Reverse.Bridge[];
    portals: Reverse.Portal[];
  }
}

interface V2RayConf {
  log?: V2RayConf.Log;
  api?: V2RayConf.Api;
  dns?: V2RayConf.Dns;
  routing: V2RayConf.Routing;
  policy?: V2RayConf.Policy;
  inbounds: V2RayConf.Inbound[];
  outbounds: V2RayConf.Outbound[];
  transport?: V2RayTransport;
  stats?: Record;
  reverse?: V2RayConf.Reverse;
}

export default V2RayConf;