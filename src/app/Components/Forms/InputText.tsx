import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FormValues = {
    name: string;
    label: string;
    type?: string;
    size?: "small" | "medium";
    fullWidth?: boolean;
};

export function InputField({
    name,
    label,
    type,
    size,
    fullWidth = false,
}: FormValues) {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    variant="outlined"
                    size={size}
                    fullWidth={fullWidth}
                    error={!!error?.message}
                    helperText={error?.message}
                />
            )}
        />
    );
}
