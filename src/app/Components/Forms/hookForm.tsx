import {
    useForm,
    FormProvider,
    FieldValues,
    SubmitHandler,
} from "react-hook-form";

type IFormResolver = {
    resolver?: any;
    defaultValues?: Record<string, any>;
};

export type IFormProps = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
} & IFormResolver;

export const HookForm = ({
    children,
    onSubmit,
    resolver,
    defaultValues,
}: IFormProps) => {
    const formConfig: IFormResolver = {};

    if (resolver) {
        formConfig["resolver"] = resolver;
    }
    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
    }

    const methods = useForm(formConfig);
    const { handleSubmit, reset } = methods;

    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)}>{children}</form>
        </FormProvider>
    );
};
