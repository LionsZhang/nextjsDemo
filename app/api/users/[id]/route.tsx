import {NextRequest,NextResponse} from "next/server";

/**获取单个对象比如单个用户的url一般为 api/users/1，显然是动态路径，按之前学过的，要使用加方括号的文件夹，再在其下创建 route.tsx。
 我们在 api/users目录下新建 [id] 目录，再创建route.tsx。获取单个对象需要给GET函数提供第2个参数即对象的id。
 实际项目的数据通常从数据库获取，这里也暂时硬编码，并假定只有10个用户，参数id超过10就回复找不到用户

 interface Props {
    params:{
        id: number;
        bookId: number
    }
}   单独定义Props

 params:{ params: {id:number}}  内联Props
 */

//GET 请求
export function GET(nextRequest:NextRequest,{ params}:{ params: {id:number}}){
    if (params.id>10) return NextResponse.json("HelloWord");
    return NextResponse.json([{"id":"1","name":"zs"},{"id":"2","name":"ls"}]);

}
//POST 请求

/** 在POST、PUT等方法时，我们需要对获取的请求体进行验证。我们的示例比较简单，用 if 语句判断问题不大，而实际项目中，请求体数据往往非常复杂，如果都按这种方法判断，会非常复杂，会有一大堆if语句非常丑陋。

 我们需要验证的工具。zod就是流行的一种工具。它的官网是：
 https://zod.dev/
 可以查看相关文档。
 本节我们简单使用zod验证数据。
 npm install zod
 先安装 zod:*/
export async function POST(nextRequest:NextRequest,{ params}:{ params: {id:number}}){
    const body=await NextRequest.json()
    if (params.id>10) return nextRequest.json("HelloWord");
    return NextResponse.json([{"id":"1","name":"zs"},{"id":"2","name":"ls"}]);

}