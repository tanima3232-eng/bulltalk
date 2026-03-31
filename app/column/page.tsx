import type { Metadata } from "next";
import { getAllColumns } from "@/lib/columns";
import ColumnListClient from "./ColumnListClient";

export const metadata: Metadata = {
  title: "コラム一覧｜相続・資産形成・不動産の金融知識｜Bulltalk",
  description:
    "相続・資産形成・不動産について、元大手信託銀行員が基礎から解説するコラム一覧です。全35本。",
};

export default function ColumnPage() {
  const columns = getAllColumns();
  return <ColumnListClient columns={columns} />;
}
