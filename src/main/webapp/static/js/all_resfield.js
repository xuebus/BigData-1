﻿///--所有一级学科
var field_class_1 = new Array(
new Array("100000", "自然科学"),
new Array("600000", "信息科学"),
new Array("650000", "工程与技术"),
new Array("700000", "生物医药"),
new Array("750000", "农业科学"),
new Array("800000", "人文与社科"),
new Array("900000", "统计年鉴数据")
);

///--所有二级学科
var field_class_2 = new Array(
new Array("100000", "101000", "数学"),
new Array("100000", "102000", "地球科学"),
new Array("100000", "103000", "力学"),
new Array("100000", "104000", "物理学"),
new Array("100000", "105000", "化学"),
new Array("100000", "106000", "天文学 "),
new Array("600000", "601000", "电子与通信技术"),
new Array("600000", "602000", "计算机科学"),
new Array("600000", "603000", "信息与系统科学"),
new Array("600000", "604000", "图书馆、情报与文献学"),
new Array("650000", "651000", "工程与技术科学基础"),
new Array("650000", "652000", "测绘科学技术"),
new Array("650000", "653000", "材料科学"),
new Array("650000", "654000", "矿山工程技术"),
new Array("650000", "654100", "冶金工程"),
new Array("650000", "654200", "机械工程"),
new Array("650000", "655000", "动力与电气工程"),
new Array("650000", "655100", "能源科学技术"),
new Array("650000", "655200", "核科学技术"),
new Array("650000", "656000", "化学工程"),
new Array("650000", "656100", "纺织科学技术"),
new Array("650000", "656200", "食品科学技术"),
new Array("650000", "657000", "土木建筑工程"),
new Array("650000", "657100", "水利工程"),
new Array("650000", "658000", "交通运输工程"),
new Array("650000", "658200", "航空航天科学技术"),
new Array("650000", "658300", "环境及资源科学技术"),
new Array("650000", "658400", "安全科学"),
new Array("650000", "659000", "管理学 "),
new Array("700000", "701000", "生物学"),
new Array("700000", "702000", "基础医学"),
new Array("700000", "703000", "临床医学"),
new Array("700000", "704000", "预防医学与公共卫生学"),
new Array("700000", "705000", "军事医学与特种医学"),
new Array("700000", "706000", "药学"),
new Array("700000", "707000", "中医中药学 "),
new Array("750000", "751000", "农学"),
new Array("750000", "752000", "林学"),
new Array("750000", "753000", "畜牧兽医科学"),
new Array("750000", "754000", "水产学"),
new Array("800000", "801000", "统计学"),
new Array("800000", "802000", "经济学"),
new Array("800000", "803000", "马克思主义"),
new Array("800000", "803100", "哲学"),
new Array("800000", "803200", "宗教学"),
new Array("800000", "804000", "语言学"),
new Array("800000", "804100", "文学"),
new Array("800000", "804200", "艺术学"),
new Array("800000", "804300", "历史学"),
new Array("800000", "805000", "考古学"),
new Array("800000", "806000", "政治学"),
new Array("800000", "806100", "法学"),
new Array("800000", "806200", "军事学"),
new Array("800000", "806300", "社会学"),
new Array("800000", "806400", "民族与文化学"),
new Array("800000", "807000", "新闻与传播学"),
new Array("800000", "808000", "教育学"),
new Array("800000", "808100", "体育科学"),
new Array("800000", "808200", "旅游学"),
new Array("800000", "809000", "心理学"),
new Array("900000", "901000", "国民经济核算"),
new Array("900000", "901100", "固定资产投资"),
new Array("900000", "902000", "人口与人力资源"),
new Array("900000", "902100", "人民生活与物价"),
new Array("900000", "903000", "政府与企事业单位"),
new Array("900000", "903100", "财政金融"),
new Array("900000", "903200", "自然资源、能源与环境"),
new Array("900000", "903300", "政法与公共管理"),
new Array("900000", "903400", "农民、农业和农村"),
new Array("900000", "904000", "工业"),
new Array("900000", "904100", "建筑房产"),
new Array("900000", "904200", "交通邮电信息产业"),
new Array("900000", "904300", "贸易与经济"),
new Array("900000", "905000", "旅游餐饮"),
new Array("900000", "906000", "教育科技"),
new Array("900000", "907000", "文化体育"),
new Array("900000", "908000", "医药卫生"),
new Array("900000", "909900", "其它统计数据")
);

