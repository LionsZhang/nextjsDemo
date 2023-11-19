import {NextRequest,NextResponse} from "next/server";

/**处理HTTP请求的操作则用 route.tsx。

 根据传统，API一般使用 /api的url前缀，我们创建名为api的文件夹。再创建users目录，并在其下新建route.tsx文件。访问 /api/users , 我们会获取json格式的原始数据
 本示例中，GET函数的参数 request 没用到，是否可以去除？可以的。
 如果去除request参数，Next.js会将响应结果放至缓存里，下次前端访问该API时，直接从缓存里取数据。为了防止缓存，这里我们保持提供request参数*/
export function GET(nextRequest:NextRequest){
    // return NextResponse.json("HelloWord")
    return NextResponse.json([{"id":"1","name":"zs"},{"id":"2","name":"ls"}])

}