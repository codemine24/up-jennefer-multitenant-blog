"use client";

import { BlogForm } from "@/components/ui/blog-form";
import { useState } from "react";
import BlogList from "./blog-list";
import { Button } from "@/components/ui/button";

export default function TenetView() {
    const [addTenant, setAddTenant] = useState(false);

    const onSubmit = (formData: any) => {
        const { title, description, image } = formData;

        const blogs = localStorage.getItem("blogs") || "[]";
        const parsedBlogs = JSON.parse(blogs);
        parsedBlogs.push({ title, description, image, status: "Pending" });
        localStorage.setItem("blogs", JSON.stringify(parsedBlogs));
        setAddTenant(false);
    };

    return (
        <div>
            {!addTenant && (
                <div>
                    <div className="flex justify-between items-center">
                        <h1>Blog List</h1>
                        <Button
                            onClick={() => setAddTenant(true)}
                            className="bg-blue-500"
                        >Add Blog</Button>
                    </div>
                    <BlogList />
                </div>
            )}
            {addTenant && (
                <div>
                    <Button onClick={() => setAddTenant(false)} variant="secondary" className="hover:underline mb-5 pl-0">Back</Button>
                    <BlogForm onSubmit={onSubmit} />
                </div>
            )}
        </div>
    );
}