import { getBoards } from "@/lib/api";
import Link from "next/link";

export async function Sidebar() {
  const boards = await getBoards();

  return (
    <nav className="w-64 bg-gray-100 p-4">
      <h2 className="mb-4 text-xl font-bold">
        <Link href="/">Boards</Link>
      </h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="mb-2">
            <Link
              href={`/board/${board.id}`}
              className="text-blue-600 hover:underline"
            >
              {board.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
