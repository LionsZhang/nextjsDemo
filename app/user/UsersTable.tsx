/** 客户端还带来另一个问题，就是额外增加到服务器的往返，我们加载时先下载jss、html、css，然后又发起获取数据的请求。

 而使用服务端获取数据，这些问题均不再存在。

 修改下 /users 的页面。这个组件默认在服务端渲染，使用fetch获取jsonplaceholder的伪数据。*/
import React from "react";
import {sort} from "fast-sort";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder:string
}


/** 如下面代码，在fetch函数加上第2个参数。在某些数据变化很快的场景中可能不需要缓存，可以设置 {cache: 'no-store'}。设置间隔的话，可以设置{next:{revalidate:10}} 表示10秒后后台自动更新缓存*/
const UsersTable = async ({sortOrder}:Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
        {
        cache: "no-store",
        next: { revalidate: 10 }
    });

    const users: User[] = await res.json();

    const orderedUsers=sort(users).asc((user)=>{
     sortOrder= "email"?user.email:user.name
    })

    return (
        <div>
            <h1>Users</h1>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>
                        <Link href={"/user?sortOrder=name"}>Name</Link>
                    </th>
                    <th>
                        <Link href={"/user?sortOrder=email"}>Email</Link>
                    </th>
                </tr>
                </thead>
                <tbody>
                {orderedUsers.map((u) => (
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;