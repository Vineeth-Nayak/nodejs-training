function Uni(colleges, uniCode) {
  this.colleges = colleges;
  this.uniCode = uniCode;

  this.getCollegeList = function () {
    return this.colleges;
  };

  this.getUniversityCode = function () {
    return this.uniCode;
  };

  this.addNewCollege = function (collegeName) {
    this.colleges.push(collegeName);
  };
}

// Uni.prototype.getMarks(collegeName,marks,student){
//     return this.child
// }

function College(universityName, dept, parent) {
  //   this.management = management;
  this.dept = dept;
  this.parent = parent;
  this.universityName = universityName;
  this.studentMarks = [];

  this.getCollegeBranch = function () {
    return this.dept;
  };

  this.addNewBranch = function (branchName) {
    return this.dept.push(branchName);
  };

  this.setMarks = function (usn, name, marks) {
    this.studentMarks.push({
      usn: [usn],
      details: { name: [name], marks },
    });
  };

  this.getMarks = function (usn) {
    return this.studentMarks.filter((e) => e.usn == usn && e);
  };
}

function Student(name, usn, collegeName, branch, parent) {
  //   this.management = management;
  this.name = name;
  this.usn = usn;
  this.collegeName = collegeName;
  this.branch = branch;
  this.parent = parent;

  this.getStudentDetails = function () {
    return [this.name, this.usn, this.collegeName, this.branch];
  };
}

College.prototype.getUniversity = function () {
  return this.parent.getUniversityCode();
};

Student.prototype.getMarks = function () {
  return this.parent.getMarks(this.usn);
};

// !____________________________________________________________________________

let vtu = new Uni(["SMVITM", "Srinivas"], 2001);
console.log(vtu.getCollegeList());

let smvitm = new College("vtu", ["CSE", "ENC", "Mech", "CIVIL"], vtu);

let student1 = new Student("Vineeth", "101", "smvitm", "CSE", smvitm);
let student2 = new Student("Preetham", "102", "smvitm", "CSE", smvitm);

// console.log("\n", smvitm.getCollegeBranch());

// console.log("\n", smvitm.getUniversity());

smvitm.setMarks("101", "Vineeth", { math: 80, science: 100, english: 100 });
smvitm.setMarks("102", "Preetham", { math: 90, science: 100, english: 100 });
console.log(smvitm.getMarks(101), "\n");

console.log(student1.getMarks());
console.log(student2.getMarks()[0].details);
