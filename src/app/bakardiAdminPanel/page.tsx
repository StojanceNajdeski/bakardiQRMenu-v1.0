"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import ProtectedRoute from "../ProtectedRoute";
import { signOut } from "next-auth/react";
import useSWR from "swr";
import CategoryForm from "../../app/api/admin/categories/CategoryForm";
import CategoryRow from "../../app/api/admin/categories/CategoryRow";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BakardiAdminPanel() {
  const router = useRouter();
  const { t } = useTranslation();
  const { data: categories, mutate } = useSWR("/api/admin/categories", fetcher);
  const [adding, setAdding] = useState(false);

  return (
    <ProtectedRoute>
      <div className="p-5 max-w-2xl mx-auto">
        {/* Logout */}
        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-red-600 text-white py-2 px-5 rounded-md"
            onClick={() => signOut({ callbackUrl: "/bakardiAdminLogin" })}
          >
            Одјави се
          </button>
        </div>

        {/* Header */}
        <div className="text-center mt-4 mb-6">
          <h1 className="text-3xl font-bold">Добредојдовте во Админ Панелот</h1>
          <h2 className="text-xl mt-4">{t("bakardiMeni")}</h2>
        </div>

        {/* Add new category */}
        {adding ? (
          <div className="mb-6">
            <CategoryForm
              onDone={() => {
                setAdding(false);
                mutate();
              }}
            />
          </div>
        ) : (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setAdding(true)}
              className="bg-orange-600 text-white p-3 rounded-2xl"
            >
              ➕ Додади Категорија
            </button>
          </div>
        )}

        {/* Render categories */}
        <div className="flex flex-col gap-3">
          {!categories ? (
            <p>Loading...</p>
          ) : categories.length === 0 ? (
            <p className="text-gray-500">Нема категории.</p>
          ) : (
            categories.map(
              (cat: { id: number; name: string; slug: string }) => (
                <CategoryRow key={cat.id} cat={cat} refresh={mutate} />
              )
            )
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
