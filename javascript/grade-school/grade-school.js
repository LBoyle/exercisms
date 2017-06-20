var School = function() {
  this.grades = {};
  this.roster = () => {
    return this.grades;
  };
  this.grade = grade => {
    if(!this.grades[grade]) return [];
    return this.grades[grade];
  };
  this.add = (name, grade) => {
    if(!this.grades[grade]) this.grades[grade] = [];
    this.grades[grade].push(name);
    Object.keys(this.grades).forEach(key => {
      this.grades[key].sort();
    });
  };
};
module.exports = School;
