import {ICar} from "@/models/ICar";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            {car.id} - {car.brand}
        </div>
    );
};