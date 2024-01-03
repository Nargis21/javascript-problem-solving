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
const calculator = (num1, num2) => {
    console.log(num1, '+', num2, "=", num1 + num2);
    console.log(num1, '-', num2, "=", num1 - num2);
    console.log(num1, '*', num2, "=", num1 * num2);
    console.log(num1, '/', num2, "=", num1 / num2);
}
calculator(1, 2)