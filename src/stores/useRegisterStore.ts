import { create } from "zustand";

import { RegistrationData } from "@/types/auth";
import { StepRegisterEnum } from "@/enums";

interface RegisterState {
  currentState: StepRegisterEnum;
  registrationData: RegistrationData;
  setCurrentState: (state: StepRegisterEnum) => void;
  setRegistrationData: (data: RegistrationData) => void;
  reset: () => void;
}

const useRegisterStore = create<RegisterState>((set) => ({
  currentState: StepRegisterEnum.ACCOUNT,
  registrationData: {},
  setCurrentState: (state: StepRegisterEnum) => set({ currentState: state }),
  setRegistrationData: (data: RegistrationData) =>
    set({ registrationData: data }),
  reset: () =>
    set(() => ({
      currentState: StepRegisterEnum.ACCOUNT,
      registrationData: {},
    })),
}));

export default useRegisterStore;
