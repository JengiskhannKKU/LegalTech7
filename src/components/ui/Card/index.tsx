import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function Card({ title, description, href }: CardProps) {
  const content = (
    <article
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow${
        href ? " hover:shadow-md" : ""
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label={title}
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
    >
      {content}
    </Link>
  );
}
