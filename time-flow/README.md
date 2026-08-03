# TimeFlow 产品落地页

这是 TimeFlow 应用的产品官网代码。

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `out` 目录。

## 目录结构

```
.
├── src/
│   ├── app/
│   │   ├── page.tsx          # 中文首页
│   │   ├── layout.tsx        # 中文布局
│   │   ├── en/
│   │   │   ├── page.tsx      # 英文首页
│   │   │   └── layout.tsx    # 英文布局
│   │   └── globals.css
│   ├── components/           # 中文组件
│   └── components-en/        # 英文组件
├── privacy-zh.html           # 中文隐私政策
├── privacy-en.html           # 英文隐私政策
├── support-zh.html           # 中文技术支持
├── support-en.html           # 英文技术支持
└── ...
```
