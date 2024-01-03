//Q-1 তোমাকে নীচের লাইন গুলো যে ফরম্যাট এ আছে একইভাবে প্রিন্ট করতে হবে -

// “Recently I heard that you’ve achieved 95 % marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

// solution
// console.log(`Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.`)

//Q-2 তোমাকে দুইটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং তাদের যোগফল, বিয়োগফল, গুণফল এবং ভাগফল নীচে দেখানো ফরম্যাট এ দেখাতে হবে।


// For example:
// Inputs are 5 and 2
// Then you’ll give output as:
// 5 + 2 = 7
// 5 - 2 = 3
// 5 * 2 = 10
// 5 / 2 = 2.50

//solution
// const calculator = (num1, num2) => {
//     console.log(num1, '+', num2, "=", num1 + num2);
//     console.log(num1, '-', num2, "=", num1 - num2);
//     console.log(num1, '*', num2, "=", num1 * num2);
//     console.log(num1, '/', num2, "=", num1 / num2);
// }
// calculator(1, 2)

//Q-3 তোমাকে একটি অঋণাত্মক(০ বা এর থেকে বড়) সংখ্যা নিতে হবে এবং বলতে হবে সংখ্যাটি জোড়(even) নাকি বিজোড়(odd)।
// আরও বোঝার জন্য নীচে দেওয়া ইনপুট এবং আউটপুট গুলো খেয়াল করো।

// solution
// const oddEvenChecker = (num) => {
//     if (num % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log("odd");
//     }
// }
// oddEvenChecker(4)

//Q-4 তোমাকে একটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং বলতে হবে এটি ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শূণ্য(zero)।

// solution
// const numberChecker = (num) => {
//     if (num < 0) {
//         console.log('Negative');
//     } else if (num > 0) {
//         console.log('Positive');
//     } else {
//         console.log('Zero');
//     }
// }
// numberChecker(-9)

//Q-5 ধরো তোমার এক বন্ধু তোমাকে বলেছে সে একটি Gucci Bag কিনবে যদি তার কাছে ১০ হাজার টাকা বা এর বেশি থাকে। নাহলে যদি তার কাছে ৫ হাজার বা এর বেশি টাকা থাকে তাহলে সে Levis Bag কিনবে। আর নাহলে সে নিউ মার্কেট থেকে কিছু(Something) কিনে নিবে। সে তোমাকে আরও বললো যে, যদি সে Gucci Bag কিনতে পারে এবং তার কাছে যদি ২০ হাজার টাকা এর বেশি থাকে তাহলে সে আরও একটি Gucci Belt কিনবে।
// এখন ধরো তুমি জানো তোমার বন্ধুর কাছে কত টাকা আছে, তুমি কি বলতে পারবে সে কোন কোন জিনিস গুলো কিনবে ?

//solution-1

// const shopping = (amount) => {
//     if (amount > 20000) {
//         console.log("Gucci Bag & Gucci Belt");
//     } else if (amount >= 10000) {
//         console.log("Gucci Bag");
//     } else if (amount >= 5000) {
//         console.log("Levis Bag");
//     } else {
//         console.log("Something");
//     }
// }

// shopping(4000)

// Function to suggest purchases based on the amount of money
// function suggestPurchases(moneyAmount) {
//     switch (true) {
//         case moneyAmount > 20000:
//             console.log(`You can buy a Gucci Bag and a Gucci Belt.`);
//             break;
//         case moneyAmount >= 10000:
//             console.log(`You can buy a Gucci Bag.`);
//             break;
//         case moneyAmount >= 5000:
//             console.log(`You can buy a Levis Bag.`);
//             break;
//         default:
//             console.log(`You should buy something from the New Market.`);
//     }
// }

// // Example: Assume your friend has 15000 Taka
// const friendMoney = 4000;

// // Call the function with your friend's money
// suggestPurchases(friendMoney);
