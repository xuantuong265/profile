import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { REGEX_EMAIL } from "@/constants";
import useRegisterStore from "@/stores/useRegisterStore";
import { StepRegisterEnum } from "@/enums";

const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .regex(REGEX_EMAIL, "Invalid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormRegisterAccountType = z.infer<typeof registerSchema>;

const useStepRegisterAccount = () => {
  const { registrationData, setCurrentState, setRegistrationData } =
    useRegisterStore();

  const form = useForm<FormRegisterAccountType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submitForm = form.handleSubmit((data) => {
    setRegistrationData({ ...registrationData, ...data });
    setCurrentState(StepRegisterEnum.ACCOUNT_INFO);
  });

  return {
    form,
    submitForm,
  };
};

export default useStepRegisterAccount;
