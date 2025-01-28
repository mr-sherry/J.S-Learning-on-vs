let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



// Write a program using a switch statement that takes the user's choice (an integer between 1 and 4) and outputs the selected item and its price.

// If the user enters a number outside the range (e.g., 5 or -1), the program should display:
// "Invalid choice. Please select a valid option."
// Bonus: Add input validation using an array of valid choices ([1, 2, 3, 4]) to ensure only valid options are processed.

// Example Outputs:

// If the user selects 1, the output should be:
// "You selected Coffee. That will be $2."
// If the user selects 5, the output should be:
// "Invalid choice. Please select a valid option."




let input = 5;
let correctInput = [1, 2, 3, 4];
let message;

if (correctInput.includes(input)){
    switch (input) {
        case 1:
            message = "You selected Coffee. That will be $2.";
            break;
        case 2:
            message = "You selected Tea. That will be $1.50.";
            break;
        case 3:
            message = "You selected Juice. That will be $3.";
            break;
        case 4:
            message = "You selected Water. That will be $1.";
            break;
    }
}
else {
    message = "Invalid choice. Please select a valid option.";
}
// console.log(message);


let grade = 77;

switch (grade) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade >= 70:
        console.log("C");
        break;
    case grade >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}