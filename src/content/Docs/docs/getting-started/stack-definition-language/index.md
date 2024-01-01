---
categories: ["Getting Started"]
tags: []
title: "Stack Definition Language (SDL)"
linkTitle: "Stack Definition Language (SDL)"
weight: 3

---

Customers/tenants define the deployment services, datacenters, requirements, and pricing parameters in a "manifest" file (`deploy.yaml`). The file is written in a declarative language called Software Definition Language (SDL). SDL is a human-friendly data standard for declaring deployment attributes. The SDL file is a "form" to request resources from the Network. SDL is compatible with the [YAML](https://yaml.org/) standard and similar to Docker Compose files.

Configuration files may end in `.yml` or `.yaml`.

A complete deployment has the following sections:

- [Networking](#networking)
- [Version](#version)
- [Services](#services)
  - [services.env](#servicesenv)
  - [services.expose](#servicesexpose)
  - [services.expose.to](#servicesexposeto)
- [Profiles](#profiles)
  - [profiles.compute](#profilescompute)
  - [profiles.placement](#profilesplacement)
  - [profiles.placement.signedBy](#profilesplacementsignedby)
- [Deployment](#deployment)
- [GPU Support](#gpu-support)
- [Stable Payment](#stable-payment)

An example deployment configuration can be found [here](https://github.com/akash-network/docs/tree/62714bb13cfde51ce6210dba626d7248847ba8c1/sdl/deployment.yaml).

## Networking

Networking, allowing connectivity to and between workloads, can be configured via the Stack Definition Language (SDL) file for a deployment. By default, workloads in a deployment group are isolated - nothing else is allowed to connect to them. This restriction can be relaxed.

## Version

Indicates the version of the Akash configuration file. Currently, only `"2.0"` is accepted.

## Services

The top-level `services` entry contains a map of workloads to be run on the Akash deployment. Each key is a service name; values are a map containing various keys for configuration.

### services.env

A list of environment variables to expose to the running container.

```yaml
env:
  - API_KEY=0xcafebabe
  - CLIENT_ID=0xdeadbeef
```

### services.expose

The `expose` key is a list describing what can connect to the service. Each entry is a map containing one or more of the following fields:

- `port`: Container port to expose
- `as`: Port number to expose the container port as
- `accept`: List of hosts to accept connections for
- `proto`: Protocol type. Valid values = `tcp` or `udp`
- `to`: List of entities allowed to connect. See [services.expose.to](#services.expose.to)

### services.expose.to

`expose.to` is a list of clients to accept connections from. Each item is a map with one or more of the following entries:

- `service`: A service in this deployment
- `global`: `true` or `false`

## Profiles

The `profiles` section contains named compute and placement profiles to be used in the [deployment](#deployment).

### profiles.compute

`profiles.compute` is a map of named compute profiles, specifying resources for each service instance.

Example:

```yaml
web:
  cpu: 2
  memory: "2Gi"
  storage: "5Gi"
```

### profiles.placement

`profiles.placement` is a map of named datacenter profiles, specifying required attributes and pricing configuration for each [compute profile](#profiles.compute).

Example:

```yaml
westcoast:
  attributes:
    region: us-west
  pricing:
    web:
      denom: uakt
      amount: 8
    db:
      denom: uakt
      amount: 100
```

### profiles.placement.signedBy

Optional section allowing the specification of attributes that must be signed by one or more accounts.

## Deployment

The `deployment` section defines how to deploy the services. It is a mapping of service name to deployment configuration.

Example:

```yaml
web:
  westcoast:
    profile: web
    count: 20
```

This deploys 20 instances of the `web` service to a datacenter matching the `westcoast` datacenter profile.

## GPU Support

GPUs can be added to your workload via inclusion in the compute profile section.

## Stable Payment

Use of Stable Payments is supported in the Akash SDL and is declared in the placement section of the SDL.