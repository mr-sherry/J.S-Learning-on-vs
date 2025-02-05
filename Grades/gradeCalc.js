// Sure! Here's a question for you to solve using the topics you mentioned:

// **Question:**  
// Write a JavaScript program that takes a student's name, their marks in 5 subjects (stored in an array), and calculates the total and average marks. Then, use an `if-else` statement to determine the grade based on the following criteria:  

// - **90 and above:** Grade A  
// - **80 - 89:** Grade B  
// - **70 - 79:** Grade C  
// - **60 - 69:** Grade D  
// - **Below 60:** Grade F  

// Use a function to perform the calculations, and store the student's details in an object. Also, use a `switch` statement to print a remark based on the grade.  

// Give it a try! Let me know if you need any hints. 😊

let students = [
    { rollNo: 801, name: "Ahmed Khan", fatherName: "Muhammad Khan", marks: [1, 1, 1, 1, 1] },
    { rollNo: 802, name: "Bilal Hussain", fatherName: "Zafar Hussain", marks: [90, 82, 95, 89, 91] },
    { rollNo: 803, name: "Usman Ali", fatherName: "Tariq Ali", marks: [75, 80, 85, 70, 78] },
    { rollNo: 804, name: "Hamza Raza", fatherName: "Yasir Raza", marks: [60, 65, 70, 55, 68] },
    { rollNo: 805, name: "Faisal Ahmed", fatherName: "Salman Ahmed", marks: [95, 98, 97, 96, 99] },
    { rollNo: 806, name: "Tariq Javed", fatherName: "Nadeem Javed", marks: [88, 85, 83, 89, 90] },
    { rollNo: 807, name: "Zain Abbas", fatherName: "Imran Abbas", marks: [72, 74, 79, 81, 78] },
    { rollNo: 808, name: "Adeel Shah", fatherName: "Kamran Shah", marks: [55, 60, 58, 62, 59] },
    { rollNo: 809, name: "Rashid Karim", fatherName: "Waqar Karim", marks: [91, 89, 92, 94, 90] },
    { rollNo: 810, name: "Noman Iqbal", fatherName: "Shahid Iqbal", marks: [67, 70, 72, 68, 66] },
    { rollNo: 811, name: "Yasir Mehmood", fatherName: "Asif Mehmood", marks: [83, 81, 85, 87, 82] },
    { rollNo: 812, name: "Shahzaib Anwar", fatherName: "Farooq Anwar", marks: [77, 79, 75, 80, 78] },
    { rollNo: 813, name: "Hassan Rafiq", fatherName: "Sajid Rafiq", marks: [96, 94, 97, 95, 98] },
    { rollNo: 814, name: "Kamran Yousuf", fatherName: "Nasir Yousuf", marks: [58, 60, 55, 62, 57] },
    { rollNo: 815, name: "Muneeb Farhan", fatherName: "Tanveer Farhan", marks: [89, 86, 88, 91, 87] },
    { rollNo: 816, name: "Zubair Haider", fatherName: "Waseem Haider", marks: [73, 76, 75, 78, 77] },
    { rollNo: 817, name: "Ibrahim Salman", fatherName: "Adnan Salman", marks: [92, 95, 94, 93, 96] },
    { rollNo: 818, name: "Sohail Junaid", fatherName: "Khalid Junaid", marks: [64, 66, 68, 63, 65] },
    { rollNo: 819, name: "Farhan Saeed", fatherName: "Azhar Saeed", marks: [79, 81, 80, 78, 77] },
    { rollNo: 820, name: "Ali Raza", fatherName: "Hassan Raza", marks: [85, 87, 89, 84, 86] }
];

let eRoll = 802;


let funn = (obj) => {
    if (eRoll === obj.rollNo) {
        console.log(`Student Name:`, obj.name, `and Father Name:`, obj.fatherName);
        console.log(`Roll No:`, obj.rollNo);
    }
}
students.forEach(funn);



let obMarks = 0;
let totalMarks = 500;
let funn2 = (obj) => {
    if (eRoll === obj.rollNo) {
        for (let mark of obj.marks) {
            obMarks = obMarks + mark;
        }
        console.log(`Obtained Marks:`, obMarks);
        console.log(`Total Marks:`, totalMarks);
    }
}
students.forEach(funn2)



let percentage = 0;
if (obMarks > 0) {
    percentage = 100 / totalMarks * obMarks
    console.log(`Percentage:`, percentage);
}
else {
    console.log('Roll No Not Matched');
}



switch (true) {
    case percentage > 90:
        console.log(`Passed With Grade A+`);
        let messages = [
            "Excellent! You have achieved an A+ grade. Keep up the outstanding performance!",
            "Brilliant work! Your dedication and hard work have earned you an A+. Keep shining!",
            "Exceptional! Your A+ grade reflects your commitment to excellence. Well done!"
        ];
        let randomIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[randomIndex]);
        break;

    case percentage > 80:
        console.log(`Passed With Grade A`);
        let messages1 = [
            "Great job! You have secured an A grade. Keep aiming higher!",
            "Well done! Your hard work has paid off with an A grade. Keep pushing forward!",
            "Impressive performance! You’re just a step away from perfection. Keep going!"
        ];
        let randomIndex1 = Math.floor(Math.random() * messages1.length);
        console.log(messages1[randomIndex1]);
        break;

    case percentage > 70:
        console.log(`Passed With Grade B`);
        let messages2 = [
            "Good effort! You got a B grade. A little more effort and you’ll reach the top!",
            "Nice work! Your B grade shows your potential. Keep striving for excellence!",
            "You did well! A B grade is a solid achievement. Keep improving!"
        ];
        let randomIndex2 = Math.floor(Math.random() * messages2.length);
        console.log(messages2[randomIndex2]);
        break;

    case percentage > 60:
        console.log(`Passed With Grade c`);
        let messages3 = [
            "Fair performance! You got a C grade. Focus on your weak areas and improve!",
            "Not bad! A C grade means you have potential. Work harder next time!",
            "You’re getting there! Put in more effort, and you can achieve even better results!"
        ];
        let randomIndex3 = Math.floor(Math.random() * messages3.length);
        console.log(messages3[randomIndex3]);
        break;

    default:
        console.log(`Failed`);
        let messages4 = [
            "Don’t lose hope! Failure is just a stepping stone to success. Keep working hard!",
            "It’s okay to fail, but it’s not okay to give up. Learn from your mistakes and try again!",
            "This result doesn’t define you. Put in more effort next time, and you’ll succeed!"
        ];
        let randomIndex4 = Math.floor(Math.random() * messages4.length);
        console.log(messages4[randomIndex4]);
        break;
}









