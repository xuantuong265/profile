import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useRegisterStore from "@/stores/use-register-store";
import { StepRegisterEnum } from "@/enums";

const registerSchema = z.object({
  name: z.string().nonempty("Name is required"),
  address: z.string().nonempty("Address is required"),
  phoneNumber: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number"),
  dateOfBirth: z
    .date({ invalid_type_error: "Date of birth must be a valid date" })
    .refine((date) => date < new Date(), "Date of birth must be in the past"),
  hobbies: z.string(),
  avatar: z.array(z.instanceof(File)),
});

export type FormRegisterAccountType = z.infer<typeof registerSchema>;

const defaultValues: FormRegisterAccountType = {
  name: "",
  address: "",
  phoneNumber: "",
  dateOfBirth: new Date(),
  hobbies: "",
  avatar: [],
};

const useStepRegisterAccountInfos = () => {
  const { registrationData, setCurrentState, setRegistrationData } =
    useRegisterStore();

  const form = useForm<FormRegisterAccountType>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const submitForm = form.handleSubmit((data) => {
    // setRegistrationData({ ...registrationData, ...data });
    // setCurrentState(StepRegisterEnum.ACCOUNT_INFO);
    console.log(data);
  });

  return { form, Controller, submitForm };
};

export default useStepRegisterAccountInfos;
