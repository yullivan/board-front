"use client";

import { useRouter } from "next/navigation";

export function CreatePostButton({ boardId }: { boardId: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/board/${boardId}/create`)}
      className="mt-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
    >
      Create Post
    </button>
  );
}
