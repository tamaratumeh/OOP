// Task 1
// Link of the Todo app Repo with the needed updates "https://github.com/ReBestX/todo-app"

// Task 2
function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  let _grade;

  
  function validateGrade(value) {
    if (value === "A" || value === "F") {
      _grade = value;
    } else {
      console.error("Invalid grade! Grade must be 'A' or 'F'.");
      _grade = "F";
    }
  }

  validateGrade(grade);

  this.getGrade = function () {
    return _grade;
  };

  this.setGrade = function (newGrade) {
    validateGrade(newGrade);
  };

  this.introduce = function () {
    console.log(
      `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${_grade}.`
    );
  };
}
