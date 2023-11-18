import React from "react";

/** 多参数动态路由实例  访问 /product/s/b*   加上可变数组 params:{slug:string[]}/

 /** 访问查询字符串参数
 有时需要获取查询字符串，比如
 /products?sortOrder=name
 加上searchParams属性即可获取。*/
interface Props {
    params:{slug:string[]}
    searchParams:{sortOrder:string}
}
const ProductPage=({ params: {slug} ,searchParams:{sortOrder}}: Props ) => {
    return <div>ProductPage{slug}  search={sortOrder}</div>

}
export default ProductPage
