import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormCheckboxProps {
  control: any;
  name: string;
  formLabel?: string;
  className?: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  options: { label: string; value: string }[];
}

const FormCheckbox = ({
  control,
  name,
  className,
  formLabel,
  disabled = false,
}: FormCheckboxProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCheckbox;
