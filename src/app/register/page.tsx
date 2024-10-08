import Link from "next/link";

import { UserAuthForm } from "@/components/user-auth-form";

export default function Page() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center px-4 space-y-6">
            <div className="flex flex-col space-y-2 text-center sm:w-[400px] w-full">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <div className="flex flex-col space-y-2 text-center sm:w-[300px] w-full">
                <UserAuthForm />
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
        </div>
    )
}