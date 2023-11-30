function carWash(input) {

    let value = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (index <= input.length) {
        if (command === 'soap') {
            value += 10;
        } else if (command === 'water') {
            value *= 1.20;
        } else if (command === 'vacuum cleaner') {
            value *= 1.25;
        } else if (command === 'mud') {
            value *= 0.90;
        }

        command = input[index];
        index++;

    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);