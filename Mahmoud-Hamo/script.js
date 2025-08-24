function Student(name, age) {
  this.name = name;
  this.age = age;

  let grade = "";

  this.setGrade = function (userGrade) {
    if (userGrade === "A") grade = userGrade;
    else {
      grade = "F";
    }
  };

  this.getGrade = function () {
    return grade;
  };
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    }, and I’m in grade ${this.getGrade()}`
  );
};

const newStudent = new Student("Ali", 20);
newStudent.setGrade("D");

newStudent.introduce();
