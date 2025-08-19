
function Student(name, age, grade) {
    this.name = name;
    this.age = age;


    let _grade = null;

    function isValidGrade(g) {
        return g === 'A' || g === 'F';
    }


    this.setGrade = function(newGrade) {
        if (isValidGrade(newGrade)) {
            _grade = newGrade;
        } else {
            console.log("Invalid grade! Only 'A' or 'F' allowed.");
        }
    };


    this.getGrade = function() {
        return _grade;
    };

    this.introduce = function() {
        if (_grade === null) {
            console.log("Invalid grade!");
        } else {
            console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`);
        }
    };

}

const student1 = new Student("anan", 22, "C");
student1.introduce(); 
student1.setGrade("A");
console.log(student1.getGrade()); 
student1.introduce();
student1.setGrade("B"); 