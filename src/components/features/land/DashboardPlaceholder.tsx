import Link from "next/link";

type DashboardPlaceholderProps = {
  title: string;
  description: string;
};

export default function DashboardPlaceholder({
  title,
  description,
}: DashboardPlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          LandGuard AI
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
      <Link
        href="/dashboard"
        className="text-sm font-semibold text-slate-700 underline underline-offset-4"
      >
        กลับไปแดชบอร์ด
      </Link>
    </section>
  );
}
