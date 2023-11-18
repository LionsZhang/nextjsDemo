import React from "react";
/** 动态路由实例 访问 /users/1/bookId/2*/
interface Props {
    params:{
        id: number;
        bookId: number
    }
}
const UserDetailPage=({ params: {id,bookId} }: Props ) => {
 return <div>UserDetailPage{id},book {bookId}</div>

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