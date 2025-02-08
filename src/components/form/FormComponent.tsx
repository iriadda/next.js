import Form from "next/form";
import {saveAction} from "@/server-action/serverAction";

export const FormComponent = () => {
    return (
        <Form action={saveAction}>
            <input type="text" name={'brand'} placeholder={'Brand'}/>
            <input type="number" name={'price'} placeholder={'Price'} />
            <input type="number" name={'year'} placeholder={'Year'}/>
            <button>create</button>
        </Form>
    );
};