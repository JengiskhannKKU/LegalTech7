import Link from "next/link";

const links = [
  { href: "/dashboard", label: "แดชบอร์ด" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/blog", label: "บทความ" },
  { href: "/features", label: "ฟีเจอร์" },
  { href: "/pricing", label: "ราคา" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          LegalTech7
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
