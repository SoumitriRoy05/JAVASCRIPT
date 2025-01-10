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