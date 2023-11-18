"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
export default function NewUserPage() {
    const router= useRouter()
    return (
        <div>
            <h1>Hello World</h1>
            {/*<Link href="/user">Users</Link>*/}
            <button className="btn btn-primary" onClick={()=>{router.push("/user") }}>createBtn
            </button>
        </div>
    );
};