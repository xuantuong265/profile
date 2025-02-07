"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Control } from "react-hook-form";

import Typography from "../typography";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormFileUploadProps = {
  control: Control<any>;
  name: string;
  formLabel?: string;
  accept?: Record<string, string[]>;
};

const FormFileUpload = ({
  control,
  name,
  formLabel = "Drag & drop file here, or click to select",
  accept = { "image/*": [] },
}: FormFileUploadProps) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        const onDrop = useCallback(
          (acceptedFiles: File[]) => {
            const file = acceptedFiles[0];
            field.onChange(file);
          },
          [field]
        );

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          accept,
          multiple: false,
        });

        return (
          <FormItem>
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            <FormControl>
              <div className="space-y-4">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
                    ${isDragActive
                      ? "border-primary bg-primary/10"
                      : "border-muted-foreground/50"
                    }`}
                >
                  <Input {...getInputProps()} />
                  <Typography className="text-muted-foreground">
                    {formLabel}
                  </Typography>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Browse Files
                  </Button>
                </div>

                {field.value?.name && (
                  <div className="flex items-center justify-between p-2 border rounded-lg">
                    <Typography variant="span" className="text-sm">
                      {field.value.name}
                    </Typography>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => field.onChange(undefined)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormFileUpload;
