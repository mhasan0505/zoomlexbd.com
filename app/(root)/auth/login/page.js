"use client";
import { Button } from "@/components/ui/button";
import zSchema from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const formSchema = zSchema.pick({
    email: true,
    password: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleFormSubmit  = (data) => {
    console.log("Form submitted with data:", data);
    // Handle form submission logic here, e.g., API call for login
  };
  return (
    <div>
      <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <div>
          <Image
            className="mx-auto mb-4"
            width={100}
            height={100}
            src="/zoomlex_logo.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Log in to your account
        </h2>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <input
            id="email"
            {...form.register("email")}
            className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="email"
            placeholder="Enter your email"
            required
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-xs">
              {form.formState.errors.email.message}
            </p>
          )}
          <input
            id="password"
            {...form.register("password")}
            className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="password"
            placeholder="Enter your password"
            required
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-xs">
              {form.formState.errors.password.message}
            </p>
          )}
          <div className="text-right py-4">
            <a className="text-blue-600 underline" href="#">
              Forgot Password
            </a>
          </div>
          <Button
            type="submit"
            className="w-full mb-3 bg-black py-2.5 rounded-full text-white"
          >
            Log in
          </Button>
        </form>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Signup
          </a>
        </p>

        <Link href="/auth/google" className="w-full">
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
          >
            <Image
              className="h-4 w-4"
              width={20}
              height={20}
              src="/Icons/googleicon.png"
              alt="googleFavicon"
            />
            Log in with Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
