import { useState } from "react";
import CategoryForm from "./CategoryForm";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  cat: Category;
  refresh: () => void;
};

export default function CategoryRow({ cat, refresh }: Props) {
  const [editing, setEditing] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Избриши ја категоријата “${cat.name}” ?`)) return;
    await fetch(`/api/admin/categories/${cat.id}`, { method: "DELETE" });
    refresh();
  };

  return editing ? (
    <CategoryForm
      initial={cat}
      onDone={() => {
        setEditing(false);
        refresh();
      }}
    />
  ) : (
    <div className="flex items-center gap-2 mb-3">
      <Link
        href={`/bakardiAdminPanel/${cat.slug}`}
        className="flex-1 text-lg underline hover:text-orange-600"
      >
        {cat.name}
      </Link>
      <button onClick={() => setEditing(true)}>✏️</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}
