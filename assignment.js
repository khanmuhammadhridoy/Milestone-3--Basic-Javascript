// https://github.com/khanmuhammadhridoy/Milestone-3--Basic-Javascript

// kilometerToMeter function
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        // converting kilometer to meter
        const meter = kilometer * 1000;
        return meter;
    } 
    else {
        console.log("Please give a positive value.");
    }
}

// budgetCalculator function
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        // calculating watch price
        let watchPrice = watch * 50;
        // calculating phone price
        let phonePrice = phone * 100;
        // calculating laptop price
        let laptopPrice = laptop * 500;
        // calculating total price of watch, phone, and laptop
        let totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    } 
    else {
        console.log("Please provide positive number for all product.");
    }

}

// hotelCost function
function hotelCost(days) {
    let cost = 0;
    if (days >= 0) {
        // 10 days cost
        if (days <= 10) {
            cost = days * 100;
        }
        // 20 days cost
        else if (days <= 20) {
            let firstPart = 10 * 100;
            let remaining = days - 10;
            let secondPart = remaining * 80;
            cost = firstPart + secondPart;
        }
        // over 20 days cost
        else {
            let firstPart = 10 * 100;
            let secondPart = 10 * 80;
            let remaining = days - 20;
            let thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }
        return cost;
    } 
    else {
        console.log("Please give a positive value.");
    }

}

// megaFriend function
function megaFriend(name) {
    let largeName = name[0];
    for (let i = 0; i < name.length; i++) {
        let element = name[i];
        // Getting the largest name
        if (element.length > largeName.length) {
            largeName = element;
        }
    }
    return largeName;
}