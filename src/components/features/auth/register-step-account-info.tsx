import React from "react";

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
import FormTextArea from "@/components/shared/form-text-area";
import FormDatePicker from "@/components/shared/form-date-picker";
import FormFileUpload from "@/components/shared/form-file-upload";

const RegisterStepAccountInfos = () => {
  const { form, submitForm } = useStepRegisterAccount();
  const { control } = form;

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Step register account information
          </CardTitle>
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
                    name="name"
                    placeholder="Enter your name"
                    formLabel="Name"
                  />
                </div>

                <div>
                  <FormInputText
                    control={control}
                    name="address"
                    placeholder="Enter your address"
                    formLabel="Address"
                  />
                </div>

                <div>
                  <FormInputText
                    control={control}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    formLabel="Phone number"
                  />
                </div>

                <div>
                  <FormDatePicker
                    name="dateOfBirth"
                    control={control}
                    formLabel="Date Of Birth"
                  />
                </div>

                <div>
                  <FormTextArea
                    name="hobbies"
                    control={control}
                    formLabel="Hobbies"
                    placeholder="Enter your hobbies..."
                  />
                </div>

                <div>
                  <FormFileUpload
                    name="avatar"
                    control={control}
                    formLabel="Avatar"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterStepAccountInfos;
