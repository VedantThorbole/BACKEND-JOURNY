function GetGrades(marks) {
     return (typeof marks !== "number" || marks < 0 || marks > 100) ? "Invalid Marks"
          : marks >= 90 ? "A"
               : marks >= 80 ? "B"
                    : marks >= 70 ? "C"
                         : marks >= 60 ? "D"
                              : marks >= 40 ? "Just pass"
                                   : "Fail";
}

console.log(GetGrades(-2));
