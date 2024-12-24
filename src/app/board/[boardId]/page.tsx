import Link from "next/link";
import { CreatePostButton } from "@/components/CreatePostButton";

interface Post {
  id: string;
  title: string;
  createdAt: string;
}

async function getPosts(boardId: string): Promise<Post[]> {
  const res = await fetch(`http://localhost:8080/posts?boardId=${boardId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function BoardPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const boardId = (await params).boardId;
  const posts = await getPosts(boardId);

  return (
    <div className="relative min-h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="">
          <CreatePostButton boardId={boardId} />
        </div>
      </div>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <Link
              href={`/post/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">
              Created at: {new Date(post.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
