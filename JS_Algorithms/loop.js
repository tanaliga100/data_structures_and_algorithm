// let books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//   { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
// ];
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title + " by " + books[i].author);
// }

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let products = [
//   { id: 1, name: "T-shirt", price: 20.0, category: "clothing" },
//   { id: 2, name: "Jeans", price: 50.0, category: "clothing" },
//   { id: 3, name: "Sneakers", price: 80.0, category: "shoes" },
//   { id: 4, name: "Headphones", price: 100.0, category: "electronics" },
//   { id: 5, name: "Backpack", price: 60.0, category: "accessories" },
// ];

// let category = "clothing";
// let totalCost = 0;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === category) {
//     totalCost += products[i].price;
//   }
// }

// console.log(
//   "The total cost of all " + category + " products is: $" + totalCost
// );

// let customers = [
//   { id: 1, name: "John Smith", email: "johnsmith@example.com" },
//   { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
//   { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
// ];

// let orders = [
//   { id: 1, customerId: 1, date: "2022-02-10", total: 50.0 },
//   { id: 2, customerId: 1, date: "2022-02-14", total: 25.0 },
//   { id: 3, customerId: 2, date: "2022-02-12", total: 100.0 },
//   { id: 4, customerId: 3, date: "2022-02-11", total: 75.0 },
//   { id: 5, customerId: 3, date: "2022-02-13", total: 20.0 },
// ];
// let reports = {};

// for (let i = 0; i < customers.length; i++) {
//   let cusId = customers[i].id;
//   let cusName = customers[i].name;
//   let ttlSales = 0;

//   for (let j = 0; j < orders.length; j++) {
//     if (orders[j].customerId === cusId) {
//       ttlSales += orders[j].total;
//     }
//   }
//   reports[cusName] = ttlSales;
// }
// console.log(reports);

var employees = [
  { id: 1, name: "John Smith", departmentId: 1 },
  { id: 2, name: "Jane Doe", departmentId: 2 },
  { id: 3, name: "Bob Johnson", departmentId: 2 },
  { id: 4, name: "Alice Lee", departmentId: 3 },
];

var departments = [
  { id: 1, name: "Sales" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Engineering" },
];

var projects = [
  { id: 1, name: "Project A", departmentId: 1, employees: [1, 2] },
  { id: 2, name: "Project B", departmentId: 2, employees: [2, 3] },
  { id: 3, name: "Project C", departmentId: 3, employees: [1, 4] },
  { id: 4, name: "Project D", departmentId: 3, employees: [3, 4] },
];

var report = {};

for (var i = 0; i < departments.length; i++) {
  var departmentName = departments[i].name;
  var employeeList = [];

  for (var j = 0; j < employees.length; j++) {
    if (employees[j].departmentId === departments[i].id) {
      var employeeName = employees[j].name;
      var projectList = [];

      for (var k = 0; k < projects.length; k++) {
        if (projects[k].departmentId === departments[i].id) {
          var employeeId = employees[j].id;
          var projectEmployees = projects[k].employees;
          var isEmployeeOnProject = false;

          for (var l = 0; l < projectEmployees.length; l++) {
            if (projectEmployees[l] === employeeId) {
              isEmployeeOnProject = true;
              break;
            }
          }

          if (isEmployeeOnProject) {
            projectList.push(projects[k].name);
          }
        }
      }

      employeeList.push({ name: employeeName, projects: projectList });
    }
  }

  report[departmentName] = employeeList;
}

console.log(report);
