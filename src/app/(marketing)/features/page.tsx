import Card from "@/components/ui/Card";

const features = [
  {
    title: "Intake automation",
    description: "Route requests to the right reviewer with SLA tracking built in.",
  },
  {
    title: "Policy library",
    description: "Centralize templates, clauses, and playbooks for quick reuse.",
  },
  {
    title: "Executive reporting",
    description: "Surface spend, risk, and volume trends with shareable dashboards.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Features</h1>
        <p className="mt-2 text-slate-600">
          Build repeatable legal operations workflows without adding new complexity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}
