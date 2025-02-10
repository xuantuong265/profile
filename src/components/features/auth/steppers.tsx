import React from "react";
import { cn } from "@/lib/utils";
import { type StepType } from "@/types/auth";
import { type StepRegisterEnum } from "@/enums";
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

const Stepper = ({
  current,
  steps,
  className = "",
  stepClassName = "",
  lineClassName = "",
  iconClassName = "",
}: StepperProps) => {
  const currentStepIndex = steps.findIndex((step) => step.key === current);

  const getStatus = (index: number, currentIndex: number): StepStatus => {
    if (index < currentIndex) return "finish";
    if (index === currentIndex) return "process";

    return "wait";
  };

  return (
    <ol
      className={cn(
        "flex w-full items-center text-xs font-medium text-gray-900 sm:text-base",
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
              "relative flex w-full",
              {
                "text-indigo-600": status === "process",
                "text-gray-900": status !== "process",
              },
              stepClassName
            )}
          >
            <div className="z-10 block whitespace-nowrap">
              <Typography
                variant="span"
                className={cn(
                  "mx-auto mb-3 flex size-6 items-center justify-center rounded-full text-sm lg:size-10",
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
                  "absolute left-4 top-3 h-0.5 w-full lg:top-5",
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
