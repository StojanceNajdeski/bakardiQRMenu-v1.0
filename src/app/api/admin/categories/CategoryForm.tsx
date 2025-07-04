"use client";

import { useState } from "react";

type Category = {
  id?: number;
  name: string;
  slug: string;
};

type Props = {
  initial?: Category;
  onDone?: () => void;
};

export default function CategoryForm({ initial, onDone }: Props) {
  const [values, setValues] = useState(initial ?? { name: "", slug: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = initial ? "PATCH" : "POST";
    const url = initial
      ? `/api/admin/categories/${initial.id}`
      : "/api/admin/categories";
    await fetch(url, { method, body: JSON.stringify(values) });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        placeholder="Име"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        required
        className="border p-2 rounded"
      />
      <input
        placeholder="slug"
        value={values.slug}
        onChange={(e) => setValues({ ...values, slug: e.target.value })}
        required
        className="border p-2 rounded"
      />
      <button className="bg-green-600 text-white py-1 rounded">
        {initial ? "Сними измени" : "Креирај"}
      </button>
    </form>
  );
}
