import {FC} from "react";

type Props = {
    params: { id: string }
};
const userPage:FC<Props> = async ({params}) => {
    const {id} = await params
    return (
        <>
            {id}
        userPage
        </>
    );
};
export default userPage;