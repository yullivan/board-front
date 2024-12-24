const API_BASE_URL = "http://localhost:8080";

interface Board {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  boardId: string;
}

interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  postId: string;
}

export async function getBoards(): Promise<Board[]> {
  const res = await fetch(`${API_BASE_URL}/boards`, {
    cache: "no-store",
    next: { tags: ["boards"] },
  });
  if (!res.ok) throw new Error("Failed to fetch boards");
  return res.json();
}

export async function createBoard(name: string): Promise<Board> {
  const res = await fetch(`${API_BASE_URL}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to create board");
  return res.json();
}

export async function getPosts(boardId: string): Promise<Post[]> {
  const res = await fetch(`${API_BASE_URL}/posts?boardId=${boardId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(postId: string): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts/${postId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function createPost(
  title: string,
  content: string,
  boardId: string
): Promise<Post> {
  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, boardId }),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(`${API_BASE_URL}/comments?postId=${postId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export async function createComment(
  content: string,
  author: string,
  postId: string
) {
  const res = await fetch(`${API_BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, author, postId }),
  });

  if (!res.ok) {
    const errorMessage = await res.text(); // 서버에서 반환된 오류 메시지
    throw new Error(`Failed to create comment: ${errorMessage}`);
  }

  //   return res.json();
}
