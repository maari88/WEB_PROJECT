const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function makeTransaction(quantity, pricePerDroid){
    const totalPrice = quantity * pricePerDroid;

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5,2000));

function checkForSpam(message){
    const lowerCaseMessage = message.toLowerCase();

    return lowerCaseMessage.includes('spam')||lowerCaseMessage.includes('sale');
}

console.log(checkForSpam('Hello World!'));
console.log(checkForSpam('Check our SaLE'));
console.log(checkForSpam('it is nor spam'));
console.log(checkForSpam('SPAMMMMMMM'));

function filterArray(numbers, value){
    const filteredNumbers = [];

    for(let i=0; i < numbers.length; i++){
        if(numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
        }
    }

    return filteredNumbers;
}

console.log(filterArray([1,3,5,7,9], 6));
console.log(filterArray([200,5000,34,23409,3], 3367890));
console.log(filterArray([50.5,60,34,99], 50));