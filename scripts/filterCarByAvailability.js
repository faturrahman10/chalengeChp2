function filterCarByAvailability(cars) {
    const result = [];

    cars.map((car) => {
        if (car.available == true) {
            result.push(car);
        }
    });

    console.log(result);
    return result;
}
