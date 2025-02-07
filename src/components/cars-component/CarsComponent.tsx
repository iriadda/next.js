import {getAllCars} from "@/services/api.services";
import {CarComponent} from "@/components/car-component/CarComponent";

export const CarsComponent = async () => {
    const cars = await getAllCars()
    return (
        <div>
            {cars.map((car) => <CarComponent key={car.id} car={car} />)}
        </div>
    );
};