import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-950 text-white shadow-sm">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M12 2.2 4.5 5.6v6.4c0 5.2 3.6 8.9 7.5 10.8 3.9-1.9 7.5-5.6 7.5-10.8V5.6L12 2.2zm0 2.2 5 2.2v5.4c0 4.2-2.6 7.2-5 8.6-2.4-1.4-5-4.4-5-8.6V6.6l5-2.2z"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">LandGuard AI</span>
            <span className="text-[11px] text-slate-500">ระบบเฝ้าระวังความเสี่ยงที่ดิน</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
            ส
          </span>
          <span className="hidden flex-col text-xs leading-tight sm:flex">
            <span className="font-semibold text-slate-900">สมชาย ใจดี</span>
            <span className="text-[11px] text-slate-500">เจ้าของที่ดิน</span>
          </span>
          <span className="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 lg:inline-flex">
            ใช้งานอยู่
          </span>
        </div>
      </div>
    </header>
  );
}
