import { LockIcon, MailIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Logo from "../../components/ui/logo";

export default function Login() {
  return (
    <>
      <Card className="w-[90vw] max-w-[400px] mx-auto mt-8">
        <CardHeader>
          <Logo size={30} variant="blue" className="mx-auto" />
          <p className="text-center text-text-light">
            Memorize anything, anywhere
          </p>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email" className="flex items-center text-text">
            <MailIcon size={14} className="text-text mr-1" />
            E-mail
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Example: abc@memorix.io"
            className="w-full mt-1 focus:outline-none focus:border-primary"
          />
          <Label
            htmlFor="password"
            className="flex items-center text-text mt-4"
          >
            <LockIcon size={14} className="text-text mr-1" />
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full mt-1 focus:outline-none focus:border-primary"
          />
          <Button className="w-full mt-4 bg-primary">Log in</Button>
        </CardContent>
      </Card>
    </>
  );
}
