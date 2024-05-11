import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/investor/signup"}>
        Sign up as investor
      </Link>
    </main>
  );
}
