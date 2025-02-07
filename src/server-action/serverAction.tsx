'use server';


export const saveAction =async (formData: FormData) => {


const response = await fetch("http://185.69.152.209/carsAPI/v1/cars",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
})

    console.log('Form data:', formData);
    const data = await response.json();
    console.log('Response from API:', data);
}

