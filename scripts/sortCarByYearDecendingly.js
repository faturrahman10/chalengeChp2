function sortCarByYearDescendingly(cars) {
    const result = [...cars];

    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j].year < result[j + 1].year) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    console.log(result);
    return result;
}
