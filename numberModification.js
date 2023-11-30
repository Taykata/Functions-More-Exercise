function numberModification(num) {
    
    let sum = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    if (sum / numAsString.length >= 5) {
        console.log(num);
        return;
    }

    while (sum / numAsString.length < 5) {
        sum = 0;
        numAsString += 9;
        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }
    }

    console.log(numAsString);

}

numberModification(101);