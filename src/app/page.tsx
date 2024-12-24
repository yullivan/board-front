import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to the Message Board</h1>
      <p>
        Select a board from the sidebar to view posts or create a new board.
      </p>
      <Link
        href="/create-board"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New Board
      </Link>
    </div>
  );
}
