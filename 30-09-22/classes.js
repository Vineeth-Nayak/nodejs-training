class Uni {
  constructor(colleges) {
    // this.uniName = uniName;
    this.colleges = colleges;
  }

  getCollegeList() {
    return this.colleges;
  }

  addNewCollege(collegeName) {
    this.colleges.push(collegeName);
  }
}

let vtu = new Uni(["SMVITM", "abc 2"]);
let preetham = new Uni(["Sandesh", "prasad"]);

vtu.getCollegeList().map((e) => console.log(e));
preetham.getCollegeList().map((e) => console.log(e));

console.log("\n");

preetham.addNewCollege("mumukh");
preetham.getCollegeList().map((e) => console.log(e));
