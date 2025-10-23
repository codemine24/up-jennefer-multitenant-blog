"use client";

import { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import { blogData } from "@/demo-data/blog";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogs = localStorage.getItem("blogs") || "[]";
        const parsedBlogs = JSON.parse(blogs);
        if (parsedBlogs.length === 0) {
            localStorage.setItem("blogs", JSON.stringify(blogData));
        }
        setBlogs(parsedBlogs);
    }, []);

    console.log(blogs);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.filter((blog: any) => blog.status === "Approved").map((blog: any, index: number) => (
                <BlogCard key={index} {...blog} />
            ))}
        </div>
    );
}