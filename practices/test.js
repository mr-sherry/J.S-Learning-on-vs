// Student Marks Array

const aliRaza = {
    name: "Ali Raza",
    rollno: 1,
    math: 87,
    english: 78,
    urdu: 56,
    islamiyat: 88,
    science: 96
}

const ahmedraza = {
    name: "Ahmed Raza",
    rollno: 2,
    math: 98,
    english: 97,
    urdu: 95,
    islamiyat: 99,
    science: 92,
}

console.log(`
    Student Name is ${aliRaza.name} 
    Rollno ${aliRaza.rollno}
    Obtained Marks In Subjects
    ${aliRaza.math} in math
    ${aliRaza.english} in english
    ${aliRaza.islamiyat} in islamiyat 
    ${aliRaza.urdu} in urdu
    ${aliRaza.science} in science
    Total Obatined Marks = ${aliRaza.english + aliRaza.islamiyat + aliRaza.math + aliRaza.science + aliRaza.urdu} 
    Total Marks = 500`);