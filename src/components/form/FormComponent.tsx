import Form from "next/form";
import {saveAction} from "@/server-action/serverAction";

export const FormComponent = () => {
    return (
        <Form action={saveAction}>
            <input type="text" name={'Brand'} placeholder={'Brand'}/>
            <input type="number" name={'Price'} placeholder={'Price'} />
            <input type="number" name={'Year'} placeholder={'Year'}/>
            <button>create</button>
        </Form>
    );
};