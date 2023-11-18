import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link href="/user">Users</Link>
        </div>
    )
}
export default NavBar;
