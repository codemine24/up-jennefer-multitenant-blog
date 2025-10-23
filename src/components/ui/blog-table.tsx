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
}

export function BlogTable({ blogs, setBlogs }: BlogTableProps) {

    const handleApproved = (index: number) => {
        setBlogs(prev => {
            const updatedBlogs = [...prev]; // Create a shallow copy of the blogs array
            const selectedBlog = updatedBlogs[index];
            selectedBlog.status = "Approved"; // Update the status of the selected blog
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage with the new array
            return updatedBlogs; // Return the new array for React to detect the state change
        });
    };

    const handleReject = (index: number) => {
        setBlogs(prev => {
            const updatedBlogs = [...prev]; // Create a shallow copy of the blogs array
            const selectedBlog = updatedBlogs[index];
            selectedBlog.status = "Rejected"; // Update the status of the selected blog
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage with the new array
            return updatedBlogs; // Return the new array for React to detect the state change
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
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogs.map((blog, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{blog.title}</TableCell>
                        <TableCell>{blog.status}</TableCell>
                        <TableCell>
                            {blog.status === "Pending" ? (
                                <div className="flex gap-2 items-center">
                                    <Button className="bg-green-500" onClick={() => handleApproved(index)}>Approve</Button>
                                    <Button className="bg-red-500" onClick={() => handleReject(index)}>Reject</Button>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}