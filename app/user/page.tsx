/** 客户端还带来另一个问题，就是额外增加到服务器的往返，我们加载时先下载jss、html、css，然后又发起获取数据的请求。

 而使用服务端获取数据，这些问题均不再存在。

 修改下 /users 的页面。这个组件默认在服务端渲染，使用fetch获取jsonplaceholder的伪数据。

 访问查询字符串参数

 有时需要获取查询字符串，比如

 /user?sortOrder=name

 加上searchParams属性即可获取。*/



/** 在/users/page.tsx里，我们用Suspense将 UsersTable包起来，表示UsersTable数据未获得前用加载UI展示。*/
import React from "react";
import {Suspense} from "react";
import UsersTable from "@/app/user/UsersTable";
import Link from "next/link";

interface Props{
    searchParams:{sortOrder:string}
}
const UsersPage=({searchParams:{sortOrder}}: Props ) => {
    return(
        <div>
            <h1>Hello World</h1>
            <Link href="/user/new" className="btn">New User</Link>
            <Suspense fallback={<p>加载中...</p>}>
            <UsersTable sortOrder={sortOrder}/>
            </Suspense>
        </div>
    )
}
export default UsersPage;
