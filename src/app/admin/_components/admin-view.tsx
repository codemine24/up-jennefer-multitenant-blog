"use client";

import { useEffect, useState } from "react";
import { blogData } from "@/demo-data/blog";
import { BlogTable } from "@/components/ui/blog-table";

export interface Blog {
    title: string;
    status: string;
    description: string;
    image: string;
}

export default function AdminView() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const blogs = localStorage.getItem("blogs") || "[]";
        const parsedBlogs = JSON.parse(blogs);

        if (parsedBlogs.length === 0) {
            localStorage.setItem("blogs", JSON.stringify(blogData));
        }
        setBlogs(parsedBlogs);
    }, []);

    return (
        <div>
            <h1 className="mb-5">Blog List</h1>
            <BlogTable blogs={blogs} setBlogs={setBlogs} />
        </div>
    );
}