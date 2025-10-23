import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./button";
import { SetStateAction } from "react";
import { Blog } from "@/app/admin/_components/admin-view";

interface BlogTableProps {
    blogs: Blog[];
    setBlogs: React.Dispatch<SetStateAction<Blog[]>>;
    showAction?: boolean;
}

export function BlogTable({ blogs, setBlogs, showAction = true }: BlogTableProps) {

    const handleApproved = (index: number) => {
        setBlogs(prev => {
            const updatedBlogs = [...prev];
            const selectedBlog = updatedBlogs[index];
            selectedBlog.status = "Approved";
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
            return updatedBlogs;
        });
    };

    const handleReject = (index: number) => {
        setBlogs(prev => {
            const updatedBlogs = [...prev];
            const selectedBlog = updatedBlogs[index];
            selectedBlog.status = "Rejected";
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
            return updatedBlogs;
        });
    };

    return (
        <Table>
            <TableCaption>A list of your recent blogs.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    {showAction && <TableHead>Actions</TableHead>}
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogs.map((blog, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{blog.title}</TableCell>
                        <TableCell>{blog.status}</TableCell>
                        {showAction && <TableCell>
                            {blog.status === "Pending" ? (
                                <div className="flex gap-2 items-center">
                                    <Button className="bg-green-500" onClick={() => handleApproved(index)}>Approve</Button>
                                    <Button className="bg-red-500" onClick={() => handleReject(index)}>Reject</Button>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}