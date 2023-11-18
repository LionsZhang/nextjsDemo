import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";



/**Next.js是通过文件系统进行路由的，比如之前的users。Next.js除查找page.tsx这个特定文件外
 * layout.tsx用于定义通用的布局。
 *
 * loading.tsx用于显示加载界面。
 *
 * route.tsx用于建立APIs。
 *
 * not-found.tsx用于显示找不到页面的错误。
 *
 * error.tsx用于显示意外错误
 *
 * */

/**前面说过，page.tsx定义的组件可以被公共访问，其他文件则不会被访问到，这就给我们带了好处。到page.tsx越来越复杂时，
 * 我们将相关逻辑拆分到其他组件即可，拆分的组件与page.tsx并排放置，因为功能是相关联的，在同一文件夹下组织更合理。
 * 如碰到有些组件是要重用的，就将它放置在外部的components目录即可*/



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Hello World</h1>
          <Link href="/user">User</Link>
          <ProductCard />
      </div>
    </main>
  )
}
