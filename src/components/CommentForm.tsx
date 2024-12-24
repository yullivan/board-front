"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createComment } from "@/lib/api";

export function CommentForm({ postId }: { postId: string }) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createComment(content, author, postId);
      setContent("");
      setAuthor("");
      router.refresh();
    } catch (error) {
      console.error("Error creating comment:", error); // 오류를 콘솔에 출력
      alert("댓글을 게시하는 데 실패했습니다."); // 사용자에게 알림
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="author" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-1">
          Comment
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows={3}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  );
}
