import {FC} from "react";

type props ={
    params:{id:number};
}

const commentPage:FC<props> = async ({params}) => {
    const {id} = await params
    return (
        <>
            {id}
        commentPage
        </>
    );
};
export default commentPage;