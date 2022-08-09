/*
৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

—---------------------

৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
*/

// hour to minute conversion function
function hourToMinute(hour) {
    return hour * 60;
}

// hour to second conversion function
function hourToSecond(hour) {
    return hour * 60 * 60;
}

// Invoke both function
console.log(hourToMinute(4));
console.log(hourToSecond(4));