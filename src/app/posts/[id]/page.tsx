import {FC} from "react";

type props = {
    params: { id: string };
}

const postPage:FC<props> = async ({params}) => {
    const {id}=await params
    return (
        <>
            {id}
        postPage
        </>
    );
};
export default postPage;