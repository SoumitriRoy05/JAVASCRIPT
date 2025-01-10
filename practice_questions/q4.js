// Write a program that takes a numeric score (marks) as input and assigns a grade based on predefined ranges. The program should then display the grade corresponding to the entered score.
// Grading Criteria:
// A: Marks between 80 and 100 (inclusive)
// B: Marks between 70 and 89 (inclusive)
// C: Marks between 60 and 69 (inclusive)
// D: Marks between 50 and 59 (inclusive)
// F: Marks below 50


let grade=70;
if(grade>=80 && grade<=100)
    {
        grade="A";
    }
    else if(grade >=70 && grade<=89)
        {
            grade="B";
        }
        else if(grade>=60 && grade<=69)
            {
                grade="C";
            }
            else if(grade>=50 && grade<=59)
                {
                    grade="D";
                }
                else
                {
                    grade="F";
                }
                console.log("According to marks obtained, grade is: ", grade);
