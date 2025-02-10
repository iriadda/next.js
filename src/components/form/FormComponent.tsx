'use client';
import Form from "next/form";
import {saveAction} from "@/server-action/serverAction";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/components/validators/validators";
import {ICar} from "@/models/ICar";

export const FormComponent = () => {
    const {register, formState:{errors}}=useForm<ICar>({mode:'all', resolver: joiResolver(carValidator)})
    return (
        <Form action={saveAction}>
            <input type="text"  placeholder={'Brand'} {...register('brand')} />
            <div>{errors.brand?.message}</div>
            <input type="number" placeholder={'Price'} {...register('price')} />
            <div>{errors.price?.message}</div>
            <input type="number"  placeholder={'Year'} {...register('year')}/>
            <div>{errors.year?.message}</div>
            <button>create</button>
        </Form>
    );
};