/*2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/

function getGrade(marks){
    grade = '';

    switch(true){
        case (90 <= marks && marks <= 100):
            grade = 'S';    
        break;
        case (80 <= marks && marks <= 90):
            grade  = 'A';
        break;
        case (70 <= marks && marks <= 80):
            grade  = 'B';
        break;
        case (60 <= marks && marks <= 70):
            grade  = 'C';
        break;
        case (50 <= marks && marks <= 60):
            grade  = 'D';
        break;
        case (40 <= marks && marks <= 50):
            grade  = 'E';
        break;
        case (0 <= marks && marks <= 40):
            grade  = 'Student has failed';
        break;
        default:
            grade = 'Invalid Marks';
    }
    console.log("Grade : "+grade)
}

getGrade(90)
