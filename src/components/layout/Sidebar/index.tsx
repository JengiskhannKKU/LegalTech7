import Link from "next/link";

const links = [
  { href: "/dashboard", label: "แดชบอร์ดที่ดิน" },
  { href: "/features", label: "ฟีเจอร์แพลตฟอร์ม" },
  { href: "/pricing", label: "แผนราคา" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/blog", label: "บทความล่าสุด" },
];

export default function Sidebar() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        ทางลัด
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-transparent px-3 py-2 font-medium text-slate-700 transition hover:border-slate-200 hover:bg-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
