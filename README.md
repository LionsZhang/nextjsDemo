This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# 先看app文件夹。
# 1. 这是Next.js的路由系统，它不像React需要创建routes并进行映射，它基于文件系统，只需创建文件和文件夹即代表路由。
# 2. app文件夹有favicon.ico、global.css、layout.tsx、page.tsx文件，global.css是应用全局的css，layout.tsx是一个通用的布局，
# 3. page.tsx则是我们看到的主页，我们清除内容，只加上hello world字样。

# 再看public文件夹。
# 1.主要用于放置一些公用资源，比如图像。这里默认就放了next.svg和vercel.svg。顺便说一下，vercel就是创建next.js的公司。
# 根目录。
# 根目录下有一些配置文件。在绝大多数情况下，我们不必碰这些文件。

# 路由和导航
# 前面说过，Next.js是通过文件系统来路由的。
# app文件夹下，新建users文件夹并在该文件夹下新建page.tsx文件，就相当于新建了一个路由 /users。该路由展现的页面组件定义在page.tsx文件，
# 该文件名是约定的，必须是page，扩展名可以是tsx(typescript)或jsx(javascript)。