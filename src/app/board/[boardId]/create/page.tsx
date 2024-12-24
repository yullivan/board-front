import { CreatePostForm } from "@/components/CreatePostForm";

export default async function CreatePostPage({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <CreatePostForm boardId={(await params).boardId} />
    </div>
  );
}
