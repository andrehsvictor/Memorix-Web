"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { LockIcon, MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import Logo from "../../components/ui/logo";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid e-mail address" })
    .nonempty({ message: "E-mail is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .nonempty({ message: "Password is required" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(data: z.infer<typeof schema>) {
    alert(JSON.stringify(data));
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <MailIcon size={16} />
                      <span className="ml-1">E-mail</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Example: abc@memorix.io"
                        className="w-full focus-visible:ring-primary duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="flex items-center">
                      <LockIcon size={16} />
                      <span className="ml-1">Password</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full focus-visible:ring-primary duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className={clsx(
                  "w-full mt-4",
                  "bg-primary hover:bg-primary-light",
                  "text-white",
                  "focus:bg-primary-dark",
                  "transition-colors duration-300"
                )}
              >
                Log in
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-text-light mx-auto">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-primary">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
