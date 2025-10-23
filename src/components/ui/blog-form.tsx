import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";
import { Textarea } from "./textarea";

interface BlogFormProps {
    onSubmit: (formData: any) => void;
}

export const BlogForm = ({ onSubmit }: BlogFormProps) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "image" && e.target instanceof HTMLInputElement) {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const result = e.target?.result as string;
                    setFormData({
                        ...formData,
                        image: result,
                    });
                };
                reader.readAsDataURL(file);
            }
        }

        else if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto w-full">
            <Input type="file" placeholder="Image" name="image" onChange={handleChange} />
            <Input placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
            <Textarea placeholder="Description" name="description" value={formData.description} onChange={handleChange} />

            <Button type="submit" className="bg-blue-500">Submit</Button>
        </form>
    );
};