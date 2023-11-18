import React from "react";
/** 动态路由实例 访问路径 /user/1*/
interface Props {
    params:{ id: number }
}
const UserDetailPage=({ params: {id} }: Props ) => {
 return <div>UserDetailPage{id}</div>

}
export default UserDetailPage

// import { useRouter } from 'next/router'
//
// const Post = () => {
//     const router = useRouter()
//     const { pid } = router.query
//
//     return <p>Post: {pid}</p>
// }
//
// export default Post