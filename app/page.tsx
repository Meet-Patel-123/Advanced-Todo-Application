"use server";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid place-content-center h-screen">
      <Link
        href="/dashboard"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Dashboard
      </Link>
    </div>
  );
}
