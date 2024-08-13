import { FC } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { FormData,LoginSchema } from "./Types";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>();

    const onSubmit = async (data:FormData)=>{
        console.log("Success",data)
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2.5 p-2.5 w-1/3">
                    <h1>Staff Register</h1>
                    <FormField type="url" placeholder="URL" required name="url" register={register} error={errors.url} />
                    <FormField type="email" placeholder="email" required name="email" register={register} error={errors.email} />
                    <FormField type="exp" placeholder="Exp year(s)" required name="exp" valueAsNumber register={register} error={errors.exp} />
                    <FormField type="pass" placeholder="pass" required name="pass" register={register} error={errors.pass} />
                    <FormField type="confirmpass" placeholder="Confirm Pass" required name="confirmPass" register={register} error={errors.confirmPass} />

                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </>
    );
};

export default Form;
