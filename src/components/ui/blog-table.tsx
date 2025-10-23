import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const blogData = [
    {
        id: "BLOG001",
        title: "Blog 1",
        status: "Pending",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil aperiam voluptatem amet ad. Aut nostrum nihil vitae recusandae iure. Eveniet hic ut provident ratione ad aspernatur recusandae dolorem deleniti possimus, rerum animi, fugiat quae doloribus id facere deserunt vero, voluptatem qui quasi suscipit ducimus voluptatum illo quis quo. Aliquam fugit error enim, magni vel, animi soluta est obcaecati nisi doloremque eligendi nobis illum sunt suscipit perspiciatis cupiditate incidunt voluptas voluptatibus quae architecto quam. Tempora, soluta? Quidem sapiente recusandae illum, quam facere hic quisquam vero ab ut commodi incidunt animi tempora nesciunt alias natus itaque cum eum dolores nihil nemo.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: "BLOG002",
        title: "Blog 2",
        status: "Approved",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil aperiam voluptatem amet ad. Aut nostrum nihil vitae recusandae iure. Eveniet hic ut provident ratione ad aspernatur recusandae dolorem deleniti possimus, rerum animi, fugiat quae doloribus id facere deserunt vero, voluptatem qui quasi suscipit ducimus voluptatum illo quis quo. Aliquam fugit error enim, magni vel, animi soluta est obcaecati nisi doloremque eligendi nobis illum sunt suscipit perspiciatis cupiditate incidunt voluptas voluptatibus quae architecto quam. Tempora, soluta? Quidem sapiente recusandae illum, quam facere hic quisquam vero ab ut commodi incidunt animi tempora nesciunt alias natus itaque cum eum dolores nihil nemo.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: "BLOG003",
        title: "Blog 3",
        status: "Rejected",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil aperiam voluptatem amet ad. Aut nostrum nihil vitae recusandae iure. Eveniet hic ut provident ratione ad aspernatur recusandae dolorem deleniti possimus, rerum animi, fugiat quae doloribus id facere deserunt vero, voluptatem qui quasi suscipit ducimus voluptatum illo quis quo. Aliquam fugit error enim, magni vel, animi soluta est obcaecati nisi doloremque eligendi nobis illum sunt suscipit perspiciatis cupiditate incidunt voluptas voluptatibus quae architecto quam. Tempora, soluta? Quidem sapiente recusandae illum, quam facere hic quisquam vero ab ut commodi incidunt animi tempora nesciunt alias natus itaque cum eum dolores nihil nemo.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: "BLOG004",
        title: "Blog 4",
        status: "Approved",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil aperiam voluptatem amet ad. Aut nostrum nihil vitae recusandae iure. Eveniet hic ut provident ratione ad aspernatur recusandae dolorem deleniti possimus, rerum animi, fugiat quae doloribus id facere deserunt vero, voluptatem qui quasi suscipit ducimus voluptatum illo quis quo. Aliquam fugit error enim, magni vel, animi soluta est obcaecati nisi doloremque eligendi nobis illum sunt suscipit perspiciatis cupiditate incidunt voluptas voluptatibus quae architecto quam. Tempora, soluta? Quidem sapiente recusandae illum, quam facere hic quisquam vero ab ut commodi incidunt animi tempora nesciunt alias natus itaque cum eum dolores nihil nemo.",
        image: "https://via.placeholder.com/150",
    },
]

export function TableDemo() {
    return (
        <Table>
            <TableCaption>A list of your recent blogs.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogData.map((blog) => (
                    <TableRow key={blog.id}>
                        <TableCell className="font-medium">{blog.id}</TableCell>
                        <TableCell>{blog.title}</TableCell>
                        <TableCell>{blog.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
