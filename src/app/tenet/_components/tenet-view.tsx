"use client";

import { BlogForm } from "@/components/ui/blog-form";
import { useEffect, useState } from "react";
import BlogList from "./blog-list";
import { Button } from "@/components/ui/button";
import { BlogTable } from "@/components/ui/blog-table";
import { blogData } from "@/demo-data/blog";
import { Blog } from "@/app/admin/_components/admin-view";

export default function TenetView() {
    const [addTenant, setAddTenant] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const blogs = localStorage.getItem("blogs") || "[]";
        const parsedBlogs = JSON.parse(blogs);
        if (parsedBlogs.length === 0) {
            localStorage.setItem("blogs", JSON.stringify(blogData));
        }
        setBlogs(parsedBlogs);
    }, []);

    const onSubmit = (formData: any) => {
        const blogs = localStorage.getItem("blogs") || "[]";
        const parsedBlogs = JSON.parse(blogs);

        const data = {
            ...formData,
            image: formData.image || "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
            status: "Pending"
        };

        parsedBlogs.push(data);
        localStorage.setItem("blogs", JSON.stringify(parsedBlogs));
        setBlogs((prev => [...prev, data]));
        setAddTenant(false);
    };

    return (
        <div>
            {!addTenant && (
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <h1>Blog List</h1>
                        <Button
                            onClick={() => setAddTenant(true)}
                            className="bg-blue-500"
                        >Add Blog</Button>
                    </div>
                    <BlogTable blogs={blogs} setBlogs={setBlogs} showAction={false} />
                </div>
            )}
            {addTenant && (
                <div className="max-w-xl mx-auto w-full">
                    <Button onClick={() => setAddTenant(false)} variant="secondary" className="hover:underline mb-5 pl-0">Back</Button>
                    <BlogForm onSubmit={onSubmit} />
                </div>
            )}
        </div>
    );
}