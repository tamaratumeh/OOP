function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  let gra = grade;
  if (gra !== "A" && gra !== "F") {
    gra = "F";
  }
  this.getGrade = function () {
    return gra;
  };
  this.setGrade = function (newGrade) {
    if (newGrade == "A" || newGrade == "F") {
      gra = newGrade;
    } else {
      console.log("the grade should be only A or F");
    }
  };
}
Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this.getGrade()}.`
  );
};
const student = new Student("Mousa", 20, "A");
student.introduce();
console.log(student.getGrade());
student.setGrade("F");
student.introduce();
student.setGrade("B");