import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Email" type="email" placeholder="you@techlegal7.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
