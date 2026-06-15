import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Marketplace</h1>
      <Link href="/products" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Products</Link>
    </main>
  );
}
