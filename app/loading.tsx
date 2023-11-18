/** 用于显示加载页面*/
"use client"
const Loading = () => {
    return (
        <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )
}
export default Loading;