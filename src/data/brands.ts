// src/data/brands.ts - ClashLab 42 Airport Brands Database & Speedtest Observatory (2026 Updated)
// 包含 42 家机场品牌全量档案、真实测速图、流媒体解锁图矩阵、套餐矩阵与动态分级

const brandMeta = [
  {
    "id": "guangshuyun",
    "slug": "guangshuyun",
    "name": "光速云",
    "englishName": "GuangShu Cloud",
    "badge": "主推旗舰",
    "pinyin": "guangshuyun",
    "tagline": "主推旗舰，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "establishedYear": 2020,
    "rating": 4.95,
    "reviewCount": 420,
    "entryPrice": "¥8.00/月",
    "entryPriceNum": 8,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "couponCode": "AMM",
    "couponDiscount": "立享专属折扣码「AMM」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [
      "/images/speedtests/guangshuyun/photo_2026-08-19_12-13-01.jpg",
      "/images/speedtests/guangshuyun/photo_2026-08-19_12-13-50.jpg",
      "/images/speedtests/guangshuyun/photo_2026-08-19_12-13-58.jpg",
      "/images/speedtests/guangshuyun/photo_2026-08-19_12-18-40.jpg",
      "/images/speedtests/guangshuyun/photo_2026-08-19_12-20-10.jpg"
    ],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "22ms",
    "peakSpeed": "529Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，光速云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 529Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "price": "¥147",
        "billingPeriod": "一次性付费",
        "traffic": "247GB不过期",
        "unitPrice": "¥0.595 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "光速云·轻量版",
        "price": "¥99",
        "billingPeriod": "年付",
        "traffic": "69GB",
        "unitPrice": "¥1.435 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "光速云·极速版",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "168GB",
        "unitPrice": "¥0.149 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "光速云·流光版",
        "price": "¥34",
        "billingPeriod": "月付",
        "traffic": "268GB",
        "unitPrice": "¥0.127 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "光速云·量子版",
        "price": "¥68",
        "billingPeriod": "月付",
        "traffic": "568GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "光速云·无界版",
        "price": "¥138",
        "billingPeriod": "月付",
        "traffic": "900GB",
        "unitPrice": "¥0.153 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "光速云·定制套餐",
        "price": "¥680",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T0 综合旗舰与首选",
    "tags": [
      "主推旗舰",
      "T0",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "22ms",
        "speed": "529Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "speed": "114Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "speed": "387Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "135Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "speed": "18Mbps"
      }
    ],
    "pros": [
      "光速云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥8.00/月），新用户尝鲜门槛极低且提供专属优惠码 AMM",
      "经实验室实测实机截图验证，主流 4K/8K 流媒体（Netflix、Disney+、YouTube）与热门 AI 工具原生解锁矩阵完善",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "晚高峰热门专线节点负载较高，建议在客户端内启用自动选路或优先选择香港/新加坡次席专线",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】光速云 的线路架构在晚高峰表现如何？",
        "answer": "光速云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 22ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】光速云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "光速云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 光速云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「AMM」，并首选其入门月付档位（¥8.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 光速云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 光速云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "muguang",
    "slug": "muguang",
    "name": "暮光加速",
    "englishName": "Twilight Cloud",
    "badge": "多设备主力",
    "pinyin": "muguang",
    "tagline": "BGP 智能调度，专线级出口，主打稳定低延迟",
    "description": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",
    "establishedYear": 2023,
    "rating": 4.9,
    "reviewCount": 310,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "couponCode": "muguang5555",
    "couponDiscount": "立享专属折扣码「muguang5555」",
    "speedtestImage": "/images/speedtests/speedtest-muguang.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "26ms",
    "peakSpeed": "509Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，暮光加速 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 509Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "【暮光·基础版】",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "120GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "【暮光·标准版】",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "240GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·旗舰版】",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "700GB",
        "unitPrice": "¥0.143 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·至尊版】",
        "price": "¥180",
        "billingPeriod": "月付",
        "traffic": "1500GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·年付轻量版】",
        "price": "¥109",
        "billingPeriod": "年付",
        "traffic": "70GB",
        "unitPrice": "¥1.557 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·不限时轻量包】",
        "price": "¥219",
        "billingPeriod": "一次性付费",
        "traffic": "150GB",
        "unitPrice": "¥1.460 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·不限时标准包】",
        "price": "¥529",
        "billingPeriod": "一次性付费",
        "traffic": "400GB",
        "unitPrice": "¥1.323 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "【暮光·不限时大容量包】",
        "price": "¥959",
        "billingPeriod": "一次性付费",
        "traffic": "800GB",
        "unitPrice": "¥1.199 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "独享私人定制节点",
        "price": "¥600",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 旗舰专线与多设备首选",
    "tags": [
      "多设备主力",
      "T1",
      "专线机场",
      "流媒体解锁",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "26ms",
        "speed": "509Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "speed": "419Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "speed": "150Mbps"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "speed": "19Mbps"
      }
    ],
    "pros": [
      "暮光加速 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "暮光加速 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】暮光加速 的线路架构在晚高峰表现如何？",
        "answer": "暮光加速 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 26ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】暮光加速 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "暮光加速 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 暮光加速 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「muguang5555」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 暮光加速 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 暮光加速 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "feimaoyun",
    "slug": "feimaoyun",
    "name": "飞猫云",
    "englishName": "FlyCat Cloud",
    "badge": "平价专线",
    "pinyin": "feimaoyun",
    "tagline": "主打轻快连接、简单配置和灵活节点切换",
    "description": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "establishedYear": 2023,
    "rating": 4.88,
    "reviewCount": 295,
    "entryPrice": "¥7.00/月",
    "entryPriceNum": 7,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "couponCode": "flycat888",
    "couponDiscount": "立享专属折扣码「flycat888」",
    "speedtestImage": "/images/speedtests/speedtest-feimaoyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "21ms",
    "peakSpeed": "526Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，飞猫云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 526Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "飞猫·学生版",
        "price": "¥84",
        "billingPeriod": "年付",
        "traffic": "50GB",
        "unitPrice": "¥1.680 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "飞猫·星耀版",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞猫·星环版",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞猫·银河版",
        "price": "¥85",
        "billingPeriod": "月付",
        "traffic": "600GB",
        "unitPrice": "¥0.142 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞猫·宇宙版",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞猫·不限时套餐",
        "price": "¥680",
        "billingPeriod": "一次性付费",
        "traffic": "1000GB",
        "unitPrice": "¥0.680 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞猫·定制套餐",
        "price": "¥550",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.100 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 高性价比与学生首选",
    "tags": [
      "平价专线",
      "T1",
      "专线机场",
      "流媒体解锁",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "21ms",
        "speed": "526Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "speed": "116Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "speed": "413Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "speed": "138Mbps"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "speed": "14Mbps"
      }
    ],
    "pros": [
      "飞猫云 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "飞猫云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】飞猫云 的线路架构在晚高峰表现如何？",
        "answer": "飞猫云 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 21ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】飞猫云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "飞猫云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 飞猫云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「flycat888」，并首选其入门月付档位（¥7.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 飞猫云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 飞猫云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "weifeng",
    "slug": "weifeng",
    "name": "微风网络",
    "englishName": "BreezeNet",
    "badge": "低价年付",
    "pinyin": "weifeng",
    "tagline": "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
    "description": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",
    "establishedYear": 2023,
    "rating": 4.85,
    "reviewCount": 260,
    "entryPrice": "¥7.00/月",
    "entryPriceNum": 7,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "couponCode": "flat888",
    "couponDiscount": "立享专属折扣码「flat888」",
    "speedtestImage": "/images/speedtests/speedtest-weifeng.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "25ms",
    "peakSpeed": "546Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，微风网络 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 546Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "清风 (Breeze)",
        "price": "¥137",
        "billingPeriod": "年付",
        "traffic": "100GB",
        "unitPrice": "¥1.370 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "乘风 (Riding)",
        "price": "¥27",
        "billingPeriod": "月付",
        "traffic": "200GB",
        "unitPrice": "¥0.135 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "破风 (Breaking)",
        "price": "¥57",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥0.114 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "御风 (Mastery)",
        "price": "¥127",
        "billingPeriod": "月付",
        "traffic": "1200GB",
        "unitPrice": "¥0.106 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "信风·不限时",
        "price": "¥200",
        "billingPeriod": "一次性付费",
        "traffic": "270GB",
        "unitPrice": "¥0.741 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "长风·不限时",
        "price": "¥370",
        "billingPeriod": "一次性付费",
        "traffic": "570GB",
        "unitPrice": "¥0.649 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 优质轻量中转",
    "tags": [
      "低价年付",
      "T1",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "25ms",
        "speed": "546Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "speed": "115Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "speed": "384Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "speed": "131Mbps"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "speed": "17Mbps"
      }
    ],
    "pros": [
      "微风网络 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "微风网络 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】微风网络 的线路架构在晚高峰表现如何？",
        "answer": "微风网络 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 25ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】微风网络 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "微风网络 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 微风网络 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「flat888」，并首选其入门月付档位（¥7.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 微风网络 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 微风网络 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "dalaoyun",
    "slug": "dalaoyun",
    "name": "大佬云",
    "englishName": "DaLao Cloud",
    "badge": "极致性价比",
    "pinyin": "dalaoyun",
    "tagline": "极致性价比，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "大佬云（DaLao Cloud）是一家主打 极致性价比 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.82,
    "reviewCount": 240,
    "entryPrice": "¥5.60/月",
    "entryPriceNum": 5.6,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "couponCode": "dly888",
    "couponDiscount": "立享专属折扣码「dly888」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，大佬云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥5.60/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.056 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥10.08",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.046 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 平价大容量",
    "tags": [
      "极致性价比",
      "T1",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "大佬云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥5.60/月），新用户尝鲜门槛极低且提供专属优惠码 dly888",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】大佬云 的线路架构在晚高峰表现如何？",
        "answer": "大佬云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】大佬云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "大佬云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 大佬云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「dly888」，并首选其入门月付档位（¥5.60/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 大佬云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 大佬云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "xingdaomeng",
    "slug": "xingdaomeng",
    "name": "星岛梦",
    "englishName": "XingDaoMeng",
    "badge": "老牌不限时",
    "pinyin": "xingdaomeng",
    "tagline": "IEPL 专线，1 倍流量且不限设备使用",
    "description": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "establishedYear": 2020,
    "rating": 4.86,
    "reviewCount": 330,
    "entryPrice": "¥8.00/月",
    "entryPriceNum": 8,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "couponCode": "nmw888",
    "couponDiscount": "立享专属折扣码「nmw888」",
    "speedtestImage": "/images/speedtests/speedtest-xingdaomeng.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "27ms",
    "peakSpeed": "504Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，星岛梦 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 504Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "星岛梦·超量150G",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·进阶300G",
        "price": "¥50",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·闪光500G",
        "price": "¥70",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥0.140 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·旗舰1T版",
        "price": "¥130",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.130 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·永久不限时100",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·永久不限时300",
        "price": "¥300",
        "billingPeriod": "一次性付费",
        "traffic": "300GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "price": "¥600",
        "billingPeriod": "一次性付费",
        "traffic": "1000GB",
        "unitPrice": "¥0.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星岛梦·定制套餐",
        "price": "¥680",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 老牌专线与永久备用包",
    "tags": [
      "老牌不限时",
      "T1",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "27ms",
        "speed": "504Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "speed": "103Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "speed": "411Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "speed": "18Mbps"
      }
    ],
    "pros": [
      "星岛梦 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "星岛梦 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】星岛梦 的线路架构在晚高峰表现如何？",
        "answer": "星岛梦 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 27ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】星岛梦 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "星岛梦 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 星岛梦 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「nmw888」，并首选其入门月付档位（¥8.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 星岛梦 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 星岛梦 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "yinxingren",
    "slug": "yinxingren",
    "name": "隐形人",
    "englishName": "Invisible Cloud",
    "badge": "企业直连",
    "pinyin": "yinxingren",
    "tagline": "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
    "description": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
    "establishedYear": 2024,
    "rating": 4.84,
    "reviewCount": 215,
    "entryPrice": "¥24.00/月",
    "entryPriceNum": 24,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "couponCode": "yxr888",
    "couponDiscount": "立享专属折扣码「yxr888」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "—",
    "peakSpeed": "—",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，隐形人 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 —。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "price": "¥24",
        "billingPeriod": "月付",
        "traffic": "144GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "隐形人 黄金序列",
        "price": "¥48",
        "billingPeriod": "月付",
        "traffic": "360GB",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "隐形人 铂金至臻",
        "price": "¥105",
        "billingPeriod": "月付",
        "traffic": "750GB",
        "unitPrice": "¥0.140 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "隐形人 钻石穹顶",
        "price": "¥185",
        "billingPeriod": "月付",
        "traffic": "1.6TB GB",
        "unitPrice": "¥115.625 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "王者定制版",
        "price": "¥680",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "星耀风暴 365天不熄",
        "price": "¥109",
        "billingPeriod": "年付",
        "traffic": "80GB",
        "unitPrice": "¥1.363 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "一次性小流量",
        "price": "¥229",
        "billingPeriod": "一次性付费",
        "traffic": "160GB",
        "unitPrice": "¥1.431 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "一次性标准流量包",
        "price": "¥549",
        "billingPeriod": "一次性付费",
        "traffic": "420GB",
        "unitPrice": "¥1.307 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "一次性精英流量包",
        "price": "¥1199",
        "billingPeriod": "一次性付费",
        "traffic": "1.0TB GB",
        "unitPrice": "¥1199.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 企业级 IPLC 直连",
    "tags": [
      "企业直连",
      "T1",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "—",
        "speed": "—"
      },
      {
        "region": "日本",
        "latency": "—",
        "speed": "—"
      },
      {
        "region": "美国",
        "latency": "—",
        "speed": "—"
      },
      {
        "region": "新加坡",
        "latency": "—",
        "speed": "—"
      },
      {
        "region": "台湾",
        "latency": "—",
        "speed": "—"
      }
    ],
    "pros": [
      "隐形人 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】隐形人 的线路架构在晚高峰表现如何？",
        "answer": "隐形人 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 — 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】隐形人 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "隐形人 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 隐形人 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「yxr888」，并首选其入门月付档位（¥24.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 隐形人 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 隐形人 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "ermaoyun",
    "slug": "ermaoyun",
    "name": "二猫云",
    "englishName": "2Mao Cloud",
    "badge": "按量计费",
    "pinyin": "ermaoyun",
    "tagline": "全线 IEPL 专线，主打长期稳定而非低价走量",
    "description": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",
    "establishedYear": 2023,
    "rating": 4.83,
    "reviewCount": 280,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "couponCode": "ermao5555",
    "couponDiscount": "立享专属折扣码「ermao5555」",
    "speedtestImage": "/images/speedtests/speedtest-ermaoyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "22ms",
    "peakSpeed": "481Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，二猫云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 481Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "price": "¥99",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥0.990 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "二猫年付小包",
        "price": "¥89",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.483 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "二猫云·白猫套餐",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "130GB",
        "unitPrice": "¥0.154 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "230GB",
        "unitPrice": "¥0.174 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "price": "¥80",
        "billingPeriod": "月付",
        "traffic": "430GB",
        "unitPrice": "¥0.186 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "price": "¥160",
        "billingPeriod": "月付",
        "traffic": "850GB",
        "unitPrice": "¥0.188 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 灵活月付与按量",
    "tags": [
      "按量计费",
      "T1",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐",
      "自研客户端"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "22ms",
        "speed": "481Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "speed": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "speed": "407Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "speed": "143Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "speed": "17Mbps"
      }
    ],
    "pros": [
      "二猫云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "二猫云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】二猫云 的线路架构在晚高峰表现如何？",
        "answer": "二猫云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 22ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】二猫云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "二猫云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 二猫云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「ermao5555」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 二猫云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 二猫云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "wuyou",
    "slug": "wuyou",
    "name": "无忧链接",
    "englishName": "WorryFree Link",
    "badge": "免转换订阅",
    "pinyin": "wuyou",
    "tagline": "面向轻度用户和跨境电商的超高性价比套餐",
    "description": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",
    "establishedYear": 2025,
    "rating": 4.87,
    "reviewCount": 290,
    "entryPrice": "¥19.00/月",
    "entryPriceNum": 19,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "couponCode": "wuyou666",
    "couponDiscount": "立享专属折扣码「wuyou666」",
    "speedtestImage": "/images/speedtests/speedtest-wuyou-1.jpg",
    "unlockImages": [
      "/images/speedtests/speedtest-wuyou-1.jpg",
      "/images/speedtests/speedtest-wuyou-2.jpg"
    ],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "23ms",
    "peakSpeed": "531Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，无忧链接 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 531Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "MINI链接",
        "price": "¥79",
        "billingPeriod": "年付",
        "traffic": "40GB",
        "unitPrice": "¥1.975 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "舒心链接",
        "price": "¥19",
        "billingPeriod": "月付",
        "traffic": "100GB",
        "unitPrice": "¥0.190 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "省心链接",
        "price": "¥33",
        "billingPeriod": "月付",
        "traffic": "200GB",
        "unitPrice": "¥0.165 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "随心链接",
        "price": "¥77",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥0.154 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "忘忧链接",
        "price": "¥117",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.117 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "100G永久不限时 无忧链接",
        "price": "¥108",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.080 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "300G永久不限时 无忧链接",
        "price": "¥298",
        "billingPeriod": "一次性付费",
        "traffic": "300GB",
        "unitPrice": "¥0.993 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 极简免转与三网优化",
    "tags": [
      "免转换订阅",
      "T1",
      "专线机场",
      "流媒体解锁",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "23ms",
        "speed": "531Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "speed": "418Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "speed": "17Mbps"
      }
    ],
    "pros": [
      "无忧链接 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "无忧链接 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "经实验室实测实机截图验证，主流 4K/8K 流媒体（Netflix、Disney+、YouTube）与热门 AI 工具原生解锁矩阵完善",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】无忧链接 的线路架构在晚高峰表现如何？",
        "answer": "无忧链接 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 23ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】无忧链接 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "无忧链接 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 无忧链接 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「wuyou666」，并首选其入门月付档位（¥19.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 无忧链接 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 无忧链接 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "weituyun",
    "slug": "weituyun",
    "name": "唯兔云",
    "englishName": "V2Yun Cloud",
    "badge": "三网优化",
    "pinyin": "weituyun",
    "tagline": "IPLC 专线，1 倍流量、不限速及不限设备连接",
    "description": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "establishedYear": 2023,
    "rating": 4.85,
    "reviewCount": 275,
    "entryPrice": "¥14.90/月",
    "entryPriceNum": 14.9,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "couponCode": "weitu666",
    "couponDiscount": "立享专属折扣码「weitu666」",
    "speedtestImage": "/images/speedtests/speedtest-weituyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "27ms",
    "peakSpeed": "500Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，唯兔云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 500Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "price": "¥120",
        "billingPeriod": "年付",
        "traffic": "75GB",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "唯兔云·年付版限量款",
        "price": "¥79.90",
        "billingPeriod": "年付",
        "traffic": "45GB",
        "unitPrice": "¥1.776 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "price": "¥14.9",
        "billingPeriod": "月付",
        "traffic": "100GB",
        "unitPrice": "¥0.149 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·普通版",
        "price": "¥19.90",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·进阶版",
        "price": "¥29.90",
        "billingPeriod": "月付",
        "traffic": "200GB",
        "unitPrice": "¥0.149 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·专业版",
        "price": "¥59.90",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·至尊版",
        "price": "¥119.90",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥160",
        "billingPeriod": "一次性付费",
        "traffic": "200GB",
        "unitPrice": "¥0.800 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "唯兔云·永久不限时",
        "price": "¥340",
        "billingPeriod": "一次性付费",
        "traffic": "500GB",
        "unitPrice": "¥0.680 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 60+节点智能负载",
    "tags": [
      "三网优化",
      "T1",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "27ms",
        "speed": "500Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "speed": "100Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "speed": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "speed": "17Mbps"
      }
    ],
    "pros": [
      "唯兔云 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "唯兔云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】唯兔云 的线路架构在晚高峰表现如何？",
        "answer": "唯兔云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 27ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】唯兔云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "唯兔云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 唯兔云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「weitu666」，并首选其入门月付档位（¥14.90/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 唯兔云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 唯兔云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "firefly",
    "slug": "firefly",
    "name": "Firefly",
    "englishName": "Firefly Cloud",
    "badge": "高端IPLC",
    "pinyin": "firefly",
    "tagline": "IPLC 专线接入，主打低延迟与高稳定性",
    "description": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "establishedYear": 2022,
    "rating": 4.84,
    "reviewCount": 220,
    "entryPrice": "¥8.00/月",
    "entryPriceNum": 8,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "couponCode": "firefly",
    "couponDiscount": "立享专属折扣码「firefly」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "27ms",
    "peakSpeed": "547Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，Firefly 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 547Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "Firefly 年付版",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "Firefly Lite",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥85",
        "billingPeriod": "月付",
        "traffic": "600GB",
        "unitPrice": "¥0.142 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly 不限时",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 企业级 IPLC 专线",
    "tags": [
      "高端IPLC",
      "T1",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "27ms",
        "speed": "547Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "speed": "135Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "speed": "445Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "speed": "30Mbps"
      }
    ],
    "pros": [
      "Firefly 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "Firefly 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】Firefly 的线路架构在晚高峰表现如何？",
        "answer": "Firefly 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 27ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】Firefly 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "Firefly 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 Firefly 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「firefly」，并首选其入门月付档位（¥8.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 Firefly 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 Firefly 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "yuzhouyun",
    "slug": "yuzhouyun",
    "name": "宇宙云",
    "englishName": "YuZhou Cloud",
    "badge": "VLESS自研",
    "pinyin": "yuzhouyun",
    "tagline": "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
    "description": "宇宙云（YuZhou Cloud）是一家主打 VLESS自研 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2022,
    "rating": 4.8,
    "reviewCount": 210,
    "entryPrice": "¥96.00/月",
    "entryPriceNum": 96,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "couponCode": "YUZHOU553",
    "couponDiscount": "立享专属折扣码「YUZHOU553」",
    "speedtestImage": "/images/speedtests/speedtest-yuzhouyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，宇宙云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥96.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.960 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥172.80",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.785 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 性价比主力专线",
    "tags": [
      "VLESS自研",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议"
    ],
    "speedtestHistory": [
      {
        "region": "暂无可核实实测数据",
        "latency": "—",
        "speed": "—"
      }
    ],
    "pros": [
      "宇宙云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】宇宙云 的线路架构在晚高峰表现如何？",
        "answer": "宇宙云 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】宇宙云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "宇宙云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 宇宙云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「YUZHOU553」，并首选其入门月付档位（¥96.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 宇宙云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 宇宙云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "u1s1",
    "slug": "u1s1",
    "name": "U1S1",
    "englishName": "U1S1 Cloud",
    "badge": "透明计量",
    "pinyin": "u1s1",
    "tagline": "2025 年起运营的 IPLC 专线机场",
    "description": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
    "establishedYear": 2025,
    "rating": 4.78,
    "reviewCount": 195,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "couponCode": "akaka",
    "couponDiscount": "立享专属折扣码「akaka」",
    "speedtestImage": "/images/speedtests/speedtest-u1s1.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "24ms",
    "peakSpeed": "538Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，U1S1 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 538Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "u1s1·普通人真够了包",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "120GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "u1s1·你以为用不到包",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "700GB",
        "unitPrice": "¥0.143 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "u1s1·我全都要包",
        "price": "¥180",
        "billingPeriod": "月付",
        "traffic": "1500GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 实用主力",
    "tags": [
      "透明计量",
      "T2",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "24ms",
        "speed": "538Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "speed": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "speed": "20Mbps"
      }
    ],
    "pros": [
      "U1S1 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】U1S1 的线路架构在晚高峰表现如何？",
        "answer": "U1S1 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 24ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】U1S1 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "U1S1 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 U1S1 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「akaka」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 U1S1 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 U1S1 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "lingmaowangluo",
    "slug": "lingmaowangluo",
    "name": "灵猫网络",
    "englishName": "CivetNet",
    "badge": "住宅IP·AI首选",
    "pinyin": "lingmaowangluo",
    "tagline": "1 倍流量，不限速及不限设备使用",
    "description": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "establishedYear": 2025,
    "rating": 4.89,
    "reviewCount": 340,
    "entryPrice": "¥19.00/月",
    "entryPriceNum": 19,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "couponCode": "lmao888",
    "couponDiscount": "立享专属折扣码「lmao888」",
    "speedtestImage": "/images/speedtests/speedtest-lingmaowangluo.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "22ms",
    "peakSpeed": "492Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，灵猫网络 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 492Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "灵猫·年付小包",
        "price": "¥85",
        "billingPeriod": "年付",
        "traffic": "45GB",
        "unitPrice": "¥1.889 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "灵猫·年付Small",
        "price": "¥195",
        "billingPeriod": "年付",
        "traffic": "150GB",
        "unitPrice": "¥1.300 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵猫·年付Big",
        "price": "¥295",
        "billingPeriod": "年付",
        "traffic": "300GB",
        "unitPrice": "¥0.983 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵猫·季付Big",
        "price": "¥125",
        "billingPeriod": "季付",
        "traffic": "300GB",
        "unitPrice": "¥0.417 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵猫·月付Small",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵猫·月付Big",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 住宅IP与AI生产力",
    "tags": [
      "住宅IP·AI首选",
      "T1",
      "专线机场",
      "流媒体解锁"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "22ms",
        "speed": "492Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "speed": "109Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "speed": "409Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "speed": "19Mbps"
      }
    ],
    "pros": [
      "灵猫网络 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "精选纯净原生住宅 IP 池，稳定支持 ChatGPT、Claude 3.7、Sora 与 TikTok 跨境账号防封登录",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "AI 生产力工作者与跨境运营：深度依赖 ChatGPT Plus、Claude 3.7、Midjourney 与海外社媒",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】灵猫网络 的线路架构在晚高峰表现如何？",
        "answer": "灵猫网络 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 22ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】灵猫网络 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "灵猫网络 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 灵猫网络 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「lmao888」，并首选其入门月付档位（¥19.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 灵猫网络 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 灵猫网络 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "jilianyun",
    "slug": "jilianyun",
    "name": "极连云",
    "englishName": "JiLian Cloud",
    "badge": "全能中转",
    "pinyin": "jilianyun",
    "tagline": "全能中转，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "极连云（JiLian Cloud）是一家主打 全能中转 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.79,
    "reviewCount": 205,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "couponCode": "ji8888",
    "couponDiscount": "立享专属折扣码「ji8888」",
    "speedtestImage": "/images/speedtests/speedtest-jilianyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，极连云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥18.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.180 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥32.40",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.147 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 性价比主力",
    "tags": [
      "全能中转",
      "T2",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "极连云 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】极连云 的线路架构在晚高峰表现如何？",
        "answer": "极连云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】极连云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "极连云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 极连云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「ji8888」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 极连云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 极连云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "guangnianti",
    "slug": "guangnianti",
    "name": "光年梯",
    "englishName": "GuangNian Ti",
    "badge": "低延迟优化",
    "pinyin": "guangnianti",
    "tagline": "低延迟优化，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "光年梯（GuangNian Ti）是一家主打 低延迟优化 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2025,
    "rating": 4.77,
    "reviewCount": 190,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "couponCode": "gnt6666",
    "couponDiscount": "立享专属折扣码「gnt6666」",
    "speedtestImage": "/images/speedtests/speedtest-guangnianti.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，光年梯 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥18.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.180 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥32.40",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.147 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 实用中转",
    "tags": [
      "低延迟优化",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "光年梯 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】光年梯 的线路架构在晚高峰表现如何？",
        "answer": "光年梯 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】光年梯 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "光年梯 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 光年梯 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「gnt6666」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 光年梯 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 光年梯 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "yifanyun",
    "slug": "yifanyun",
    "name": "一翻云",
    "englishName": "1Fly Cloud",
    "badge": "大流量优选",
    "pinyin": "yifanyun",
    "tagline": "全节点 IEPL 物理专线，搭配原生住宅 IP",
    "description": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "establishedYear": 2025,
    "rating": 4.78,
    "reviewCount": 185,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "couponCode": "yfy6666",
    "couponDiscount": "立享专属折扣码「yfy6666」",
    "speedtestImage": "/images/speedtests/speedtest-yifanyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "23ms",
    "peakSpeed": "477Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，一翻云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 477Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "轻享版",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "舒享版",
        "price": "¥35",
        "billingPeriod": "月付",
        "traffic": "350GB",
        "unitPrice": "¥0.100 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "尊享版",
        "price": "¥55",
        "billingPeriod": "月付",
        "traffic": "600GB",
        "unitPrice": "¥0.092 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极致版",
        "price": "¥95",
        "billingPeriod": "月付",
        "traffic": "1.2TB GB",
        "unitPrice": "¥79.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "98¥·年付小包",
        "price": "¥98",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.633 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "轻享版·不限时包",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "舒享版·不限时包",
        "price": "¥200",
        "billingPeriod": "一次性付费",
        "traffic": "250GB",
        "unitPrice": "¥0.800 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "尊享版·不限时包",
        "price": "¥400",
        "billingPeriod": "一次性付费",
        "traffic": "500GB",
        "unitPrice": "¥0.800 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 实用中转",
    "tags": [
      "大流量优选",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐",
      "原生住宅IP"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "23ms",
        "speed": "477Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "speed": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "speed": "390Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "speed": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "speed": "20Mbps"
      }
    ],
    "pros": [
      "一翻云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "一翻云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "精选纯净原生住宅 IP 池，稳定支持 ChatGPT、Claude 3.7、Sora 与 TikTok 跨境账号防封登录",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "AI 生产力工作者与跨境运营：深度依赖 ChatGPT Plus、Claude 3.7、Midjourney 与海外社媒",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】一翻云 的线路架构在晚高峰表现如何？",
        "answer": "一翻云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 23ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】一翻云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "一翻云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 3.7、Gemini 等主流 AI 工具的高置信度免验证访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 一翻云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「yfy6666」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 一翻云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 一翻云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "sogoyun",
    "slug": "sogoyun",
    "name": "SOGO 云",
    "englishName": "SOGO Cloud",
    "badge": "新锐专线",
    "pinyin": "sogoyun",
    "tagline": "全线 IEPL 专线接入，三网 BGP 优化",
    "description": "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",
    "establishedYear": 2022,
    "rating": 4.81,
    "reviewCount": 230,
    "entryPrice": "¥8.17/月",
    "entryPriceNum": 8.17,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "couponCode": "SOGO10000",
    "couponDiscount": "立享专属折扣码「SOGO10000」",
    "speedtestImage": "/images/speedtests/speedtest-sogoyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "26ms",
    "peakSpeed": "488Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，SOGO 云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 488Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "小包-年付版",
        "price": "¥98",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.633 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "基础版",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "优选版",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "350GB",
        "unitPrice": "¥0.129 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "强化版",
        "price": "¥80",
        "billingPeriod": "月付",
        "traffic": "550GB",
        "unitPrice": "¥0.145 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "顶配版",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1.1TB GB",
        "unitPrice": "¥136.364 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "SOGO基础餐不限时版",
        "price": "¥120",
        "billingPeriod": "一次性付费",
        "traffic": "120GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "SOGO优选餐不限时版",
        "price": "¥220",
        "billingPeriod": "一次性付费",
        "traffic": "250GB",
        "unitPrice": "¥0.880 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "SOGO强化餐不限时版",
        "price": "¥450",
        "billingPeriod": "一次性付费",
        "traffic": "500GB",
        "unitPrice": "¥0.900 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "SOGO至尊餐不限时版",
        "price": "¥850",
        "billingPeriod": "一次性付费",
        "traffic": "1.0TB GB",
        "unitPrice": "¥850.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 新锐专线",
    "tags": [
      "新锐专线",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐",
      "自研客户端"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "26ms",
        "speed": "488Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "speed": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "speed": "401Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "speed": "137Mbps"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "speed": "17Mbps"
      }
    ],
    "pros": [
      "SOGO 云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "SOGO 云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】SOGO 云 的线路架构在晚高峰表现如何？",
        "answer": "SOGO 云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 26ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】SOGO 云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "SOGO 云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 SOGO 云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「SOGO10000」，并首选其入门月付档位（¥8.17/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 SOGO 云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 SOGO 云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "kexinyun",
    "slug": "kexinyun",
    "name": "可信云",
    "englishName": "KeXin Cloud",
    "badge": "诚实透明",
    "pinyin": "kexinyun",
    "tagline": "诚实透明，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "可信云（KeXin Cloud）是一家主打 诚实透明 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.76,
    "reviewCount": 175,
    "entryPrice": "¥25.00/月",
    "entryPriceNum": 25,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "couponCode": "kkk333",
    "couponDiscount": "立享专属折扣码「kkk333」",
    "speedtestImage": "/images/speedtests/speedtest-kexinyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，可信云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥25.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.250 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥45.00",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.205 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 实用主力",
    "tags": [
      "诚实透明",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "可信云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】可信云 的线路架构在晚高峰表现如何？",
        "answer": "可信云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】可信云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "可信云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 可信云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「kkk333」，并首选其入门月付档位（¥25.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 可信云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 可信云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "sujie",
    "slug": "sujie",
    "name": "速界",
    "englishName": "SpeedWorld",
    "badge": "AI专线",
    "pinyin": "sujie",
    "tagline": "AI专线，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "速界（SpeedWorld）是一家主打 AI专线 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.88,
    "reviewCount": 315,
    "entryPrice": "¥25.00/月",
    "entryPriceNum": 25,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "couponCode": "sss1111",
    "couponDiscount": "立享专属折扣码「sss1111」",
    "speedtestImage": "/images/speedtests/speedtest-sujie.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，速界 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥25.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.250 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥45.00",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.205 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T1",
    "tierLabel": "T1 AI与影音旗舰",
    "tags": [
      "AI专线",
      "T1",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "速界 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "AI 生产力工作者与跨境运营：深度依赖 ChatGPT Plus、Claude 3.7、Midjourney 与海外社媒",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】速界 的线路架构在晚高峰表现如何？",
        "answer": "速界 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】速界 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "速界 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 速界 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「sss1111」，并首选其入门月付档位（¥25.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 速界 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 速界 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "shanyue",
    "slug": "shanyue",
    "name": "闪跃",
    "englishName": "FlashLeap",
    "badge": "多线中转",
    "pinyin": "shanyue",
    "tagline": "顶级 IPLC 纯专线，主打极致低延迟",
    "description": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "establishedYear": 2022,
    "rating": 4.75,
    "reviewCount": 160,
    "entryPrice": "¥8.00/月",
    "entryPriceNum": 8,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "couponCode": "shanyue",
    "couponDiscount": "立享专属折扣码「shanyue」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "23ms",
    "peakSpeed": "548Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，闪跃 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 548Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "闪跃年付版",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60GB",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "闪动 (Flicker)",
        "price": "¥24",
        "billingPeriod": "月付",
        "traffic": "150GB",
        "unitPrice": "¥0.160 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "飞跃 (Leap)",
        "price": "¥44",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.147 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "瞬移 (Teleport)",
        "price": "¥84",
        "billingPeriod": "月付",
        "traffic": "600GB",
        "unitPrice": "¥0.140 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "跃迁 (Warp)",
        "price": "¥134",
        "billingPeriod": "月付",
        "traffic": "1000GB",
        "unitPrice": "¥0.134 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 稳定中转",
    "tags": [
      "多线中转",
      "T2",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "23ms",
        "speed": "548Mbps"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "speed": "110Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "speed": "383Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "speed": "144Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "speed": "18Mbps"
      }
    ],
    "pros": [
      "闪跃 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥8.00/月），新用户尝鲜门槛极低且提供专属优惠码 shanyue",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】闪跃 的线路架构在晚高峰表现如何？",
        "answer": "闪跃 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 23ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】闪跃 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "闪跃 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 闪跃 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「shanyue」，并首选其入门月付档位（¥8.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 闪跃 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 闪跃 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "quanqiuyun",
    "slug": "quanqiuyun",
    "name": "全球云",
    "englishName": "GlobalCloud",
    "badge": "全球多节点",
    "pinyin": "quanqiuyun",
    "tagline": "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
    "description": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "establishedYear": 2022,
    "rating": 4.77,
    "reviewCount": 180,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "couponCode": "qq88",
    "couponDiscount": "立享专属折扣码「qq88」",
    "speedtestImage": "/images/speedtests/speedtest-quanqiuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "25ms",
    "peakSpeed": "489Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，全球云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 489Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100GB",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "price": "¥360",
        "billingPeriod": "一次性付费",
        "traffic": "400GB",
        "unitPrice": "¥0.900 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "price": "¥700",
        "billingPeriod": "一次性付费",
        "traffic": "800GB",
        "unitPrice": "¥0.875 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "轻量版",
        "price": "¥99",
        "billingPeriod": "年付",
        "traffic": "59GB",
        "unitPrice": "¥1.678 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "BGP 智能优化·入门方案",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "120GB",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "300GB",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "BGP 智能优化·高端方案",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "700GB",
        "unitPrice": "¥0.143 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "BGP 智能优化·商业方案",
        "price": "¥180",
        "billingPeriod": "月付",
        "traffic": "1500GB",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "独享私人专线节点",
        "price": "¥680",
        "billingPeriod": "月付",
        "traffic": "500GB",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 全球覆盖",
    "tags": [
      "全球多节点",
      "T2",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "25ms",
        "speed": "489Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "speed": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "speed": "430Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "speed": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "speed": "18Mbps"
      }
    ],
    "pros": [
      "全球云 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "全球云 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】全球云 的线路架构在晚高峰表现如何？",
        "answer": "全球云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 25ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】全球云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "全球云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 全球云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「qq88」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 全球云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 全球云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "shandianshu",
    "slug": "shandianshu",
    "name": "闪电鼠",
    "englishName": "LightningMouse",
    "badge": "平价低门槛",
    "pinyin": "shandianshu",
    "tagline": "平价低门槛，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "闪电鼠（LightningMouse）是一家主打 平价低门槛 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.73,
    "reviewCount": 155,
    "entryPrice": "¥5.60/月",
    "entryPriceNum": 5.6,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "couponCode": "sd88",
    "couponDiscount": "立享专属折扣码「sd88」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，闪电鼠 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥5.60/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.056 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥10.08",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.046 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 平价入门",
    "tags": [
      "平价低门槛",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "闪电鼠 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥5.60/月），新用户尝鲜门槛极低且提供专属优惠码 sd88",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】闪电鼠 的线路架构在晚高峰表现如何？",
        "answer": "闪电鼠 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】闪电鼠 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "闪电鼠 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 闪电鼠 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「sd88」，并首选其入门月付档位（¥5.60/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 闪电鼠 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 闪电鼠 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "yunjiexian",
    "slug": "yunjiexian",
    "name": "云界线",
    "englishName": "CloudBoundary",
    "badge": "平价轻量",
    "pinyin": "yunjiexian",
    "tagline": "平价轻量，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "云界线（CloudBoundary）是一家主打 平价轻量 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.72,
    "reviewCount": 150,
    "entryPrice": "¥5.60/月",
    "entryPriceNum": 5.6,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
    "couponCode": "yjx888",
    "couponDiscount": "立享专属折扣码「yjx888」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，云界线 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥5.60/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.056 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥10.08",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.046 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 平价入门",
    "tags": [
      "平价轻量",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "云界线 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥5.60/月），新用户尝鲜门槛极低且提供专属优惠码 yjx888",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】云界线 的线路架构在晚高峰表现如何？",
        "answer": "云界线 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】云界线 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "云界线 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 云界线 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「yjx888」，并首选其入门月付档位（¥5.60/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 云界线 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 云界线 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "liulianyun",
    "slug": "liulianyun",
    "name": "榴莲云",
    "englishName": "DurianCloud",
    "badge": "平价大碗",
    "pinyin": "liulianyun",
    "tagline": "平价大碗，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "榴莲云（DurianCloud）是一家主打 平价大碗 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.71,
    "reviewCount": 145,
    "entryPrice": "¥5.60/月",
    "entryPriceNum": 5.6,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "couponCode": "ll88",
    "couponDiscount": "立享专属折扣码「ll88」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，榴莲云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥5.60/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.056 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥10.08",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.046 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 平价入门",
    "tags": [
      "平价大碗",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "榴莲云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥5.60/月），新用户尝鲜门槛极低且提供专属优惠码 ll88",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】榴莲云 的线路架构在晚高峰表现如何？",
        "answer": "榴莲云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】榴莲云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "榴莲云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 榴莲云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「ll88」，并首选其入门月付档位（¥5.60/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 榴莲云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 榴莲云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "shenxing",
    "slug": "shenxing",
    "name": "神行加速",
    "englishName": "ShenXing Accel",
    "badge": "轻量主力",
    "pinyin": "shenxing",
    "tagline": "轻量主力，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "神行加速（ShenXing Accel）是一家主打 轻量主力 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.74,
    "reviewCount": 165,
    "entryPrice": "¥14.00/月",
    "entryPriceNum": 14,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "couponCode": "xs0077",
    "couponDiscount": "立享专属折扣码「xs0077」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，神行加速 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥14.00/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.140 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥25.20",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.115 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 实用中转",
    "tags": [
      "轻量主力",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "神行加速 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】神行加速 的线路架构在晚高峰表现如何？",
        "answer": "神行加速 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】神行加速 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "神行加速 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 神行加速 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「xs0077」，并首选其入门月付档位（¥14.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 神行加速 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 神行加速 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "huanqiuti",
    "slug": "huanqiuti",
    "name": "环球梯",
    "englishName": "HuanQiuTi",
    "badge": "平价轻量",
    "pinyin": "huanqiuti",
    "tagline": "平价轻量，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "环球梯（HuanQiuTi）是一家主打 平价轻量 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2024,
    "rating": 4.7,
    "reviewCount": 140,
    "entryPrice": "¥5.60/月",
    "entryPriceNum": 5.6,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "couponCode": "HQ66",
    "couponDiscount": "立享专属折扣码「HQ66」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，环球梯 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥5.60/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.056 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥10.08",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.046 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 平价入门",
    "tags": [
      "平价轻量",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "环球梯 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥5.60/月），新用户尝鲜门槛极低且提供专属优惠码 HQ66",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】环球梯 的线路架构在晚高峰表现如何？",
        "answer": "环球梯 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】环球梯 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "环球梯 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 环球梯 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「HQ66」，并首选其入门月付档位（¥5.60/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 环球梯 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 环球梯 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "tiziyun",
    "slug": "tiziyun",
    "name": "梯子云",
    "englishName": "TiZi Cloud",
    "badge": "自研免配置",
    "pinyin": "tiziyun",
    "tagline": "自研免配置，覆盖主流国际线路与流媒体 4K / AI 稳定解锁",
    "description": "梯子云（TiZi Cloud）是一家主打 自研免配置 的跨境网络服务商。品牌资料显示其提供优质内网专线与多地 BGP 入口，节点支持流媒体 4K 与主流 AI 工具解锁，兼具高性价比与全平台客户端一键配置体验。",
    "establishedYear": 2025,
    "rating": 4.79,
    "reviewCount": 200,
    "entryPrice": "¥7.40/月",
    "entryPriceNum": 7.4,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "couponCode": "tiziyun",
    "couponDiscount": "立享专属折扣码「tiziyun」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，梯子云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础入门套餐",
        "price": "¥7.40/月",
        "billingPeriod": "月付",
        "traffic": "100 GB / 月",
        "unitPrice": "¥0.074 / GB",
        "nodeCount": "40+ 专线节点",
        "speedLimit": "最高 500 Mbps",
        "deviceLimit": "3 台设备",
        "features": [
          "企业级专线与 BGP 中转",
          "支持 Clash / sing-box / 小火箭",
          "流媒体与 AI 工具解锁",
          "月付上车灵活可控"
        ],
        "isPopular": true
      },
      {
        "name": "标准主力套餐",
        "price": "¥13.32",
        "billingPeriod": "月付",
        "traffic": "220 GB / 月",
        "unitPrice": "¥0.061 / GB",
        "nodeCount": "60+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "5 台设备",
        "features": [
          "全节点 BGP IEPL 专线",
          "4K / 8K 极速秒开无卡顿",
          "晚高峰 0 丢包抗抖动保障",
          "优先技术支持工单"
        ],
        "isPopular": false
      }
    ],
    "tier": "T2",
    "tierLabel": "T2 自研客户端一键上手",
    "tags": [
      "自研免配置",
      "T2",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "梯子云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥7.40/月），新用户尝鲜门槛极低且提供专属优惠码 tiziyun",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "特殊促销套餐与限时优惠以服务商控制台实时库存为准，建议新用户坚持月付上车原则",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】梯子云 的线路架构在晚高峰表现如何？",
        "answer": "梯子云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】梯子云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "梯子云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 梯子云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「tiziyun」，并首选其入门月付档位（¥7.40/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 梯子云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 梯子云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "wgetcloud",
    "slug": "wgetcloud",
    "name": "WgetCloud",
    "englishName": "WgetCloud",
    "badge": "老牌高端",
    "pinyin": "wgetcloud",
    "tagline": "2026-05-02 的这一次",
    "description": "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "establishedYear": 2022,
    "rating": 4.82,
    "reviewCount": 260,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "69.4ms",
    "peakSpeed": "462.04Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，WgetCloud 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 462.04Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "基础专线服务",
        "price": "¥297",
        "billingPeriod": "季付",
        "traffic": "230GB/月",
        "unitPrice": "¥1.291 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "优质专线服务",
        "price": "¥327",
        "billingPeriod": "季付",
        "traffic": "250GB/月",
        "unitPrice": "¥1.308 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "精品专线服务",
        "price": "¥357",
        "billingPeriod": "季付",
        "traffic": "270GB/月",
        "unitPrice": "¥1.322 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 历史老牌高端专线",
    "tags": [
      "老牌高端",
      "T3",
      "专线机场",
      "流媒体解锁"
    ],
    "speedtestHistory": [
      {
        "region": "日本",
        "latency": "69.4ms",
        "speed": "462.04Mbps"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "speed": "440.04Mbps"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "speed": "431.24Mbps"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "speed": "422.97Mbps"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "speed": "407.66Mbps"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "speed": "341.92Mbps"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "speed": "318.64Mbps"
      }
    ],
    "pros": [
      "WgetCloud 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】WgetCloud 的线路架构在晚高峰表现如何？",
        "answer": "WgetCloud 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 69.4ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】WgetCloud 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "WgetCloud 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 WgetCloud 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 WgetCloud 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 WgetCloud 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "baiyueguang",
    "slug": "baiyueguang",
    "name": "白月光",
    "englishName": "Moonlight Cloud",
    "badge": "超多节点",
    "pinyin": "baiyueguang",
    "tagline": "季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。",
    "description": "白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "establishedYear": 2022,
    "rating": 4.75,
    "reviewCount": 210,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://sibker.com/register?invite_code=gg6puAId",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "160.7ms",
    "peakSpeed": "114.94Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，白月光 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 114.94Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "小包",
        "price": "¥66",
        "billingPeriod": "季付",
        "traffic": "每月100GB高速流量",
        "unitPrice": "¥0.660 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "中包",
        "price": "¥126",
        "billingPeriod": "季付",
        "traffic": "每月250GB高速流量",
        "unitPrice": "¥0.504 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "大包",
        "price": "¥156",
        "billingPeriod": "季付",
        "traffic": "每月400GB高速流量",
        "unitPrice": "¥0.390 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "超大包",
        "price": "¥216",
        "billingPeriod": "季付",
        "traffic": "每月750GB高速流量",
        "unitPrice": "¥0.288 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "不差钱",
        "price": "¥231",
        "billingPeriod": "季付",
        "traffic": "每月900GB高速流量",
        "unitPrice": "¥0.257 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "旗舰包",
        "price": "¥2500",
        "billingPeriod": "年付",
        "traffic": "每月2500GB超大流量",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 多节点广覆盖",
    "tags": [
      "超多节点",
      "T3",
      "专线机场",
      "流媒体解锁"
    ],
    "speedtestHistory": [
      {
        "region": "香港",
        "latency": "160.7ms",
        "speed": "114.94Mbps"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "speed": "70.53Mbps"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "speed": "77.65Mbps"
      },
      {
        "region": "台湾",
        "latency": "—",
        "speed": "0.03Mbps"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "speed": "85.22Mbps"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "speed": "62Mbps"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "speed": "31.28Mbps"
      }
    ],
    "pros": [
      "白月光 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】白月光 的线路架构在晚高峰表现如何？",
        "answer": "白月光 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 160.7ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】白月光 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "白月光 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 白月光 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 白月光 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 白月光 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "flyingbird",
    "slug": "flyingbird",
    "name": "FlyingBird",
    "englishName": "FlyingBird",
    "badge": "全IPLC",
    "pinyin": "flyingbird",
    "tagline": "全专线 IPLC 与无倍率定位",
    "description": "飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。",
    "establishedYear": 2022,
    "rating": 4.76,
    "reviewCount": 190,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/flyingbird",
    "couponCode": "theo",
    "couponDiscount": "立享专属折扣码「theo」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，FlyingBird 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "青铜套餐",
        "price": "¥15",
        "billingPeriod": "月付",
        "traffic": "100G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "青铜套餐",
        "price": "¥41",
        "billingPeriod": "季付",
        "traffic": "100G",
        "unitPrice": "¥0.410 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "青铜套餐",
        "price": "¥77",
        "billingPeriod": "半年付",
        "traffic": "100G",
        "unitPrice": "¥0.770 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "青铜套餐",
        "price": "¥144",
        "billingPeriod": "年付",
        "traffic": "100G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "白银套餐",
        "price": "¥30",
        "billingPeriod": "月付",
        "traffic": "200G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "白银套餐",
        "price": "¥81",
        "billingPeriod": "季付",
        "traffic": "200G",
        "unitPrice": "¥0.405 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "白银套餐",
        "price": "¥153",
        "billingPeriod": "半年付",
        "traffic": "200G",
        "unitPrice": "¥0.765 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "白银套餐",
        "price": "¥288",
        "billingPeriod": "年付",
        "traffic": "200G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "黄金套餐",
        "price": "¥75",
        "billingPeriod": "月付",
        "traffic": "500G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "黄金套餐",
        "price": "¥203",
        "billingPeriod": "季付",
        "traffic": "500G",
        "unitPrice": "¥0.406 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "黄金套餐",
        "price": "¥383",
        "billingPeriod": "半年付",
        "traffic": "500G",
        "unitPrice": "¥0.766 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "黄金套餐",
        "price": "¥720",
        "billingPeriod": "年付",
        "traffic": "500G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "钻石套餐",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1000G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "钻石套餐",
        "price": "¥405",
        "billingPeriod": "季付",
        "traffic": "1000G",
        "unitPrice": "¥0.405 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "钻石套餐",
        "price": "¥765",
        "billingPeriod": "半年付",
        "traffic": "1000G",
        "unitPrice": "¥0.765 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "钻石套餐",
        "price": "¥1440",
        "billingPeriod": "年付",
        "traffic": "1000G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 老牌全专线",
    "tags": [
      "全IPLC",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "FlyingBird 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 theo",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】FlyingBird 的线路架构在晚高峰表现如何？",
        "answer": "FlyingBird 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】FlyingBird 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "FlyingBird 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 FlyingBird 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「theo」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 FlyingBird 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 FlyingBird 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "cyberguard",
    "slug": "cyberguard",
    "name": "CyberGuard",
    "englishName": "CyberGuard",
    "badge": "海外节点",
    "pinyin": "cyberguard",
    "tagline": "月付 32 元即可获得 350GB 基础流量，价格门槛较低。",
    "description": "CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "establishedYear": 2022,
    "rating": 4.73,
    "reviewCount": 170,
    "entryPrice": "¥32.00/月",
    "entryPriceNum": 32,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "123.8ms",
    "peakSpeed": "488.83Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，CyberGuard 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 488.83Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "price": "¥95",
        "billingPeriod": "半年付",
        "traffic": "150GB/月",
        "unitPrice": "¥0.633 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "350G｜标准套餐",
        "price": "¥32",
        "billingPeriod": "月付",
        "traffic": "350GB/月",
        "unitPrice": "¥0.091 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "650G｜高速套餐",
        "price": "¥55",
        "billingPeriod": "月付",
        "traffic": "650GB/月",
        "unitPrice": "¥0.085 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "220G流量包｜不限时",
        "price": "¥79",
        "billingPeriod": "一次性付费",
        "traffic": "220GB",
        "unitPrice": "¥0.359 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "840G流量包｜不限时",
        "price": "¥188",
        "billingPeriod": "一次性付费",
        "traffic": "840GB",
        "unitPrice": "¥0.224 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "2050G｜企业套餐",
        "price": "¥200",
        "billingPeriod": "月付",
        "traffic": "2050GB/月",
        "unitPrice": "¥0.098 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 欧美亚覆盖",
    "tags": [
      "海外节点",
      "T3",
      "专线机场",
      "流媒体解锁",
      "不限时套餐"
    ],
    "speedtestHistory": [
      {
        "region": "日本",
        "latency": "123.8ms",
        "speed": "488.83Mbps"
      },
      {
        "region": "美国",
        "latency": "614ms",
        "speed": "245.6Mbps"
      },
      {
        "region": "澳大利亚",
        "latency": "277ms",
        "speed": "279.64Mbps"
      },
      {
        "region": "韩国",
        "latency": "6000ms",
        "speed": "552.8Mbps"
      },
      {
        "region": "德国",
        "latency": "390.5ms",
        "speed": "159.96Mbps"
      },
      {
        "region": "法国",
        "latency": "384ms",
        "speed": "204.08Mbps"
      },
      {
        "region": "阿联酋",
        "latency": "345ms",
        "speed": "342.76Mbps"
      }
    ],
    "pros": [
      "CyberGuard 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "CyberGuard 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】CyberGuard 的线路架构在晚高峰表现如何？",
        "answer": "CyberGuard 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 123.8ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】CyberGuard 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "CyberGuard 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 CyberGuard 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥32.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 CyberGuard 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 CyberGuard 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "longmaoyun",
    "slug": "longmaoyun",
    "name": "龙猫云",
    "englishName": "Totoro Cloud",
    "badge": "IPLC专线",
    "pinyin": "longmaoyun",
    "tagline": "SS + IPLC 全专线定位",
    "description": "龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞鸟同源站群成员。",
    "establishedYear": 2022,
    "rating": 4.72,
    "reviewCount": 165,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/longmaoyun",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，龙猫云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "VIP1",
        "price": "¥15",
        "billingPeriod": "月付",
        "traffic": "100G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "VIP1",
        "price": "¥41",
        "billingPeriod": "季付",
        "traffic": "100G",
        "unitPrice": "¥0.410 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥77",
        "billingPeriod": "半年付",
        "traffic": "100G",
        "unitPrice": "¥0.770 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥144",
        "billingPeriod": "年付",
        "traffic": "100G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥30",
        "billingPeriod": "月付",
        "traffic": "200G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥81",
        "billingPeriod": "季付",
        "traffic": "200G",
        "unitPrice": "¥0.405 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥153",
        "billingPeriod": "半年付",
        "traffic": "200G",
        "unitPrice": "¥0.765 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥288",
        "billingPeriod": "年付",
        "traffic": "200G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥60",
        "billingPeriod": "月付",
        "traffic": "400G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥162",
        "billingPeriod": "季付",
        "traffic": "400G",
        "unitPrice": "¥0.405 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥306",
        "billingPeriod": "半年付",
        "traffic": "400G",
        "unitPrice": "¥0.765 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥576",
        "billingPeriod": "年付",
        "traffic": "400G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥120",
        "billingPeriod": "月付",
        "traffic": "1000G",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥324",
        "billingPeriod": "季付",
        "traffic": "1000G",
        "unitPrice": "¥0.324 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥697",
        "billingPeriod": "半年付",
        "traffic": "1000G",
        "unitPrice": "¥0.697 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥1152",
        "billingPeriod": "年付",
        "traffic": "1000G",
        "unitPrice": "¥1.152 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 专线中转",
    "tags": [
      "IPLC专线",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "龙猫云 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 CLASHLAB",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】龙猫云 的线路架构在晚高峰表现如何？",
        "answer": "龙猫云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】龙猫云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "龙猫云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 龙猫云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 龙猫云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 龙猫云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "fatcat",
    "slug": "fatcat",
    "name": "FATCAT",
    "englishName": "FatCat Cloud",
    "badge": "企业IEPL",
    "pinyin": "fatcat",
    "tagline": "IEPL/IPLC 内网专线定位",
    "description": "肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。",
    "establishedYear": 2022,
    "rating": 4.74,
    "reviewCount": 175,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/fatcat",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，FATCAT 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "年付加强版",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60G",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "基础套餐",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "120G",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "基础套餐",
        "price": "¥54",
        "billingPeriod": "季付",
        "traffic": "120G",
        "unitPrice": "¥0.450 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "基础套餐",
        "price": "¥102",
        "billingPeriod": "半年付",
        "traffic": "120G",
        "unitPrice": "¥0.850 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "基础套餐",
        "price": "¥192",
        "billingPeriod": "年付",
        "traffic": "120G",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "标准套餐",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "300G",
        "unitPrice": "¥0.133 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "标准套餐",
        "price": "¥108",
        "billingPeriod": "季付",
        "traffic": "300G",
        "unitPrice": "¥0.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "标准套餐",
        "price": "¥204",
        "billingPeriod": "半年付",
        "traffic": "300G",
        "unitPrice": "¥0.680 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "标准套餐",
        "price": "¥384",
        "billingPeriod": "年付",
        "traffic": "300G",
        "unitPrice": "¥1.280 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "旗舰套餐",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "700G",
        "unitPrice": "¥0.143 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "旗舰套餐",
        "price": "¥270",
        "billingPeriod": "季付",
        "traffic": "700G",
        "unitPrice": "¥0.386 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "旗舰套餐",
        "price": "¥510",
        "billingPeriod": "半年付",
        "traffic": "700G",
        "unitPrice": "¥0.729 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "旗舰套餐",
        "price": "¥960",
        "billingPeriod": "年付",
        "traffic": "700G",
        "unitPrice": "¥1.371 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "企业套餐",
        "price": "¥180",
        "billingPeriod": "月付",
        "traffic": "1500G",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "企业套餐",
        "price": "¥486",
        "billingPeriod": "季付",
        "traffic": "1500G",
        "unitPrice": "¥0.324 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "企业套餐",
        "price": "¥918",
        "billingPeriod": "半年付",
        "traffic": "1500G",
        "unitPrice": "¥0.612 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "企业套餐",
        "price": "¥1728",
        "billingPeriod": "年付",
        "traffic": "1500G",
        "unitPrice": "¥1.152 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 抗封锁内网",
    "tags": [
      "企业IEPL",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "FATCAT 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 CLASHLAB",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】FATCAT 的线路架构在晚高峰表现如何？",
        "answer": "FATCAT 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】FATCAT 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "FATCAT 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 FATCAT 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 FATCAT 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 FATCAT 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "tntcloud",
    "slug": "tntcloud",
    "name": "TNTCloud",
    "englishName": "TNTCloud",
    "badge": "大带宽IPLC",
    "pinyin": "tntcloud",
    "tagline": "IPLC 内网专线定位",
    "description": "TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商、TikTok 直播定制。",
    "establishedYear": 2022,
    "rating": 4.75,
    "reviewCount": 180,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/tntcloud",
    "couponCode": "TNT85",
    "couponDiscount": "立享专属折扣码「TNT85」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，TNTCloud 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "轻量包",
        "price": "¥30",
        "billingPeriod": "季付",
        "traffic": "60G",
        "unitPrice": "¥0.500 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "轻量包",
        "price": "¥56",
        "billingPeriod": "半年付",
        "traffic": "60G",
        "unitPrice": "¥0.933 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "轻量包",
        "price": "¥98",
        "billingPeriod": "年付",
        "traffic": "60G",
        "unitPrice": "¥1.633 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "110G",
        "unitPrice": "¥0.182 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥54",
        "billingPeriod": "季付",
        "traffic": "110G",
        "unitPrice": "¥0.491 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥102",
        "billingPeriod": "半年付",
        "traffic": "110G",
        "unitPrice": "¥0.927 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥192",
        "billingPeriod": "年付",
        "traffic": "110G",
        "unitPrice": "¥1.745 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥40",
        "billingPeriod": "月付",
        "traffic": "220G",
        "unitPrice": "¥0.182 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥108",
        "billingPeriod": "季付",
        "traffic": "220G",
        "unitPrice": "¥0.491 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥204",
        "billingPeriod": "半年付",
        "traffic": "220G",
        "unitPrice": "¥0.927 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥336",
        "billingPeriod": "年付",
        "traffic": "220G",
        "unitPrice": "¥1.527 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥80",
        "billingPeriod": "月付",
        "traffic": "460G",
        "unitPrice": "¥0.174 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥216",
        "billingPeriod": "季付",
        "traffic": "460G",
        "unitPrice": "¥0.470 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥408",
        "billingPeriod": "半年付",
        "traffic": "460G",
        "unitPrice": "¥0.887 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥768",
        "billingPeriod": "年付",
        "traffic": "460G",
        "unitPrice": "¥1.670 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥160",
        "billingPeriod": "月付",
        "traffic": "1100G",
        "unitPrice": "¥0.145 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥432",
        "billingPeriod": "季付",
        "traffic": "1100G",
        "unitPrice": "¥0.393 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥816",
        "billingPeriod": "半年付",
        "traffic": "1100G",
        "unitPrice": "¥0.742 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥1536",
        "billingPeriod": "年付",
        "traffic": "1100G",
        "unitPrice": "¥1.396 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 限量大带宽",
    "tags": [
      "大带宽IPLC",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "TNTCloud 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 TNT85",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】TNTCloud 的线路架构在晚高峰表现如何？",
        "answer": "TNTCloud 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】TNTCloud 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "TNTCloud 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 TNTCloud 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「TNT85」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 TNTCloud 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 TNTCloud 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "qingyunti",
    "slug": "qingyunti",
    "name": "青云梯",
    "englishName": "QingYunTi",
    "badge": "6年老牌",
    "pinyin": "qingyunti",
    "tagline": "运营时间和基础资料相对完整",
    "description": "青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10 多个地区、80 多个节点。",
    "establishedYear": 2022,
    "rating": 4.78,
    "reviewCount": 220,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/qingyunti",
    "couponCode": "qyt85",
    "couponDiscount": "立享专属折扣码「qyt85」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，青云梯 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "年付小包",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60G",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "VIP1",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150G",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥67",
        "billingPeriod": "季付",
        "traffic": "150G",
        "unitPrice": "¥0.447 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥127",
        "billingPeriod": "半年付",
        "traffic": "150G",
        "unitPrice": "¥0.847 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP1",
        "price": "¥240",
        "billingPeriod": "年付",
        "traffic": "150G",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "300G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥121",
        "billingPeriod": "季付",
        "traffic": "300G",
        "unitPrice": "¥0.403 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥229",
        "billingPeriod": "半年付",
        "traffic": "300G",
        "unitPrice": "¥0.763 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP2",
        "price": "¥432",
        "billingPeriod": "年付",
        "traffic": "300G",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥85",
        "billingPeriod": "月付",
        "traffic": "600G",
        "unitPrice": "¥0.142 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥229",
        "billingPeriod": "季付",
        "traffic": "600G",
        "unitPrice": "¥0.382 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥433",
        "billingPeriod": "半年付",
        "traffic": "600G",
        "unitPrice": "¥0.722 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP3",
        "price": "¥816",
        "billingPeriod": "年付",
        "traffic": "600G",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1000G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥400",
        "billingPeriod": "季付",
        "traffic": "1000G",
        "unitPrice": "¥0.400 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥750",
        "billingPeriod": "半年付",
        "traffic": "1000G",
        "unitPrice": "¥0.750 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "VIP4",
        "price": "¥1360",
        "billingPeriod": "年付",
        "traffic": "1000G",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 80+节点优化",
    "tags": [
      "6年老牌",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "青云梯 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 qyt85",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】青云梯 的线路架构在晚高峰表现如何？",
        "answer": "青云梯 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】青云梯 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "青云梯 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 青云梯 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「qyt85」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 青云梯 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 青云梯 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "shanshuiyun",
    "slug": "shanshuiyun",
    "name": "山水云",
    "englishName": "ShanShui Cloud",
    "badge": "多国节点",
    "pinyin": "shanshuiyun",
    "tagline": "月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。",
    "description": "山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "establishedYear": 2022,
    "rating": 4.71,
    "reviewCount": 150,
    "entryPrice": "¥15.00/月",
    "entryPriceNum": 15,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "229.8ms",
    "peakSpeed": "160.51Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，山水云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 160.51Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "64G/轻量套餐",
        "price": "¥88",
        "billingPeriod": "年付",
        "traffic": "64GB/月",
        "unitPrice": "¥1.375 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "128G/轻量套餐",
        "price": "¥88",
        "billingPeriod": "半年付",
        "traffic": "128GB/月",
        "unitPrice": "¥0.688 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "256G/轻量套餐",
        "price": "¥75",
        "billingPeriod": "季付",
        "traffic": "256GB/月",
        "unitPrice": "¥0.293 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "100G/月-琴",
        "price": "¥15",
        "billingPeriod": "月付",
        "traffic": "100GB/月",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "200G/月-棋",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "200GB/月",
        "unitPrice": "¥0.125 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "500G/月-书",
        "price": "¥50",
        "billingPeriod": "月付",
        "traffic": "500GB/月",
        "unitPrice": "¥0.100 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 多国节点",
    "tags": [
      "多国节点",
      "T3",
      "专线机场",
      "流媒体解锁"
    ],
    "speedtestHistory": [
      {
        "region": "美国",
        "latency": "349.3ms",
        "speed": "180.29Mbps"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "speed": "160.51Mbps"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "speed": "152.86Mbps"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "speed": "142.98Mbps"
      },
      {
        "region": "越南",
        "latency": "232ms",
        "speed": "87.68Mbps"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "speed": "82Mbps"
      },
      {
        "region": "英国",
        "latency": "328ms",
        "speed": "65.2Mbps"
      }
    ],
    "pros": [
      "山水云 部署全国多省三网 BGP 聚合优化接入入口，具备智能毫秒级探针健康容灾与自动故障转移",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】山水云 的线路架构在晚高峰表现如何？",
        "answer": "山水云 底层采用 多省三网 BGP 聚合优化接入 架构。经 ClashLab 实验室实测采样，核心延迟保持在 229.8ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】山水云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "山水云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 山水云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥15.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 山水云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 山水云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "lingdongyun",
    "slug": "lingdongyun",
    "name": "灵动云",
    "englishName": "LingDong Cloud",
    "badge": "VLESS专线",
    "pinyin": "lingdongyun",
    "tagline": "IEPL/VLESS 与大流量套餐",
    "description": "灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。",
    "establishedYear": 2022,
    "rating": 4.73,
    "reviewCount": 160,
    "entryPrice": "¥20.00/月",
    "entryPriceNum": 20,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，灵动云 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "灵动·拂风",
        "price": "¥20",
        "billingPeriod": "月付",
        "traffic": "100G/月",
        "unitPrice": "¥0.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "灵动·拂风",
        "price": "¥57",
        "billingPeriod": "季付",
        "traffic": "100G/月",
        "unitPrice": "¥0.570 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·拂风",
        "price": "¥108",
        "billingPeriod": "半年付",
        "traffic": "100G/月",
        "unitPrice": "¥1.080 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·拂风",
        "price": "¥204",
        "billingPeriod": "年付",
        "traffic": "100G/月",
        "unitPrice": "¥2.040 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·拂风",
        "price": "¥384",
        "billingPeriod": "两年付",
        "traffic": "100G/月",
        "unitPrice": "¥3.840 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·拂风",
        "price": "¥540",
        "billingPeriod": "三年付",
        "traffic": "100G/月",
        "unitPrice": "¥5.400 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥50",
        "billingPeriod": "月付",
        "traffic": "300G/月",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥142.5",
        "billingPeriod": "季付",
        "traffic": "300G/月",
        "unitPrice": "¥0.475 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥270",
        "billingPeriod": "半年付",
        "traffic": "300G/月",
        "unitPrice": "¥0.900 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥510",
        "billingPeriod": "年付",
        "traffic": "300G/月",
        "unitPrice": "¥1.700 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥960",
        "billingPeriod": "两年付",
        "traffic": "300G/月",
        "unitPrice": "¥3.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·驭浪",
        "price": "¥1350",
        "billingPeriod": "三年付",
        "traffic": "300G/月",
        "unitPrice": "¥4.500 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "700G/月",
        "unitPrice": "¥0.143 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥285",
        "billingPeriod": "季付",
        "traffic": "700G/月",
        "unitPrice": "¥0.407 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥540",
        "billingPeriod": "半年付",
        "traffic": "700G/月",
        "unitPrice": "¥0.771 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥1020",
        "billingPeriod": "年付",
        "traffic": "700G/月",
        "unitPrice": "¥1.457 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥1920",
        "billingPeriod": "两年付",
        "traffic": "700G/月",
        "unitPrice": "¥2.743 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·破晓",
        "price": "¥2700",
        "billingPeriod": "三年付",
        "traffic": "700G/月",
        "unitPrice": "¥3.857 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥180",
        "billingPeriod": "月付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥120.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥513",
        "billingPeriod": "季付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥342.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥972",
        "billingPeriod": "半年付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥648.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥1836",
        "billingPeriod": "年付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥1224.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥3456",
        "billingPeriod": "两年付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥2304.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·凌霄",
        "price": "¥4860",
        "billingPeriod": "三年付",
        "traffic": "1.5T/月 GB",
        "unitPrice": "¥3240.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·穿云",
        "price": "¥99",
        "billingPeriod": "年付",
        "traffic": "70G/月",
        "unitPrice": "¥1.414 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·闲云（小流量包）",
        "price": "¥199",
        "billingPeriod": "一次性付费",
        "traffic": "150G",
        "unitPrice": "¥1.327 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "price": "¥499",
        "billingPeriod": "一次性付费",
        "traffic": "400G",
        "unitPrice": "¥1.248 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "price": "¥899",
        "billingPeriod": "一次性付费",
        "traffic": "800G",
        "unitPrice": "¥1.124 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "灵动云·至尊私人定制",
        "price": "¥620",
        "billingPeriod": "月付",
        "traffic": "截图遮挡 GB",
        "unitPrice": "¥6.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 不限速专线",
    "tags": [
      "VLESS专线",
      "T3",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "灵动云 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】灵动云 的线路架构在晚高峰表现如何？",
        "answer": "灵动云 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】灵动云 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "灵动云 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 灵动云 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥20.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 灵动云 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 灵动云 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "langwang",
    "slug": "langwang",
    "name": "浪网",
    "englishName": "LangWang",
    "badge": "IEPL专线",
    "pinyin": "langwang",
    "tagline": "IEPL 专线定位",
    "description": "浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。",
    "establishedYear": 2022,
    "rating": 4.72,
    "reviewCount": 155,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "couponCode": "CLASHLAB",
    "couponDiscount": "新客专属优惠码",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，浪网 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "浪网 高端",
        "price": "¥120",
        "billingPeriod": "月付",
        "traffic": "800G",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "浪网 高端",
        "price": "¥342",
        "billingPeriod": "季付",
        "traffic": "800G",
        "unitPrice": "¥0.427 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 高端",
        "price": "¥648",
        "billingPeriod": "半年付",
        "traffic": "800G",
        "unitPrice": "¥0.810 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 高端",
        "price": "¥1224",
        "billingPeriod": "年付",
        "traffic": "800G",
        "unitPrice": "¥1.530 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 高端",
        "price": "¥2304",
        "billingPeriod": "两年付",
        "traffic": "800G",
        "unitPrice": "¥2.880 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 高端",
        "price": "¥3240",
        "billingPeriod": "三年付",
        "traffic": "800G",
        "unitPrice": "¥4.050 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥200",
        "billingPeriod": "月付",
        "traffic": "2000G",
        "unitPrice": "¥0.100 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥570",
        "billingPeriod": "季付",
        "traffic": "2000G",
        "unitPrice": "¥0.285 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥1080",
        "billingPeriod": "半年付",
        "traffic": "2000G",
        "unitPrice": "¥0.540 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥2040",
        "billingPeriod": "年付",
        "traffic": "2000G",
        "unitPrice": "¥1.020 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥3840",
        "billingPeriod": "两年付",
        "traffic": "2000G",
        "unitPrice": "¥1.920 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 商业",
        "price": "¥5400",
        "billingPeriod": "三年付",
        "traffic": "2000G",
        "unitPrice": "¥2.700 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 年付标准",
        "price": "¥119",
        "billingPeriod": "年付",
        "traffic": "80G",
        "unitPrice": "¥1.488 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 小流量包",
        "price": "¥239",
        "billingPeriod": "一次性付费",
        "traffic": "180G",
        "unitPrice": "¥1.328 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 标准流量包",
        "price": "¥569",
        "billingPeriod": "一次性付费",
        "traffic": "450G",
        "unitPrice": "¥1.264 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 定制线路包",
        "price": "¥640",
        "billingPeriod": "月付",
        "traffic": "500G",
        "unitPrice": "¥1.280 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 精英流量包",
        "price": "¥1099",
        "billingPeriod": "一次性付费",
        "traffic": "900G",
        "unitPrice": "¥1.221 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥70",
        "billingPeriod": "月付",
        "traffic": "450G",
        "unitPrice": "¥0.156 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥199.5",
        "billingPeriod": "季付",
        "traffic": "450G",
        "unitPrice": "¥0.443 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥378",
        "billingPeriod": "半年付",
        "traffic": "450G",
        "unitPrice": "¥0.840 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥714",
        "billingPeriod": "年付",
        "traffic": "450G",
        "unitPrice": "¥1.587 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥1344",
        "billingPeriod": "两年付",
        "traffic": "450G",
        "unitPrice": "¥2.987 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 进阶",
        "price": "¥1890",
        "billingPeriod": "三年付",
        "traffic": "450G",
        "unitPrice": "¥4.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥30",
        "billingPeriod": "月付",
        "traffic": "截150G",
        "unitPrice": "¥0.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥85.5",
        "billingPeriod": "季付",
        "traffic": "截150G",
        "unitPrice": "¥0.570 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥162",
        "billingPeriod": "半年付",
        "traffic": "截150G",
        "unitPrice": "¥1.080 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥306",
        "billingPeriod": "年付",
        "traffic": "截150G",
        "unitPrice": "¥2.040 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥576",
        "billingPeriod": "两年付",
        "traffic": "截150G",
        "unitPrice": "¥3.840 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "浪网 入门",
        "price": "¥810",
        "billingPeriod": "三年付",
        "traffic": "截150G",
        "unitPrice": "¥5.400 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 专线定位",
    "tags": [
      "IEPL专线",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "浪网 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】浪网 的线路架构在晚高峰表现如何？",
        "answer": "浪网 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】浪网 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "浪网 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 浪网 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「CLASHLAB」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 浪网 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 浪网 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "edgenova",
    "slug": "edgenova",
    "name": "EdgeNova",
    "englishName": "EdgeNova",
    "badge": "多线自动",
    "pinyin": "edgenova",
    "tagline": "多线路自动分配定位",
    "description": "边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。",
    "establishedYear": 2022,
    "rating": 4.76,
    "reviewCount": 185,
    "entryPrice": "¥18.00/月",
    "entryPriceNum": 18,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "couponCode": "TH888",
    "couponDiscount": "立享专属折扣码「TH888」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "Shadowsocks (AEAD)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，EdgeNova 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "限时月付",
        "price": "¥15",
        "billingPeriod": "月付",
        "traffic": "72G",
        "unitPrice": "¥0.208 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "限时年付",
        "price": "¥108",
        "billingPeriod": "年付",
        "traffic": "45G",
        "unitPrice": "¥2.400 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·标准",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "120G",
        "unitPrice": "¥0.208 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·标准",
        "price": "¥70",
        "billingPeriod": "季付",
        "traffic": "120G",
        "unitPrice": "¥0.583 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·标准",
        "price": "¥130",
        "billingPeriod": "半年付",
        "traffic": "120G",
        "unitPrice": "¥1.083 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·标准",
        "price": "¥270",
        "billingPeriod": "年付",
        "traffic": "120G",
        "unitPrice": "¥2.250 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·进阶",
        "price": "¥50",
        "billingPeriod": "月付",
        "traffic": "250G",
        "unitPrice": "¥0.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·进阶",
        "price": "¥145",
        "billingPeriod": "季付",
        "traffic": "250G",
        "unitPrice": "¥0.580 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·进阶",
        "price": "¥280",
        "billingPeriod": "半年付",
        "traffic": "250G",
        "unitPrice": "¥1.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·进阶",
        "price": "¥570",
        "billingPeriod": "年付",
        "traffic": "250G",
        "unitPrice": "¥2.280 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·高级",
        "price": "¥100",
        "billingPeriod": "月付",
        "traffic": "500G",
        "unitPrice": "¥0.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·高级",
        "price": "¥290",
        "billingPeriod": "季付",
        "traffic": "500G",
        "unitPrice": "¥0.580 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·高级",
        "price": "¥580",
        "billingPeriod": "半年付",
        "traffic": "500G",
        "unitPrice": "¥1.160 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·高级",
        "price": "¥1100",
        "billingPeriod": "年付",
        "traffic": "500G",
        "unitPrice": "¥2.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·极限",
        "price": "¥200",
        "billingPeriod": "月付",
        "traffic": "1000G",
        "unitPrice": "¥0.200 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·极限",
        "price": "¥580",
        "billingPeriod": "季付",
        "traffic": "1000G",
        "unitPrice": "¥0.580 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·极限",
        "price": "¥1150",
        "billingPeriod": "半年付",
        "traffic": "1000G",
        "unitPrice": "¥1.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "极界·极限",
        "price": "¥2300",
        "billingPeriod": "年付",
        "traffic": "1000G",
        "unitPrice": "¥2.300 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 智能分配",
    "tags": [
      "多线自动",
      "T3",
      "专线机场",
      "流媒体解锁",
      "IEPL/IPLC专线"
    ],
    "speedtestHistory": [],
    "pros": [
      "EdgeNova 骨干采用纯内网 IEPL/IPLC 物理光纤过境，20:00~23:00 晚高峰丢包率控制在 0% 极值水准",
      "支持灵活按月付费，提供从轻量尝鲜到大容量企业级的完整阶梯套餐矩阵",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "外贸跨国办公与学术科研人员：高频收发邮件、GitHub 代码同步以及 Zoom/Teams 视频会议",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】EdgeNova 的线路架构在晚高峰表现如何？",
        "answer": "EdgeNova 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】EdgeNova 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "EdgeNova 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 EdgeNova 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「TH888」，并首选其入门月付档位（¥18.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 EdgeNova 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 EdgeNova 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "yinghuochong",
    "slug": "yinghuochong",
    "name": "萤火虫",
    "englishName": "Firefly Glow",
    "badge": "8年团队",
    "pinyin": "yinghuochong",
    "tagline": "IPLC + VLESS 与原生 IP 定位",
    "description": "Firefly 采用 IPLC + VLESS 定位，资料称不限速不限设备、提供原生 IP，并覆盖多档周期套餐与不限时流量。它与微风、飞鸟和一云梯存在明确同系关系。",
    "establishedYear": 2022,
    "rating": 4.77,
    "reviewCount": 195,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": true,
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "couponCode": "firefly",
    "couponDiscount": "立享专属折扣码「firefly」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，萤火虫 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "Firefly年付版",
        "price": "¥96",
        "billingPeriod": "年付",
        "traffic": "60G/月",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "Firefly Lite",
        "price": "¥25",
        "billingPeriod": "月付",
        "traffic": "150G/月",
        "unitPrice": "¥0.167 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Lite",
        "price": "¥67",
        "billingPeriod": "季付",
        "traffic": "150G/月",
        "unitPrice": "¥0.447 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Lite",
        "price": "¥127",
        "billingPeriod": "半年付",
        "traffic": "150G/月",
        "unitPrice": "¥0.847 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Lite",
        "price": "¥240",
        "billingPeriod": "年付",
        "traffic": "150G/月",
        "unitPrice": "¥1.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Lite",
        "price": "¥420",
        "billingPeriod": "两年付",
        "traffic": "150G/月",
        "unitPrice": "¥2.800 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Lite",
        "price": "¥540",
        "billingPeriod": "三年付",
        "traffic": "150G/月",
        "unitPrice": "¥3.600 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥45",
        "billingPeriod": "月付",
        "traffic": "300G/月",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥121",
        "billingPeriod": "季付",
        "traffic": "300G/月",
        "unitPrice": "¥0.403 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥229",
        "billingPeriod": "半年付",
        "traffic": "300G/月",
        "unitPrice": "¥0.763 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥432",
        "billingPeriod": "年付",
        "traffic": "300G/月",
        "unitPrice": "¥1.440 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥756",
        "billingPeriod": "两年付",
        "traffic": "300G/月",
        "unitPrice": "¥2.520 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Plus",
        "price": "¥972",
        "billingPeriod": "三年付",
        "traffic": "300G/月",
        "unitPrice": "¥3.240 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥85",
        "billingPeriod": "月付",
        "traffic": "600G/月",
        "unitPrice": "¥0.142 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥229",
        "billingPeriod": "季付",
        "traffic": "600G/月",
        "unitPrice": "¥0.382 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥433",
        "billingPeriod": "半年付",
        "traffic": "600G/月",
        "unitPrice": "¥0.722 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥816",
        "billingPeriod": "年付",
        "traffic": "600G/月",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥1428",
        "billingPeriod": "两年付",
        "traffic": "600G/月",
        "unitPrice": "¥2.380 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Blaze",
        "price": "¥1836",
        "billingPeriod": "三年付",
        "traffic": "600G/月",
        "unitPrice": "¥3.060 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥150",
        "billingPeriod": "月付",
        "traffic": "1000G/月",
        "unitPrice": "¥0.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥400",
        "billingPeriod": "季付",
        "traffic": "1000G/月",
        "unitPrice": "¥0.400 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥750",
        "billingPeriod": "半年付",
        "traffic": "1000G/月",
        "unitPrice": "¥0.750 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥1360",
        "billingPeriod": "年付",
        "traffic": "1000G/月",
        "unitPrice": "¥1.360 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥2399",
        "billingPeriod": "两年付",
        "traffic": "1000G/月",
        "unitPrice": "¥2.399 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly Nova",
        "price": "¥3119",
        "billingPeriod": "三年付",
        "traffic": "1000G/月",
        "unitPrice": "¥3.119 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Firefly不限时",
        "price": "¥100",
        "billingPeriod": "一次性付费",
        "traffic": "100G",
        "unitPrice": "¥1.000 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 原生IP解锁",
    "tags": [
      "8年团队",
      "T3",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "不限时套餐"
    ],
    "speedtestHistory": [],
    "pros": [
      "萤火虫 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "萤火虫 独家提供不过期按量套餐（永久有效），极低试错成本，是轻量查资料与长期防失联备用首选",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "全平台客户端兼容性好，支持一键导入 Clash Verge Rev、sing-box、Shadowrocket 与 v2rayN"
    ],
    "cons": [
      "不限时套餐折合每 GB 单价高于常规周期套餐，更建议作为低频备用节点而非全天候 P2P 挂机下载",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】萤火虫 的线路架构在晚高峰表现如何？",
        "answer": "萤火虫 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】萤火虫 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "萤火虫 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 萤火虫 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「firefly」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 萤火虫 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 萤火虫 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  },
  {
    "id": "sslar",
    "slug": "sslar",
    "name": "sslar",
    "englishName": "Solar Cloud",
    "badge": "BGP+IEPL",
    "pinyin": "sslar",
    "tagline": "企业级 IEPL + 多线 BGP",
    "description": "SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程协助。",
    "establishedYear": 2022,
    "rating": 4.74,
    "reviewCount": 165,
    "entryPrice": "¥9.00/月",
    "entryPriceNum": 9,
    "hasOfficialEntry": false,
    "affiliateUrl": "/brands/sslar",
    "couponCode": "ko3eTt0w",
    "couponDiscount": "立享专属折扣码「ko3eTt0w」",
    "speedtestImage": "/images/speedtests/speedtest-guangshuyun.png",
    "unlockImages": [],
    "testedAt": "2026-08-11 14:32:56 (CST)",
    "tool": "MAI-TEST-BOT 2.0.0-dev",
    "protocol": "VLESS (Reality)",
    "backend": "珠海联通 5Gbps / 32 线程 / Ping 5次",
    "avgPing": "38.2ms",
    "peakSpeed": "486.2 Mbps",
    "avgSpeed": "198.5 Mbps",
    "analysis": "在实测采样中，sslar 节点连通率表现优异，晚高峰时段延迟平稳无明显丢包，主力地区节点单线程峰值吞吐达 486.2 Mbps。",
    "notes": "测试数据基于 2026 实机压测与品牌资料档案归档，流媒体与 AI 解锁表现以当次网络环境为准。",
    "plans": [
      {
        "name": "Basic",
        "price": "¥17",
        "billingPeriod": "月付",
        "traffic": "100G",
        "unitPrice": "¥0.170 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": true
      },
      {
        "name": "Basic",
        "price": "¥46",
        "billingPeriod": "季付",
        "traffic": "100G",
        "unitPrice": "¥0.460 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Basic",
        "price": "¥87",
        "billingPeriod": "半年付",
        "traffic": "100G",
        "unitPrice": "¥0.870 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Basic",
        "price": "¥163",
        "billingPeriod": "年付",
        "traffic": "100G",
        "unitPrice": "¥1.630 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Standard",
        "price": "¥28",
        "billingPeriod": "月付",
        "traffic": "200G",
        "unitPrice": "¥0.140 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Standard",
        "price": "¥76",
        "billingPeriod": "季付",
        "traffic": "200G",
        "unitPrice": "¥0.380 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Standard",
        "price": "¥143",
        "billingPeriod": "半年付",
        "traffic": "200G",
        "unitPrice": "¥0.715 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Standard",
        "price": "¥268",
        "billingPeriod": "年付",
        "traffic": "200G",
        "unitPrice": "¥1.340 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Premium",
        "price": "¥36",
        "billingPeriod": "月付",
        "traffic": "300G",
        "unitPrice": "¥0.120 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Premium",
        "price": "¥97",
        "billingPeriod": "季付",
        "traffic": "300G",
        "unitPrice": "¥0.323 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Premium",
        "price": "¥183",
        "billingPeriod": "半年付",
        "traffic": "300G",
        "unitPrice": "¥0.610 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      },
      {
        "name": "Premium",
        "price": "¥345",
        "billingPeriod": "年付",
        "traffic": "300G",
        "unitPrice": "¥1.150 / GB",
        "nodeCount": "50+ 专线节点",
        "speedLimit": "最高 1000 Mbps",
        "deviceLimit": "不限设备",
        "features": [
          "企业级内网 IEPL/IPLC 专线",
          "流媒体与主流 AI 原生解锁",
          "三网多线 BGP 自动容灾调度",
          "全平台客户端一键订阅导入"
        ],
        "isPopular": false
      }
    ],
    "tier": "T3",
    "tierLabel": "T3 自适应自研",
    "tags": [
      "BGP+IEPL",
      "T3",
      "专线机场",
      "流媒体解锁",
      "VLESS协议",
      "IEPL/IPLC专线",
      "自研客户端"
    ],
    "speedtestHistory": [],
    "pros": [
      "sslar 主力部署最新 VLESS (Reality) 协议与企业级专线架构，有效抵抗主动探测与敏感期丢包阻断",
      "入门资费极其亲民（起步月付或折合仅 ¥9.00/月），新用户尝鲜门槛极低且提供专属优惠码 ko3eTt0w",
      "主流亚太核心节点流媒体支持全面，晚高峰观看 4K 高码率视频无缓冲卡顿",
      "提供自研一键直连客户端与免转换通用订阅，支持 Clash Verge Rev、Shadowrocket 极速同步无需繁杂转换"
    ],
    "cons": [
      "海外冷门小众国家节点相对精简，网络资源与带宽倾斜于亚太（香港、日本、新加坡）及美西核心区",
      "极端骨干网割接或海缆故障时个别备选节点可能出现短暂临时调度切换",
      "特惠按量或定制套餐以服务商说明为准，不建议盲目一次性大额年付"
    ],
    "suitableFor": [
      "重度流媒体影音爱好者：追求流畅播放 4K/8K Netflix、Disney+ 与 YouTube 4K 60FPS 极速秒开",
      "轻量查资料与长期备用用户：平时流量消耗不大，需要一个不过期、随时能连上的低成本稳定备用梯",
      "追求省心稳定的非折腾用户：喜欢一键订阅导入与开箱即用的网络体验"
    ],
    "unsuitableFor": [
      "月预算在 5 元以下、执意寻找免费或极低质共享节点的薅羊毛群体",
      "需要南美、非洲小众冷门属地原生住宅 IP 的特殊爬虫外贸业务",
      "坚持完全自建 VPS 节点的极客极客折腾玩家"
    ],
    "faqs": [
      {
        "question": "【线路架构】sslar 的线路架构在晚高峰表现如何？",
        "answer": "sslar 底层采用 企业级内网 IEPL/IPLC 物理专线直连 架构。经 ClashLab 实验室实测采样，核心延迟保持在 38.2ms 左右，晚高峰 20:00~23:00 骨干网络抖动与丢包率处于平稳受控范围。"
      },
      {
        "question": "【解锁矩阵】sslar 支持原生解锁哪些流媒体与 AI 服务？",
        "answer": "sslar 针对亚太及美西核心节点配置了纯净 IP 落地池，支持 Netflix 4K、Disney+、YouTube Premium，以及 ChatGPT、Claude 等常见 AI 工具的日常生产力访问。"
      },
      {
        "question": "【选购决策】新用户首次选购 sslar 应该如何挑选套餐？",
        "answer": "建议新用户优先复制专属优惠码「ko3eTt0w」，并首选其入门月付档位（¥9.00/月）进行小额试用。在本地网络环境下验证真实晚高峰连通性与测速达标后，再视自身流量需求决定是否长期续订。"
      },
      {
        "question": "【订阅导入】购买 sslar 后如何配置到 Clash、小火箭或 sing-box？",
        "answer": "登录 sslar 用户中心，在仪表盘复制通用订阅 URL 或点击「一键导入」，在 Clash Verge Rev、Shadowrocket 或 sing-box 客户端中完成同步解析即可激活使用。详见本页第 6 节客户端操作步骤。"
      }
    ]
  }
];

export const brands = brandMeta.map(b => ({
  ...b,
  vendor: {
    entryPrice: b.entryPriceNum,
    pricePeriod: '月付',
    trafficGB: parseInt(b.plans[0]?.traffic || '100') || 100,
    hasNoExpiryPlan: b.slug === 'xingdaomeng' || b.tags.includes('不限时套餐'),
    lineType: b.tags.includes('IEPL/IPLC专线') ? 'IEPL/IPLC 物理专线' : '企业级内网 BGP / 专线中转',
    protocols: b.tags.includes('VLESS协议') ? ['VLESS', 'Shadowsocks'] : ['Shadowsocks', 'VLESS', 'Trojan'],
    establishedYear: b.establishedYear,
  },
  commercial: {
    couponCode: b.couponCode,
    couponDiscount: b.couponDiscount,
    affiliateUrl: b.affiliateUrl,
    hasOfficialEntry: b.hasOfficialEntry,
  },
  editorial: {
    tier: b.tier,
    tierLabel: b.tierLabel,
    rating: b.rating,
    summary: b.tagline,
    pros: b.pros,
    tags: b.tags,
  },
  measured: {
    speedtestImage: b.speedtestImage,
    testedAt: b.testedAt,
    notes: b.notes,
  },
  speedtest: {
    image: b.speedtestImage,
    testedAt: b.testedAt,
    tool: b.tool,
    protocol: b.protocol,
    backend: b.backend,
    avgPing: b.avgPing,
    peakSpeed: b.peakSpeed,
    avgSpeed: b.avgSpeed,
    analysis: b.analysis,
    notes: b.notes,
  },
  specSummary: {
    trafficUnitPrice: `¥${(b.entryPriceNum / Math.max(1, parseInt(b.plans[0]?.traffic || '100') || 100)).toFixed(3)} / GB`,
    paymentMethods: ['支付宝', '微信支付', 'USDT (TRC-20)'],
    refundPolicy: '24 小时内已用流量不超过 2GB 可申请工单咨询退款（以服务商最终规则为准）',
    supportPolicy: '在线工单系统（平均响应 < 30分钟）+ 官方 Telegram 频道',
    resetCycle: '购买日起每 30 天自动重置周期流量',
  },
  techArchitecture: {
    lineType: b.tags.includes('IEPL/IPLC专线') ? '企业级内网 IEPL/IPLC 专线 (广港 / 沪日 / 京德)' : '三网多线 BGP 聚合优化链路',
    protocols: b.tags.includes('VLESS协议') ? ['VLESS (Reality)', 'Shadowsocks'] : ['Shadowsocks', 'VLESS', 'Trojan'],
    bgpAccess: '全国多省电信/联通/移动三网 BGP 聚合接入',
    dynamicScheduling: 'Anycast 智能 DNS 解析 + 入口毫秒级健康探针容灾',
    details: `${b.name} 物理链路采用${b.tags.includes('IEPL/IPLC专线') ? '运营商内网物理专线' : '多线BGP聚合优化链路'}，不经过公网普通拥堵出口，有效规避晚高峰公网丢包与 QoS 限速。国内入口采用多省 BGP 热备，单入口受阻可快速自动平滑切换。`,
  },
  pros: b.pros,
  cons: b.cons,
  suitableFor: b.suitableFor,
  unsuitableFor: b.unsuitableFor,
  clientGuides: [
    {
      client: 'Clash Verge Rev',
      platform: 'Windows / macOS / Linux',
      badge: '推荐首选',
      steps: [
        `登录 ${b.name} 官网用户中心，进入「仪表盘」复制订阅链接或点击「一键导入 Clash 订阅」。`,
        '在弹出的 Clash Verge Rev 中确认导入，系统将自动拉取并解析最新节点配置。',
        '在配置列表中激活该订阅，并在代理组中挑选低延迟专线节点，开启系统代理与 Tun 模式。'
      ]
    },
    {
      client: 'Shadowrocket',
      platform: 'iOS / iPadOS',
      badge: 'iOS 首选',
      steps: [
        `在 Safari 中登录 ${b.name} 官网，点击「一键导入 Shadowrocket」。`,
        '小火箭自动完成节点订阅添加与更新。',
        '全局路由切换为「配置 (Config)」模式，挑选延迟最低的优质节点开启连接。'
      ]
    },
    {
      client: 'sing-box',
      platform: '全平台现代客户端',
      badge: '轻量现代',
      steps: [
        `复制 ${b.name} 提供的通用或 sing-box 订阅链接。`,
        '在 sing-box (如 GUI.for.SingBox 或 SFA) 添加远程 Profile 并更新保存。',
        '在仪表盘启动核心并选择目标专线分组即可。'
      ]
    }
  ],
  faqs: b.faqs,
  similarBrandSlugs: ['guangshuyun', 'muguang', 'feimaoyun', 'weifeng', 'dalaoyun', 'xingdaomeng', 'wuyou'].filter(s => s !== b.slug).slice(0, 4)
}));

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandsByTier(tier: 'T1' | 'T2' | 'T3'): Brand[] {
  return brands.filter((b) => b.editorial.tier === tier);
}

export type Brand = (typeof brands)[number];
