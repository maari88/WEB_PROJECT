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

function createArray(size){
    const arr = [];

    for(let i=0; i < size; i++){
            arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

function findMaxElement(arr){
    let maxElement = null;

    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2 === 0 && (maxElement === null || arr[i] > maxElement)){
            maxElement = arr[i];
        }
    }
    return maxElement;
}

function findMinElement(arr){
    let minElement = arr[0];

    for (let i = 2; i < arr.length; i = i+2){
        if(arr[i] < minElement){
            minElement = arr[i];
        }
    }
    return minElement;
}

function swapElements(arr, maxElement, minElement){
    const maxIndex = arr.indexOf(maxElement);
    const minIndex = arr.indexOf(minElement);

    if(maxIndex !== -1 && minIndex !== -1 ){
        [arr[maxIndex],arr[minIndex]] = [arr[minIndex],arr[maxIndex]];
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}



const size = parseInt(prompt("Введіть кількість елементів масиву:"));
const array = createArray(size);
console.log("Вхідний масив", array);

const maxElement = findMaxElement(array);
const minElement = findMinElement(array);

console.log("Максимальний серед парних елементів:", maxElement);
console.log("Мінімальний серед елементів з парними індексами:", minElement);

const swappedArray = swapElements(array, maxElement, minElement);
console.log("Масив після заміни:", swappedArray);

const sortedArray = insertionSort([...swappedArray]);
console.log("Масив після сортування:", sortedArray);