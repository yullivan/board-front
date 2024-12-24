import { CommentList } from "@/components/CommentList";
import { CommentForm } from "@/components/CommentForm";
import { getComments, getPost } from "@/lib/api";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;
  const post = await getPost(postId);
  const comments = await getComments(postId);

  return (
    <div className="space-y-8">
      <article className="space-y-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">
          Created at: {new Date(post.createdAt).toLocaleString()}
        </p>
        <div className="whitespace-pre-wrap">{post.content}</div>
      </article>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Comments</h2>
        <CommentForm postId={postId} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
