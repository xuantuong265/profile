export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  address: string;
  phoneNumber: string;
  socialLinks: { [key: string]: string };
  hobbies: string;
  educations: string;
  dateOfBirth: string;
  gender: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
};

export type RegistrationData = Partial<User>;

export type StepType = {
  title: string;
  key: StepRegisterEnum;
  icon: React.ReactNode;
};
