function Student(name, age, introduce) {
    this.name = name;
    this.age = age;
    let grade; 

    this.getGrade = function () {
        return grade;
    };

    this.setGrade = function (value) {
        if (value === "A" || value === "F") {
            grade = value;
        } else {
            console.log("Invalid grade Only 'A' or 'F' are allowed.");
        }
    };
}

 Student.prototype.introduce = function () {
        console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGradegrade}`);
    };

const student1 = new Student("tamara", 21, "A");
student1.introduce()
student1.setGrade("F"); 
console.log(student1.getGrade())
student1.setGrade('B')
