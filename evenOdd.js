/*
২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/

function evenOdd(number) {
    // check the number is even
    if (number % 2 === 0) {
        return true;
    }
    // number is not even
    return false;
}

// function invoke for checking
console.log(evenOdd(2));
console.log(evenOdd(3));