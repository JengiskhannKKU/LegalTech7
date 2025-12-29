import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Full name" type="text" placeholder="Alex Morgan" />
      <Input label="Work email" type="email" placeholder="alex@company.com" />
      <Button type="submit" variant="secondary">
        Create account
      </Button>
    </form>
  );
}
