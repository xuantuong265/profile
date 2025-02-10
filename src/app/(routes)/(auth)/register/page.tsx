"use client";

import { CircleCheckBig, Contact, UserCog } from "lucide-react";

import {
  RegisterStepAccount,
  RegisterStepAccountInfos,
  RegisterStepSuccess,
} from "@/components/features/auth";
import Stepper from "@/components/features/auth/steppers";
import useRegisterStore from "@/stores/use-register-store";
import { StepRegisterEnum } from "@/enums";

const RegisterPage = () => {
  const currentStep = useRegisterStore((state) => state.currentState);

  const steps = [
    { title: "Account", key: StepRegisterEnum.ACCOUNT, icon: <UserCog /> },
    {
      title: "Profile Information",
      key: StepRegisterEnum.ACCOUNT_INFO,
      icon: <Contact />,
    },
    {
      title: "Success",
      key: StepRegisterEnum.SUCCESS,
      icon: <CircleCheckBig />,
    },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case StepRegisterEnum.ACCOUNT_INFO:
        return <RegisterStepAccountInfos />;
      case StepRegisterEnum.SUCCESS:
        return <RegisterStepSuccess />;
      default:
        return <RegisterStepAccount />;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full pl-12">
        <Stepper current={currentStep} steps={steps} />
      </div>

      {renderStep()}
    </div>
  );
};

export default RegisterPage;
