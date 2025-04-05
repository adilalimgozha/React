import Link from "next/link";

export default function Header() {
    return (
      <header>
        <span>BROR</span>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
      </header>
    );
  }

