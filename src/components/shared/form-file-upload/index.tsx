"use client";

import { type Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FileUploader from "./file-upload";

type FormFileUploadProps = {
  control: Control<any>;
  name: string;
  formLabel?: string;
  accept?: Record<string, string[]>;
};

const FormFileUpload = ({ control, name, formLabel }: FormFileUploadProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <div className="space-y-6">
            <FormItem className="w-full">
              {formLabel && <FormLabel>{formLabel}</FormLabel>}
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFileCount={4}
                  maxSize={4 * 1024 * 1024}
                  // progresses={progresses}
                  // pass the onUpload function here for direct upload
                  // disabled={isUploading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default FormFileUpload;
