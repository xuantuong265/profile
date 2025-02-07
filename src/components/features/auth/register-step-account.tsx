import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import useStepRegisterAccount from "@/hooks/useStepRegisterAccount";
import { FormInputText } from "@/components/shared";

interface RegisterStepAccountProps {
  className?: string;
}

const RegisterStepAccount = ({
  className,
  ...props
}: RegisterStepAccountProps) => {
  const { form, submitForm } = useStepRegisterAccount();
  const { control } = form;

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Step register account</CardTitle>
          <CardDescription>
            Enter your email below to register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={(data) => submitForm(data)}>
              <div className="flex flex-col gap-6">
                <div>
                  <FormInputText
                    control={control}
                    name="email"
                    placeholder="Enter your email"
                    formLabel="Email"
                  />
                </div>

                <div>
                  <FormInputText
                    control={control}
                    name="password"
                    placeholder="Enter your password"
                    formLabel="Password"
                    type="password"
                  />
                </div>

                <div>
                  <FormInputText
                    control={control}
                    name="confirmPassword"
                    placeholder="Enter your confirm password"
                    formLabel="Confirm password"
                    type="password"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?
                <Link href="/login" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterStepAccount;
