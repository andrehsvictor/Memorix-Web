"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
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

const schema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .nonempty({ message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid e-mail address" })
      .nonempty({ message: "E-mail is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function handleSubmit(data: z.infer<typeof schema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <Card className="w-[90vw] max-w-[400px] mx-auto mt-8">
        <CardHeader>
          <Logo size={30} variant="blue" className="mx-auto" />
          <p className="text-center text-text-light">
            Create your Memorix account
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <UserIcon size={16} />
                      <span className="ml-1">Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full focus-visible:ring-primary duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-4">
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
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="flex items-center">
                      <LockIcon size={16} />
                      <span className="ml-1">Confirm Password</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        className="w-full focus-visible:ring-primary duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-4 bg-primary hover:bg-primary-light text-white focus:bg-primary-dark transition-colors duration-300">
                Sign up
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-text-light mx-auto">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}