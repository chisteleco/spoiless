import Image from "next/image";
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  // Otros campos relevantes
}

interface IndexProps {
  products: Product[];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Spoiless</h1>
      <Link href="/mipage">Login</Link>

    </main>
  );
}

