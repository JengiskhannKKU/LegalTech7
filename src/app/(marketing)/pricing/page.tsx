import Button from "@/components/ui/Button";

const tiers = [
  {
    name: "Core",
    price: "$49",
    description: "For early-stage legal ops teams getting organized.",
  },
  {
    name: "Scale",
    price: "$129",
    description: "For growing teams that need approvals and reporting.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Security, SSO, and custom workflows for large orgs.",
  },
];

export default function PricingPage() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Pricing</h1>
        <p className="mt-2 text-slate-600">
          Transparent plans that scale with your legal operations team.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{tier.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{tier.price}</p>
            <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
            <Button className="mt-6 w-full">Choose {tier.name}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
