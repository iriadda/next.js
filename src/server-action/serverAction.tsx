'use server';


import {postCar} from "@/services/api.services";

export const saveAction = async (formData: FormData) => {
    postCar(formData);
}

