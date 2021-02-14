// https://github.com/khanmuhammadhridoy/Milestone-3--Basic-Javascript

// kilometerToMeter function
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        // converting kilometer to meter
        var meter = kilometer * 1000;
        return meter;
    } else {

        return "Please give a positive value.";

        // console.log("Please give a positive value.");
    }
    return meter;
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
    } else {
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
    } else {
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

document.getElementById("output").innerHTML =
    `<h3>kilometerToMeter = <span class = blue>${(kilometerToMeter(10))}</span></h3>
    <h3>kilometerToMeter with negative value = <span class = blue>${(kilometerToMeter(-10))}</span></h3>
    <h3>budgetCalculator = <span class = blue>${(budgetCalculator(1, 1, 1))}</span></h3>
    <h3>budgetCalculator with negative value = <span class = blue>${(budgetCalculator(1, -1, 1))}</span></h3>
    <h3>hotelCost 10 days = <span class = blue>${(hotelCost(10))}</span></h3>
    <h3>hotelCost 20 days = <span class = blue>${(hotelCost(20))}</span></h3>
    <h3>hotelCost more than 20 days (30 days) = <span class = blue>${(hotelCost(30))}</span></h3>
    <h3>hotelCost with negative value = <span class = blue>${(hotelCost(-10))}</span></h3>
    <h3>megaFriend = <span class = blue>${megaFriend(['ljhfhh', 'hakjfhkjhafjh', 'jhhafhlh'])}</span></h3>
    <h3 class = red>For More Info Use Console log</h3>
    <div>
        <h4 class = teal>Console log Call function </h4 class = Baby blue'>
        <ul class="crimson">
            <li>console.log <span class = darkviolet>(kilometerToMeter(10))</span></li>
            <li>console.log <span class = darkviolet>(kilometerToMeter(-10))</span></li>
            <li>console.log <span class = darkviolet>(budgetCalculator(1, 1, 1))</span></li>
            <li>console.log <span class = darkviolet>(budgetCalculator(1, -1, 1))</span></li>
            <li>console.log <span class = darkviolet>(hotelCost(10))</span></li>
            <li>console.log <span class = darkviolet>(hotelCost(20))</span></li>
            <li>console.log <span class = darkviolet>(hotelCost(30))</span></li>
            <li>console.log <span class = darkviolet>(hotelCost(-10))</span></li>
            <li>console.log <span class = darkviolet>(megaFriend(['ljhfhh', 'hakjfhkjhafjh', 'jhhafhlh']))</span></li>
        </ul>
    </div>
    `
    
console.log(kilometerToMeter(10));
console.log(kilometerToMeter(-10));
console.log(budgetCalculator(1, 1, 1));
console.log(budgetCalculator(1, -1, 1));
console.log(hotelCost(10));
console.log(hotelCost(20));
console.log(hotelCost(30));
console.log(hotelCost(-10));
console.log(megaFriend(['ljhfhh', 'hakjfhkjhafjh', 'jhhafhlh']))