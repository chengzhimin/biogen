# BioGen AI - AI驱动的医疗研究平台

![BioGen AI](https://img.shields.io/badge/BioGen-AI-38b2ac?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-orange?style=for-the-badge)

## 项目简介

BioGen AI 是一个基于人工智能的医疗研究平台，专注于提供以下核心功能：

- 🧬 **抗体从头生成工具** - 利用深度学习从头设计高亲和力抗体序列
- 🔬 **Binder从头生成工具** - 基于物理原理和深度学习设计特异性蛋白质Binder
- 🧠 **AI医疗问答系统** - 智能医疗知识问答和研究助手

## 功能特色

### 抗体重头生成
- 支持FASTA格式抗原序列输入
- 多种抗体类型选择（IgG, IgM, IgA, IgD, IgE）
- CDR区域优化和亲和力预测
- 实时3D结构预览
- 批量生成和导出功能

### Binder从头生成
- PDB ID或序列输入支持
- 交互式3D结合位点选择
- 结合能和特异性评估
- 分子相互作用分析
- 实验验证指导

### AI医疗问答
- 自然语言理解和处理
- 医学文献智能检索
- 多模态医学影像分析
- 实时语音输入和播报
- 相关论文推荐

## 技术栈

### 前端技术
- **HTML5** - 语义化标记
- **CSS3** - Tailwind CSS框架
- **JavaScript** - ES6+
  
### 动画和可视化库
- **Anime.js** - 流畅的UI动画
- **Matter.js** - 物理引擎动画
- **p5.js** - 创意编程和粒子效果
- **ECharts** - 数据可视化图表

### 设计系统
- **主色调** - 深海蓝 (#1a365d)
- **辅助色** - 薄荷绿 (#38b2ac)
- **强调色** - 琥珀橙 (#ed8936)
- **字体** - Inter (Google Fonts)

## 快速开始

### 在线访问
直接访问 GitHub Pages 部署的网站：
```
https://chengzhimin.github.io/biogen/
```

### 本地开发

1. **克隆仓库**
```bash
git clone https://github.com/chengzhimin/biogen.git
```

2. **启动本地服务器**
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000
```

3. **访问应用**
打开浏览器访问 `http://localhost:8000`

## 项目结构

```
biogen-ai/
├── index.html          # 主页
├── antibody.html       # 抗体生成工具页面
├── binder.html         # Binder设计工具页面
├── biomni.html         # AI问答系统页面
├── main.js             # 主JavaScript文件
├── resources/          # 图片资源目录
│   ├── hero-lab.png
│   ├── antibody-binding.png
│   ├── binder-design.png
│   └── ai-medical-brain.png
└── README.md           # 项目文档
```

## 使用指南

### 抗体生成工具

1. 在输入框中输入目标抗原序列（FASTA格式）
2. 选择抗体类型（IgG、IgM等）
3. 调整设计参数（亲和力、稳定性、生成数量）
4. 点击"开始生成抗体"按钮
5. 查看生成结果，包括序列、亲和力预测和CDR区域

### Binder设计工具

1. 输入靶标蛋白的PDB ID或序列
2. 选择目标类型（蛋白质、肽段、受体、酶）
3. 加载靶标结构
4. 在3D视图中选择结合位点
5. 设置Binder长度、亲和力和稳定性参数
6. 生成Binder并查看结合分析

### AI医疗问答

1. 选择快速查询类别或直接输入问题
2. 支持文本输入或语音输入
3. 查看AI回答和相关文献引用
4. 浏览推荐的学术论文
5. 查看相关知识图谱

## 浏览器支持

- Chrome (推荐) 
- Firefox
- Safari
- Edge

建议使用最新版本的现代浏览器以获得最佳体验。

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 开发路线图

- [x] 核心功能实现
- [x] UI/UX设计优化
- [x] 响应式布局
- [ ] 后端API集成
- [ ] 用户认证系统
- [ ] 数据持久化
- [ ] 高级数据可视化
- [ ] 移动端应用

## 常见问题

**Q: 这个平台是否需要安装任何软件？**
A: 不需要。BioGen AI是一个纯前端Web应用，只需要浏览器即可访问。

**Q: 生成的抗体序列是否经过实验验证？**
A: 当前版本显示的是模拟数据。实际应用中需要结合实验验证。

**Q: 是否支持导出结果？**
A: 是的，所有生成的序列和分析结果都可以导出为多种格式。

**Q: 平台是否收费？**
A: 当前版本是开源免费的演示版本。

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 致谢

感谢以下开源项目和资源：

- [Tailwind CSS](https://tailwindcss.com/)
- [Anime.js](https://animejs.com/)
- [p5.js](https://p5js.org/)
- [ECharts](https://echarts.apache.org/)
- [Matter.js](https://brm.io/matter-js/)

---

© 2025 BioGen AI. 致力于推动AI驱动的医疗研究创新.
