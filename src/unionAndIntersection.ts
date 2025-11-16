type Employe = {
  id: string;
  name: string;
  phoneNumber: number;
};

type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeWithManager = Employe & Manager;

const Hr: EmployeWithManager = {
  id: "3487483",
  name: "Tim david",
  phoneNumber: 9237897,
  designation: "HR",
  teamSize: 5,
};
