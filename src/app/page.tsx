import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import LoginForm from "@/components/features/auth/LoginForm";
import SignupForm from "@/components/features/auth/SignupForm";
import Sidebar from "@/components/layout/Sidebar";

const highlights = [
  {
    title: "Matter intake",
    description: "Capture requests with structured playbooks and automated triage.",
  },
  {
    title: "Contract workflows",
    description: "Route approvals with visibility across legal, finance, and sales.",
  },
  {
    title: "Risk insights",
    description: "Track obligations and surface renewal windows before they surprise you.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            TechLegal7 platform
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Legal operations built for speed, clarity, and audit-ready control.
          </h1>
          <p className="text-lg text-slate-600">
            Bring contract, compliance, and request workflows into a single workspace designed
            to keep your team aligned.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Request a demo</Button>
            <Button variant="secondary">View roadmap</Button>
          </div>
        </div>
        <Sidebar />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Get your team onboard</h2>
          <p className="mt-3 text-slate-600">
            Invite stakeholders, assign roles, and track who needs to approve next.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Sign in</h3>
            <LoginForm />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Create account</h3>
            <SignupForm />
          </div>
        </div>
      </section>
    </div>
  );
}