///--所有三级学科
var field_class_3 = new Array(
new Array("101000", "101001", "数学史"),
new Array("101000", "101002", "数理逻辑与数学基础"),
new Array("101000", "101003", "数论"),
new Array("101000", "101004", "代数学"),
new Array("101000", "101005", "代数几何学"),
new Array("101000", "101006", "几何学"),
new Array("101000", "101007", "拓扑学"),
new Array("101000", "101008", "数学分析"),
new Array("101000", "101009", "非标准分析"),
new Array("101000", "101010", "函数论"),
new Array("101000", "101011", "常微分方程"),
new Array("101000", "101012", "偏微分方程"),
new Array("101000", "101013", "动力系统"),
new Array("101000", "101014", "积分方程"),
new Array("101000", "101015", "泛函分析"),
new Array("101000", "101016", "计算数学"),
new Array("101000", "101017", "概率论"),
new Array("101000", "101018", "数理统计学"),
new Array("101000", "101019", "应用统计数学"),
new Array("101000", "101020", "运筹学"),
new Array("101000", "101021", "组合数学"),
new Array("101000", "101022", "离散数学"),
new Array("101000", "101023", "模糊数学"),
new Array("101000", "101024", "计算机数学"),
new Array("101000", "101025", "应用数学"),
new Array("101000", "101099", "数学其他学科"),
new Array("102000", "102001", "地球科学史"),
new Array("102000", "102002", "大气科学"),
new Array("102000", "102003", "固体地球物理学"),
new Array("102000", "102004", "空间物理学"),
new Array("102000", "102005", "地球化学"),
new Array("102000", "102006", "大地测量学"),
new Array("102000", "102007", "地图学"),
new Array("102000", "102008", "地理学"),
new Array("102000", "102009", "地质学"),
new Array("102000", "102010", "水文学"),
new Array("102000", "102011", "海洋科学"),
new Array("102000", "102099", "地球科学其他学科"),
new Array("103000", "103001", "基础力学"),
new Array("103000", "103002", "固体力学"),
new Array("103000", "103003", "振动与波"),
new Array("103000", "103004", "流体力学"),
new Array("103000", "103005", "流变学"),
new Array("103000", "103006", "爆炸力学"),
new Array("103000", "103007", "物理力学"),
new Array("103000", "103008", "生物力学"),
new Array("103000", "103009", "统计力学"),
new Array("103000", "103010", "应用力学"),
new Array("103000", "103099", "力学其他学科"),
new Array("104000", "104001", "物理学史"),
new Array("104000", "104002", "理论物理学"),
new Array("104000", "104003", "声学"),
new Array("104000", "104004", "热学"),
new Array("104000", "104005", "光学"),
new Array("104000", "104006", "电磁学"),
new Array("104000", "104007", "无线电物理"),
new Array("104000", "104008", "电子物理学"),
new Array("104000", "104009", "凝聚态物理学"),
new Array("104000", "104010", "等离子体物理学"),
new Array("104000", "104011", "原子分子物理学"),
new Array("104000", "104012", "原子核物理学"),
new Array("104000", "104013", "高能物理学"),
new Array("104000", "104014", "计算物理学"),
new Array("104000", "104015", "应用物理学"),
new Array("104000", "104099", "物理学其他学科"),
new Array("105000", "105001", "化学史"),
new Array("105000", "105002", "无机化学"),
new Array("105000", "105003", "有机化学"),
new Array("105000", "105004", "分析化学"),
new Array("105000", "105005", "物理化学"),
new Array("105000", "105006", "化学物理学"),
new Array("105000", "105007", "高分子物理"),
new Array("105000", "105008", "高分子化学"),
new Array("105000", "105009", "核化学"),
new Array("105000", "105010", "应用化学"),
new Array("105000", "105011", "化学生物学"),
new Array("105000", "105012", "材料化学"),
new Array("105000", "105099", "化学其他学科"),
new Array("106000", "106001", "天文学史"),
new Array("106000", "106002", "天体力学"),
new Array("106000", "106003", "天体物理学"),
new Array("106000", "106004", "宇宙化学"),
new Array("106000", "106005", "天体测量学"),
new Array("106000", "106006", "射电天文学"),
new Array("106000", "106007", "空间天文学"),
new Array("106000", "106008", "天体演化学"),
new Array("106000", "106009", "星系与宇宙学"),
new Array("106000", "106010", "恒星与银河系"),
new Array("106000", "106011", "太阳与太阳系"),
new Array("106000", "106012", "天体生物学"),
new Array("106000", "106013", "天文地球动力学"),
new Array("106000", "106014", "时间测量学"),
new Array("106000", "106099", "天文学其他学科"),
new Array("601000", "601001", "电子技术"),
new Array("601000", "601002", "光电子学与激光技术"),
new Array("601000", "601003", "半导体技术"),
new Array("601000", "601004", "信息处理技术"),
new Array("601000", "601005", "通信技术"),
new Array("601000", "601006", "广播与电视工程技术"),
new Array("601000", "601007", "雷达工程"),
new Array("601000", "601099", "电子与通信技术其他学科"),
new Array("602000", "602001", "机器学习"),
new Array("602000", "602002", "数据挖掘"),
new Array("602000", "602003", "人工智能"),
new Array("602000", "602004", "并行计算"),
new Array("602000", "602005", "信息检索"),
new Array("602000", "602006", "算法理论"),
new Array("602000", "602007", "数据库"),
new Array("602000", "602008", "计算机图形"),
new Array("602000", "602009", "人机交互"),
new Array("602000", "602010", "自然语言处理"),
new Array("602000", "602011", "网络和通讯"),
new Array("602000", "602012", "操作系统"),
new Array("602000", "602014", "视频处理"),
new Array("602000", "602015", "程序设计语言"),
new Array("602000", "602016", "嵌入式系统"),
new Array("602000", "602017", "科学计算"),
new Array("602000", "602018", "安全与隐私"),
new Array("602000", "602019", "计算机仿真"),
new Array("602000", "602020", "软件工程"),
new Array("602000", "602021", "万维网"),
new Array("602000", "602022", "计算生物学"),
new Array("602000", "602023", "计算机教育"),
new Array("602000", "602024", "硬件体系结构"),
new Array("602000", "602025", "语音处理"),
new Array("602000", "602026", "图像处理"),
new Array("602000", "602030", "知识库"),
new Array("602000", "602099", "计算机科学其它学科"),
new Array("603000", "603001", "信息与系统科学基础学科"),
new Array("603000", "603002", "系统学"),
new Array("603000", "603003", "控制理论"),
new Array("603000", "603004", "系统评估与可行性分析"),
new Array("603000", "603005", "系统工程方法论"),
new Array("603000", "603006", "控制科学与技术"),
new Array("603000", "603007", "仿真科学技术"),
new Array("603000", "603008", "信息安全技术"),
new Array("603000", "603009", "信息技术系统性应用"),
new Array("603000", "603099", "信息与系统科学其他学科"),
new Array("604000", "604001", "图书馆学"),
new Array("604000", "604002", "文献学"),
new Array("604000", "604003", "情报学"),
new Array("604000", "604004", "档案学"),
new Array("604000", "604005", "博物馆学"),
new Array("604000", "604099", "图书馆、情报与文献学其他学科"),
new Array("651000", "651001", "工程数学"),
new Array("651000", "651002", "工程控制论"),
new Array("651000", "651003", "工程力学"),
new Array("651000", "651004", "工程物理学"),
new Array("651000", "651005", "工程地质学"),
new Array("651000", "651006", "工程水文学"),
new Array("651000", "651007", "工程仿生学"),
new Array("651000", "651008", "工程心理学"),
new Array("651000", "651009", "标准科学技术"),
new Array("651000", "651010", "计量学"),
new Array("651000", "651011", "工程图学"),
new Array("651000", "651012", "勘查技术"),
new Array("651000", "651013", "工程通用技术"),
new Array("651000", "651014", "工业工程学"),
new Array("651000", "651099", "工程与技术科学基础学科其他学科"),
new Array("652000", "652001", "大地测量技术"),
new Array("652000", "652002", "摄影测量与遥感技术"),
new Array("652000", "652003", "地图制图技术"),
new Array("652000", "652004", "工程测量技术"),
new Array("652000", "652005", "海洋测绘"),
new Array("652000", "652006", "测绘仪器"),
new Array("652000", "652099", "测绘科学技术其他学科"),
new Array("653000", "653001", "材料科学基础学科"),
new Array("653000", "653002", "材料表面与界面"),
new Array("653000", "653003", "材料失效与保护"),
new Array("653000", "653004", "材料检测与分析技术"),
new Array("653000", "653005", "材料实验"),
new Array("653000", "653006", "材料合成与加工工艺"),
new Array("653000", "653007", "金属材料"),
new Array("653000", "653008", "无机非金属材料"),
new Array("653000", "653009", "有机高分子材料"),
new Array("653000", "653010", "复合材料"),
new Array("653000", "653011", "生物材料"),
new Array("653000", "653012", "纳米材料"),
new Array("653000", "653013", "专用材料"),
new Array("653000", "653099", "材料科学其他学科"),
new Array("654000", "654001", "矿山地质学"),
new Array("654000", "654002", "矿山测量"),
new Array("654000", "654003", "矿山设计"),
new Array("654000", "654004", "矿山地面工程"),
new Array("654000", "654005", "井巷工程"),
new Array("654000", "654006", "采矿工程"),
new Array("654000", "654007", "选矿工程"),
new Array("654000", "654008", "钻井工程"),
new Array("654000", "654009", "油气田井开发工程"),
new Array("654000", "654010", "石油、天然气储存与运输工程"),
new Array("654000", "654011", "矿山机械工程"),
new Array("654000", "654012", "矿山电气工程"),
new Array("654000", "654013", "采矿环境工程"),
new Array("654000", "654014", "矿山安全"),
new Array("654000", "654015", "矿山综合利用工程"),
new Array("654000", "654099", "矿山工程技术其他学科"),
new Array("654100", "654101", "冶金物理化学"),
new Array("654100", "654102", "冶金反应工程"),
new Array("654100", "654103", "冶金原料与预处理"),
new Array("654100", "654104", "冶金热能工程"),
new Array("654100", "654105", "冶金技术"),
new Array("654100", "654106", "钢铁冶金"),
new Array("654100", "654107", "有色金属冶金"),
new Array("654100", "654108", "轧制"),
new Array("654100", "654109", "冶金机械及自动化"),
new Array("654100", "654199", "冶金工程技术其他学科"),
new Array("654200", "654201", "机械史"),
new Array("654200", "654202", "机械学"),
new Array("654200", "654203", "机械设计"),
new Array("654200", "654204", "机械制造工艺与设备"),
new Array("654200", "654205", "刀具技术"),
new Array("654200", "654206", "机床技术"),
new Array("654200", "654207", "流体传动与控制"),
new Array("654200", "654208", "机械制造自动化"),
new Array("654200", "654209", "计算机辅助设计"),
new Array("654200", "654299", "机械工程其他学科"),
new Array("655000", "655001", "工程热物理"),
new Array("655000", "655002", "热工学"),
new Array("655000", "655003", "动力机械工程"),
new Array("655000", "655004", "制冷与低温工程"),
new Array("655000", "655005", "电气工程"),
new Array("655000", "655099", "动力与电气工程其他学科"),
new Array("655100", "655101", "能源化学"),
new Array("655100", "655102", "能源地理学"),
new Array("655100", "655103", "能源计算与测量"),
new Array("655100", "655104", "储能技术"),
new Array("655100", "655105", "节能技术"),
new Array("655100", "655106", "一次能源"),
new Array("655100", "655107", "二次能源"),
new Array("655100", "655108", "能源系统工程"),
new Array("655100", "655109", "能源经济学"),
new Array("655100", "655199", "能源科学技术其他学科"),
new Array("655200", "655201", "辐射物理与技术"),
new Array("655200", "655202", "核探测技术与核电子学"),
new Array("655200", "655203", "放射性计量学"),
new Array("655200", "655204", "核仪器、仪表"),
new Array("655200", "655205", "核材料与工艺技术"),
new Array("655200", "655206", "粒子加速器"),
new Array("655200", "655207", "裂变堆工程技术"),
new Array("655200", "655208", "核聚变工程技术"),
new Array("655200", "655209", "核动力工程技术"),
new Array("655200", "655210", "同位素技术"),
new Array("655200", "655211", "核爆炸工程"),
new Array("655200", "655212", "核安全"),
new Array("655200", "655213", "乏燃料后处理技术"),
new Array("655200", "655214", "辐射防护技术"),
new Array("655200", "655215", "核设施退役技术"),
new Array("655200", "655216", "放射性三废处理、处置技术"),
new Array("655200", "655299", "核科学技术其他学科"),
new Array("656000", "656001", "化学工程基础学科"),
new Array("656000", "656002", "化工测量技术与仪器仪表"),
new Array("656000", "656003", "化工传递过程"),
new Array("656000", "656004", "化学分离工程"),
new Array("656000", "656005", "化学反应工程"),
new Array("656000", "656006", "化工系统工程"),
new Array("656000", "656007", "化工机械与设备"),
new Array("656000", "656008", "无机化学工程"),
new Array("656000", "656009", "有机化学工程"),
new Array("656000", "656010", "电化学工程"),
new Array("656000", "656011", "高聚物工程"),
new Array("656000", "656012", "煤化学工程"),
new Array("656000", "656013", "石油化学工程"),
new Array("656000", "656014", "天然气化学工程"),
new Array("656000", "656015", "精细化学工程"),
new Array("656000", "656016", "造纸技术"),
new Array("656000", "656017", "毛皮与制革工程"),
new Array("656000", "656018", "制药工程"),
new Array("656000", "656019", "生物化学工程"),
new Array("656000", "656099", "化学工程其他学科"),
new Array("656100", "656101", "纺织科学技术基础学科"),
new Array("656100", "656102", "纺织材料"),
new Array("656100", "656103", "纤维制造技术"),
new Array("656100", "656104", "纺织技术"),
new Array("656100", "656105", "染整技术"),
new Array("656100", "656106", "服装技术"),
new Array("656100", "656107", "纺织机械与设备"),
new Array("656100", "656199", "纺织科学技术其他学科"),
new Array("656200", "656201", "食品科学技术基础学科"),
new Array("656200", "656202", "食品加工技术"),
new Array("656200", "656203", "食品包装与储藏"),
new Array("656200", "656204", "食品机械"),
new Array("656200", "656205", "食品加工的副产品加工与利用"),
new Array("656200", "656206", "食品工业企业管理学"),
new Array("656200", "656207", "食品工程与粮油工程"),
new Array("656200", "656299", "食品科学技术其他学科"),
new Array("657000", "657001", "建筑史"),
new Array("657000", "657002", "土木建筑工程基础学科"),
new Array("657000", "657003", "土木建筑工程测量"),
new Array("657000", "657004", "建筑材料"),
new Array("657000", "657005", "工程结构"),
new Array("657000", "657006", "土木建筑结构"),
new Array("657000", "657007", "土木建筑工程设计"),
new Array("657000", "657008", "土木建筑工程施工"),
new Array("657000", "657009", "土木工程机械与设备"),
new Array("657000", "657010", "市政工程"),
new Array("657000", "657011", "建筑经济学"),
new Array("657000", "657099", "土木建筑工程其他学科"),
new Array("657100", "657101", "水利工程基础学科"),
new Array("657100", "657102", "水利工程测量"),
new Array("657100", "657103", "水工材料"),
new Array("657100", "657104", "水工结构"),
new Array("657100", "657105", "水力机械"),
new Array("657100", "657106", "水利工程施工"),
new Array("657100", "657107", "水处理"),
new Array("657100", "657108", "河流泥沙工程学"),
new Array("657100", "657109", "农田水利"),
new Array("657100", "657110", "水土保持学"),
new Array("657100", "657111", "环境水利"),
new Array("657100", "657112", "水利管理"),
new Array("657100", "657113", "防洪工程"),
new Array("657100", "657114", "水利经济学"),
new Array("657100", "657199", "水利工程其他学科"),
new Array("658000", "658001", "道路工程"),
new Array("658000", "658002", "公路运输"),
new Array("658000", "658003", "铁路运输"),
new Array("658000", "658004", "水路运输"),
new Array("658000", "658005", "船舶、舰船工程"),
new Array("658000", "658006", "航空运输"),
new Array("658000", "658007", "交通运输系统工程"),
new Array("658000", "658008", "交通运输安全工程"),
new Array("658000", "658099", "交通运输工程其他学科"),
new Array("658200", "658201", "航空航天科学技术基础学科"),
new Array("658200", "658202", "航空器结构与设计"),
new Array("658200", "658203", "航天器结构与设计"),
new Array("658200", "658204", "航空、航天推进系统"),
new Array("658200", "658205", "飞行器仪表设备"),
new Array("658200", "658206", "飞行器控制导航技术"),
new Array("658200", "658207", "航空航天材料"),
new Array("658200", "658208", "飞行器制造技术"),
new Array("658200", "658209", "飞行器试验技术"),
new Array("658200", "658210", "飞行器发射与回收飞行技术"),
new Array("658200", "658211", "航空航天地面设施技术保障"),
new Array("658200", "658212", "航空航天系统工程"),
new Array("658200", "658299", "航空航天科学技术其他学科"),
new Array("658300", "658301", "环境科学技术基础学科"),
new Array("658300", "658302", "环境学"),
new Array("658300", "658303", "环境工程学"),
new Array("658300", "658304", "资源科学技术"),
new Array("658300", "658399", "环境及资源科学技术其他学科"),
new Array("658400", "658401", "安全科学技术基础学科"),
new Array("658400", "658402", "安全社会科学"),
new Array("658400", "658403", "安全物质学"),
new Array("658400", "658404", "安全人体学"),
new Array("658400", "658405", "安全系统学"),
new Array("658400", "658406", "安全工程技术科学"),
new Array("658400", "658407", "安全卫生工程技术"),
new Array("658400", "658408", "安全社会工程"),
new Array("658400", "658409", "部门安全工程理论"),
new Array("658400", "658410", "公共安全"),
new Array("658400", "658499", "安全科学技术其他学科"),
new Array("659000", "659001", "管理思想史"),
new Array("659000", "659002", "管理理论"),
new Array("659000", "659003", "管理计量学"),
new Array("659000", "659004", "部门经济管理"),
new Array("659000", "659005", "区域经济管理"),
new Array("659000", "659006", "科学学与科技管理"),
new Array("659000", "659007", "企业管理"),
new Array("659000", "659008", "公共管理"),
new Array("659000", "659009", "管理工程"),
new Array("659000", "659010", "人力资源开发与管理"),
new Array("659000", "659011", "未来学"),
new Array("659000", "659012", "可持续发展管理"),
new Array("659000", "659099", "管理学其他学科"),
new Array("701000", "701001", "生物数学"),
new Array("701000", "701002", "生物物理学"),
new Array("701000", "701003", "生物化学"),
new Array("701000", "701004", "细胞生物学"),
new Array("701000", "701005", "免疫学"),
new Array("701000", "701006", "生理学"),
new Array("701000", "701007", "发育生物学"),
new Array("701000", "701008", "古生物学"),
new Array("701000", "701009", "遗传学"),
new Array("701000", "701010", "放射生物学"),
new Array("701000", "701011", "分子生物学"),
new Array("701000", "701012", "专题生物学研究"),
new Array("701000", "701013", "生物进化论"),
new Array("701000", "701014", "生态学"),
new Array("701000", "701015", "神经生物学"),
new Array("701000", "701016", "植物学"),
new Array("701000", "701017", "昆虫学"),
new Array("701000", "701018", "动物学"),
new Array("701000", "701019", "微生物学"),
new Array("701000", "701020", "病毒学"),
new Array("701000", "701021", "人类学"),
new Array("701000", "701099", "生物学其他学科"),
new Array("702000", "702001", "医学史"),
new Array("702000", "702002", "医学生物化学"),
new Array("702000", "702003", "人体解剖学"),
new Array("702000", "702004", "医学细胞生物学"),
new Array("702000", "702005", "人体生理学"),
new Array("702000", "702006", "人体组织胚胎学"),
new Array("702000", "702007", "医学遗传学"),
new Array("702000", "702008", "放射医学"),
new Array("702000", "702009", "人体免疫学"),
new Array("702000", "702010", "医学寄生虫学"),
new Array("702000", "702011", "医学微生物学"),
new Array("702000", "702012", "病理学"),
new Array("702000", "702013", "药理学"),
new Array("702000", "702014", "医学实验动物学"),
new Array("702000", "702015", "医学统计学"),
new Array("702000", "702099", "基础医学其他学科"),
new Array("703000", "703001", "临床诊断学"),
new Array("703000", "703002", "保健医学"),
new Array("703000", "703003", "理疗学"),
new Array("703000", "703004", "麻醉学"),
new Array("703000", "703005", "内科学"),
new Array("703000", "703006", "外科学"),
new Array("703000", "703007", "妇产科学"),
new Array("703000", "703008", "儿科学"),
new Array("703000", "703009", "眼科学"),
new Array("703000", "703010", "耳鼻咽喉科学"),
new Array("703000", "703011", "口腔医学"),
new Array("703000", "703012", "皮肤病学"),
new Array("703000", "703013", "性医学"),
new Array("703000", "703014", "神经病学"),
new Array("703000", "703015", "精神病学"),
new Array("703000", "703016", "重症医学"),
new Array("703000", "703017", "急诊医学"),
new Array("703000", "703018", "核医学"),
new Array("703000", "703019", "全科医学"),
new Array("703000", "703020", "肿瘤学"),
new Array("703000", "703021", "护理学"),
new Array("703000", "703099", "临床医学其他学科"),
new Array("704000", "704001", "营养学"),
new Array("704000", "704002", "毒理学"),
new Array("704000", "704003", "消毒学"),
new Array("704000", "704004", "流行病学"),
new Array("704000", "704005", "媒介生物控制学"),
new Array("704000", "704006", "环境医学"),
new Array("704000", "704007", "职业病学"),
new Array("704000", "704008", "地方病学"),
new Array("704000", "704009", "热带医学"),
new Array("704000", "704010", "社会医学"),
new Array("704000", "704011", "卫生检验学"),
new Array("704000", "704012", "食品卫生学"),
new Array("704000", "704013", "儿少与学校卫生学"),
new Array("704000", "704014", "妇幼卫生学"),
new Array("704000", "704015", "环境卫生学"),
new Array("704000", "704016", "劳动卫生学"),
new Array("704000", "704017", "放射卫生学"),
new Array("704000", "704018", "卫生工程学"),
new Array("704000", "704019", "卫生经济学"),
new Array("704000", "704020", "卫生统计学"),
new Array("704000", "704021", "计划生育学"),
new Array("704000", "704022", "优生学"),
new Array("704000", "704023", "健康促进与健康教育学"),
new Array("704000", "704024", "卫生管理学"),
new Array("704000", "704099", "预防医学与公共卫生学其他学科"),
new Array("705000", "705001", "军事医学"),
new Array("705000", "705002", "特种医学"),
new Array("705000", "705099", "军事医学与特种医学其他学科"),
new Array("706000", "706001", "药物化学"),
new Array("706000", "706002", "生物药物学"),
new Array("706000", "706003", "微生物药物学"),
new Array("706000", "706004", "放射性药物学"),
new Array("706000", "706005", "药剂学"),
new Array("706000", "706006", "药效学"),
new Array("706000", "706007", "医药工程"),
new Array("706000", "706008", "药物管理学"),
new Array("706000", "706009", "药物统计学"),
new Array("706000", "706099", "药学其他学科"),
new Array("707000", "707001", "中医学"),
new Array("707000", "707002", "民族医学"),
new Array("707000", "707003", "中西医结合医学"),
new Array("707000", "707004", "中药学"),
new Array("707000", "707099", "中医中药学其他学科"),
new Array("751000", "751001", "农业史"),
new Array("751000", "751002", "农业基础学科"),
new Array("751000", "751003", "农艺学"),
new Array("751000", "751004", "园艺学"),
new Array("751000", "751005", "农产品贮藏与加工"),
new Array("751000", "751006", "土壤学"),
new Array("751000", "751007", "植物保护学"),
new Array("751000", "751099", "农学其他学科"),
new Array("752000", "752001", "林业基础学科"),
new Array("752000", "752002", "林木遗传育种学"),
new Array("752000", "752003", "森林培育学"),
new Array("752000", "752004", "森林经理学"),
new Array("752000", "752005", "森林保护学"),
new Array("752000", "752006", "野生动物保护与管理"),
new Array("752000", "752007", "防护林学"),
new Array("752000", "752008", "经济林学"),
new Array("752000", "752009", "园林学"),
new Array("752000", "752010", "林业工程"),
new Array("752000", "752011", "森林统计学"),
new Array("752000", "752012", "林业经济学"),
new Array("752000", "752099", "林学其他学科"),
new Array("753000", "753001", "畜牧兽医科学基础学科"),
new Array("753000", "753002", "畜牧学"),
new Array("753000", "753003", "兽医学"),
new Array("753000", "753099", "畜牧兽医科学其他学科"),
new Array("754000", "754001", "水产学基础学科"),
new Array("754000", "754002", "水产增殖学"),
new Array("754000", "754003", "水产养殖学"),
new Array("754000", "754004", "水产饲料学"),
new Array("754000", "754005", "水产保护学"),
new Array("754000", "754006", "捕捞学"),
new Array("754000", "754007", "水产品贮藏与加工"),
new Array("754000", "754008", "水产工程学"),
new Array("754000", "754009", "水产资源学"),
new Array("754000", "754010", "水产经济学"),
new Array("754000", "754099", "水产学其他学科"),
new Array("801000", "801001", "统计学史"),
new Array("801000", "801002", "经济统计学"),
new Array("801000", "801003", "科学技术统计学"),
new Array("801000", "801004", "社会统计学"),
new Array("801000", "801005", "人口统计学"),
new Array("801000", "801006", "环境与生态统计学"),
new Array("801000", "801007", "生物与医学统计学"),
new Array("801000", "801099", "统计学其他学科"),
new Array("802000", "802001", "政治经济学"),
new Array("802000", "802002", "宏观经济学"),
new Array("802000", "802003", "微观经济学"),
new Array("802000", "802004", "比较经济学"),
new Array("802000", "802005", "经济地理学"),
new Array("802000", "802006", "发展经济学"),
new Array("802000", "802007", "生产力经济学"),
new Array("802000", "802008", "经济思想史"),
new Array("802000", "802009", "经济史"),
new Array("802000", "802010", "世界经济学"),
new Array("802000", "802011", "国民经济学"),
new Array("802000", "802012", "管理经济学"),
new Array("802000", "802013", "数量经济学"),
new Array("802000", "802014", "会计学"),
new Array("802000", "802015", "审计学"),
new Array("802000", "802016", "技术经济学"),
new Array("802000", "802017", "生态经济学"),
new Array("802000", "802018", "劳动经济学"),
new Array("802000", "802019", "城市经济学"),
new Array("802000", "802020", "资源经济学"),
new Array("802000", "802021", "环境经济学"),
new Array("802000", "802022", "可持续发展经济学"),
new Array("802000", "802023", "物流经济学"),
new Array("802000", "802024", "工业经济学"),
new Array("802000", "802025", "农村经济学"),
new Array("802000", "802026", "农业经济学"),
new Array("802000", "802027", "交通运输经济学"),
new Array("802000", "802028", "商业经济学"),
new Array("802000", "802029", "价格学"),
new Array("802000", "802030", "旅游经济学"),
new Array("802000", "802031", "信息经济学"),
new Array("802000", "802032", "财政学"),
new Array("802000", "802033", "金融学"),
new Array("802000", "802034", "保险学"),
new Array("802000", "802035", "国防经济学"),
new Array("802000", "802099", "经济学其他学科"),
new Array("803000", "803001", "马、恩、列、斯思想研究"),
new Array("803000", "803002", "毛泽东思想研究"),
new Array("803000", "803003", "马克思主义思想史"),
new Array("803000", "803004", "科学社会主义"),
new Array("803000", "803005", "社会主义运动史"),
new Array("803000", "803006", "国外马克思主义研究"),
new Array("803000", "803099", "马克思主义其他学科"),
new Array("803100", "803101", "马克思主义哲学"),
new Array("803100", "803102", "自然辩证法"),
new Array("803100", "803103", "中国哲学史"),
new Array("803100", "803104", "东方哲学史"),
new Array("803100", "803105", "西方哲学史"),
new Array("803100", "803106", "现代外国哲学"),
new Array("803100", "803107", "逻辑学"),
new Array("803100", "803108", "伦理学"),
new Array("803100", "803109", "美学"),
new Array("803100", "803199", "哲学其他学科"),
new Array("803200", "803201", "宗教学理论"),
new Array("803200", "803202", "无神论"),
new Array("803200", "803203", "原始宗教"),
new Array("803200", "803204", "古代宗教"),
new Array("803200", "803205", "佛教"),
new Array("803200", "803206", "基督教"),
new Array("803200", "803207", "伊斯兰教"),
new Array("803200", "803208", "道教"),
new Array("803200", "803209", "印度教"),
new Array("803200", "803210", "犹太教"),
new Array("803200", "803211", "袄教"),
new Array("803200", "803212", "摩尼教"),
new Array("803200", "803213", "锡克教"),
new Array("803200", "803214", "耆那教"),
new Array("803200", "803215", "神道教"),
new Array("803200", "803216", "中国民间宗教与民间信仰"),
new Array("803200", "803217", "中国少数民族宗教"),
new Array("803200", "803218", "当代宗教"),
new Array("803200", "803299", "宗教学其他学科"),
new Array("804000", "804001", "普通语言学"),
new Array("804000", "804002", "比较语言学"),
new Array("804000", "804003", "语言地理学"),
new Array("804000", "804004", "社会语言学"),
new Array("804000", "804005", "心理语言学"),
new Array("804000", "804006", "应用语言学"),
new Array("804000", "804007", "汉语研究"),
new Array("804000", "804008", "中国少数民族语言文字"),
new Array("804000", "804009", "外国语言"),
new Array("804000", "804099", "语言学其他学科"),
new Array("804100", "804101", "文学理论"),
new Array("804100", "804102", "文艺美学"),
new Array("804100", "804103", "文学批评"),
new Array("804100", "804104", "比较文学"),
new Array("804100", "804105", "中国古代文学"),
new Array("804100", "804106", "中国近代文学"),
new Array("804100", "804107", "中国现代文学"),
new Array("804100", "804108", "中国各体文学"),
new Array("804100", "804109", "中国民间文学"),
new Array("804100", "804110", "中国儿童文学"),
new Array("804100", "804111", "中国少数民族文学"),
new Array("804100", "804112", "世界文学史"),
new Array("804100", "804113", "东方文学"),
new Array("804100", "804114", "俄国文学"),
new Array("804100", "804115", "英国文学"),
new Array("804100", "804116", "法国文学"),
new Array("804100", "804117", "德国文学"),
new Array("804100", "804118", "意大利文学"),
new Array("804100", "804119", "美国文学"),
new Array("804100", "804120", "北欧文学"),
new Array("804100", "804121", "东欧文学"),
new Array("804100", "804122", "拉美文学"),
new Array("804100", "804123", "非洲文学"),
new Array("804100", "804124", "大洋洲文学"),
new Array("804100", "804199", "文学其他学科"),
new Array("804200", "804201", "艺术美学"),
new Array("804200", "804202", "艺术心理学"),
new Array("804200", "804203", "音乐"),
new Array("804200", "804204", "戏剧"),
new Array("804200", "804205", "戏曲"),
new Array("804200", "804206", "舞蹈"),
new Array("804200", "804207", "电影"),
new Array("804200", "804208", "广播电视文艺"),
new Array("804200", "804209", "美术"),
new Array("804200", "804210", "工艺美术"),
new Array("804200", "804211", "书法"),
new Array("804200", "804212", "摄影"),
new Array("804200", "804299", "艺术学其他学科"),
new Array("804300", "804301", "史学史"),
new Array("804300", "804302", "史学理论"),
new Array("804300", "804303", "历史文献学"),
new Array("804300", "804304", "中国通史"),
new Array("804300", "804305", "中国古代史"),
new Array("804300", "804306", "中国近代史、现代史"),
new Array("804300", "804307", "世界通史"),
new Array("804300", "804308", "亚洲史"),
new Array("804300", "804309", "非洲史"),
new Array("804300", "804310", "美洲史"),
new Array("804300", "804311", "欧洲史"),
new Array("804300", "804312", "澳洲、大洋洲史"),
new Array("804300", "804313", "专门史"),
new Array("804300", "804399", "历史学其他学科"),
new Array("805000", "805001", "考古理论"),
new Array("805000", "805002", "考古学史"),
new Array("805000", "805003", "考古技术"),
new Array("805000", "805004", "中国考古"),
new Array("805000", "805005", "外国考古"),
new Array("805000", "805006", "专门考古"),
new Array("805000", "805099", "考古学其他学科"),
new Array("806000", "806001", "政治学理论"),
new Array("806000", "806002", "政治制度"),
new Array("806000", "806003", "行政学"),
new Array("806000", "806004", "国际政治学"),
new Array("806000", "806099", "政治学其他学科"),
new Array("806100", "806101", "理论法学"),
new Array("806100", "806102", "法律史学"),
new Array("806100", "806103", "部门法学"),
new Array("806100", "806104", "国际法学"),
new Array("806100", "806199", "法学其他学科"),
new Array("806200", "806201", "军事理论"),
new Array("806200", "806202", "军事史"),
new Array("806200", "806203", "军事心理学"),
new Array("806200", "806204", "战略学"),
new Array("806200", "806205", "战役学"),
new Array("806200", "806206", "战术学"),
new Array("806200", "806207", "军队指挥学"),
new Array("806200", "806208", "军制学"),
new Array("806200", "806209", "军队政治工作学"),
new Array("806200", "806210", "军事后勤学"),
new Array("806200", "806211", "军事地学"),
new Array("806200", "806212", "军事技术"),
new Array("806200", "806299", "军事学其他学科"),
new Array("806300", "806301", "社会学史"),
new Array("806300", "806302", "社会学理论"),
new Array("806300", "806303", "社会学方法"),
new Array("806300", "806304", "实验社会学"),
new Array("806300", "806305", "数理社会学"),
new Array("806300", "806306", "应用社会学"),
new Array("806300", "806307", "比较社会学"),
new Array("806300", "806308", "社会地理学"),
new Array("806300", "806309", "政治社会学"),
new Array("806300", "806310", "文化社会学"),
new Array("806300", "806311", "历史社会学"),
new Array("806300", "806312", "科学社会学"),
new Array("806300", "806313", "经济社会学"),
new Array("806300", "806314", "军事社会学"),
new Array("806300", "806315", "公共关系学"),
new Array("806300", "806316", "社会人类学"),
new Array("806300", "806317", "组织社会学"),
new Array("806300", "806318", "发展社会学"),
new Array("806300", "806319", "福利社会学"),
new Array("806300", "806320", "人口学"),
new Array("806300", "806321", "劳动科学"),
new Array("806300", "806399", "社会学其他学科"),
new Array("806400", "806401", "民族问题理论"),
new Array("806400", "806402", "民族史学"),
new Array("806400", "806403", "蒙古学"),
new Array("806400", "806404", "藏学"),
new Array("806400", "806405", "新疆民族研究"),
new Array("806400", "806406", "文化人类学与民俗学"),
new Array("806400", "806407", "世界民族研究"),
new Array("806400", "806408", "文化学"),
new Array("806400", "806499", "民族与文化学其他学科"),
new Array("807000", "807001", "新闻理论"),
new Array("807000", "807002", "新闻史"),
new Array("807000", "807003", "新闻业务"),
new Array("807000", "807004", "新闻事业经营管理"),
new Array("807000", "807005", "广播与电视"),
new Array("807000", "807006", "传播学"),
new Array("807000", "807099", "新闻与传播学其他学科"),
new Array("808000", "808001", "教育史"),
new Array("808000", "808002", "教育学原理"),
new Array("808000", "808003", "教学论"),
new Array("808000", "808004", "德育原理"),
new Array("808000", "808005", "教育社会学"),
new Array("808000", "808006", "教育经济学"),
new Array("808000", "808007", "教育管理学"),
new Array("808000", "808008", "比较教育学"),
new Array("808000", "808009", "教育技术学"),
new Array("808000", "808010", "军事教育学"),
new Array("808000", "808011", "学前教育学"),
new Array("808000", "808012", "普通教育学"),
new Array("808000", "808013", "高等教育学"),
new Array("808000", "808014", "成人教育学"),
new Array("808000", "808015", "职业技术教育学"),
new Array("808000", "808016", "特殊教育学"),
new Array("808000", "808099", "教育学其他学科"),
new Array("808100", "808101", "体育史"),
new Array("808100", "808102", "体育理论"),
new Array("808100", "808103", "运动生物力学"),
new Array("808100", "808104", "运动生理学"),
new Array("808100", "808105", "运动心理学"),
new Array("808100", "808106", "运动生物化学"),
new Array("808100", "808107", "体育保健学"),
new Array("808100", "808108", "运动训练学"),
new Array("808100", "808109", "体育教育学"),
new Array("808100", "808110", "武术理论与方法"),
new Array("808100", "808111", "体育管理学"),
new Array("808100", "808112", "体育经济学"),
new Array("808100", "808199", "体育科学其他学科"),
new Array("808200", "808201", "旅游规划研究"),
new Array("808200", "808202", "旅游市场研究"),
new Array("808200", "808203", "旅游影响研究"),
new Array("808200", "808204", "旅游产品研究"),
new Array("808200", "808299", "旅游学其他学科"),
new Array("809000", "809001", "心理学史"),
new Array("809000", "809002", "认知心理学"),
new Array("809000", "809003", "社会心理学"),
new Array("809000", "809004", "实验心理学"),
new Array("809000", "809005", "发展心理学"),
new Array("809000", "809006", "医学心理学"),
new Array("809000", "809007", "人格心理学"),
new Array("809000", "809008", "临床与咨询心理学"),
new Array("809000", "809009", "心理测量"),
new Array("809000", "809010", "心理统计"),
new Array("809000", "809011", "生理心理学"),
new Array("809000", "809012", "工业心理学"),
new Array("809000", "809013", "管理心理学"),
new Array("809000", "809014", "应用心理学"),
new Array("809000", "809015", "教育心理学"),
new Array("809000", "809016", "法制心理学"),
new Array("809000", "809099", "心理学其他学科")
); 
