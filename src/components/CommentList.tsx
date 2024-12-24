interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

export function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id} className="bg-gray-100 p-4 rounded">
          <p className="mb-2">{comment.content}</p>
          <div className="text-sm text-gray-500">
            <span>{comment.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
