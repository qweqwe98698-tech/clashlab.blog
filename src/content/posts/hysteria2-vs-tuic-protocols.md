---
image: "/images/hero-protocols.svg"
coverImage: "/images/hero-protocols.svg"
title: "Hysteria 2 vs TUIC v5：下一代基于 UDP/QUIC 的抗弱网协议全面评测"
description: "为什么基于 QUIC 的双向拥塞控制协议在恶劣网络环境下拥有超越传统 TCP 代理的抗丢包性能？深入分析其原理与参数调优。"
pubDate: 2026-08-05
updatedDate: 2026-08-14
category: "协议与原理"
tags: ["Hysteria 2", "TUIC v5", "QUIC", "UDP代理", "拥塞控制"]
featured: false
readTime: "8 分钟"
author: "协议研究小组"
toc: true
---

传统的代理协议（如 Shadowsocks, VMess, Trojan, VLESS）绝大多数基于 **TCP 协议栈**。当跨境链路出现高丢包或恶劣网络抖动时，TCP 的慢启动与丢包重传惩罚机制会导致连接速率断崖式下跌。

为了解决这一物理痛点，以 **Hysteria 2** 与 **TUIC v5** 为代表的下一代基于 **UDP / QUIC** 协议应运而生。

---

## 协议底层机制对比

| 特性 | Hysteria 2 | TUIC v5 | 传统 VLESS (TCP) |
| :--- | :--- | :--- | :--- |
| **底层传输** | 自研 Brutal 拥塞控制 / QUIC | 原生 QUIC (RFC 9000) | TCP + TLS 1.3 |
| **丢包处理** | 主动速率探测，不因丢包减速 | 快速重传与独立流多路复用 | 经典 TCP 减窗退避 |
| **连接建立 (RTT)** | 0-RTT / 1-RTT | 0-RTT | 2-RTT ~ 3-RTT |
| **握手伪装** | 标准 TLS 1.3 + HTTP/3 | 标准 TLS 1.3 | 标准 TLS 1.3 |
| **弱网吞吐保障** | ⭐⭐⭐⭐⭐ (极强) | ⭐⭐⭐⭐ (优秀) | ⭐⭐ (丢包即卡顿) |

---

## Hysteria 2 的核心武器：Brutal 拥塞控制

传统 TCP 在检测到 10% 丢包时，会误认为网络带宽已饱和，从而将发送速率减半；而在跨国骨干网中，丢包往往是由物理距离与偶发干扰引起的，并非真正的带宽不足。

Hysteria 2 引入了 **Brutal 拥塞控制算法**：
- 客户端与服务端约定一个固定速率（如 100Mbps 上行 / 500Mbps 下行）。
- 发送端以恒定速率持续注入数据包，完全忽略偶发丢包引发的降速信号。
- 即使在 **30% 极端丢包** 环境下，仍能跑满物理可用带宽，实现 4K 视频秒开。

---

## 适用场景与局限性

虽然 UDP 代理性能卓越，但用户需要注意以下两点：
1. **部分地区运营商的 UDP QoS 限制**：少数省份运营商会在晚高峰对 443 以外的 UDP 流量进行限速或丢弃。应对方案是开启 Hysteria 2 的 **端口跳跃 (Port Hopping)** 或伪装为标准 443 端口。
2. **流量开销稍大**：由于主动重传与保持高吞吐，实际消耗的物理流量会比传统 TCP 代理高出 5% - 15%。
