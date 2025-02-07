import React from "react";
import { cn } from "@/lib/utils";
import { StepType } from "@/types/auth";
import { StepRegisterEnum } from "@/enums";
import { Typography } from "@/components/shared";

type StepStatus = "wait" | "process" | "finish";

interface StepperProps {
  current: StepRegisterEnum;
  steps: StepType[];
  className?: string;
  stepClassName?: string;
  lineClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
}

const Stepper: React.FC<StepperProps> = ({
  current,
  steps,
  className = "",
  stepClassName = "",
  lineClassName = "",
  iconClassName = "",
  titleClassName = "",
}) => {
  const currentStepIndex = steps.findIndex((step) => step.key === current);

  const getStatus = (index: number, currentIndex: number): StepStatus => {
    if (index < currentIndex) return "finish";
    if (index === currentIndex) return "process";

    return "wait";
  };

  return (
    <ol
      className={cn(
        "flex items-center w-full text-gray-900 font-medium text-xs sm:text-base",
        className
      )}
    >
      {steps.map((step, index) => {
        const status = getStatus(index, currentStepIndex);
        const isLast = index === steps.length - 1;

        return (
          <li
            key={index}
            className={cn(
              "flex w-full relative",
              {
                "text-indigo-600": status === "process",
                "text-gray-900": status !== "process",
              },
              stepClassName
            )}
          >
            <div className="block whitespace-nowrap z-10">
              <Typography variant="span"
                className={cn(
                  "w-6 h-6 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10",
                  {
                    "bg-indigo-600 border-2 border-transparent text-white":
                      status === "process",
                    "bg-indigo-50 border-2 border-indigo-600 text-indigo-600":
                      status === "finish",
                    "bg-gray-50 border-2 border-gray-200": status === "wait",
                  },
                  iconClassName
                )}
              >
                {step.icon}
              </Typography>
            </div>

            {!isLast && (
              <div
                className={cn(
                  "absolute w-full h-0.5 lg:top-5 top-3 left-4",
                  {
                    "bg-indigo-600": status === "finish",
                    "bg-gray-200": status !== "finish",
                  },
                  lineClassName
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
