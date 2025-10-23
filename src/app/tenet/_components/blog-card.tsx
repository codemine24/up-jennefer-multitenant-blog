import Image from "next/image";

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
}

export default function BlogCard({ title, description, image }: BlogCardProps) {

    return (
        <div className="bg-neutral-900 rounded-2xl p-5 flex flex-col gap-4 hover:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-lg">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
