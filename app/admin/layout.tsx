import React, {ReactNode} from "react";

/**定义在app目录下的layout.tsx文件适用于全部页面。而在admin目录下的只对admin路径下的页面有效。*/
interface Props{
    children:ReactNode
}
const AdminLayout=({children}: Props ) => {
    return(
        <div className="flex">
            <aside className="flex min-h-screen flex-col items-center justify-between p-24">AdminLayout </aside>
            <div >{children}</div>
        </div>
    )
}
export default AdminLayout;