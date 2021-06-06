function getOccurence(limit) {
  let series = [];
  for (let i = 0; i < limit; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      series.push(i);
    } else if (i % 3 == 0) {
      series.push(i);
    } else if (i % 5 == 0) {
      series.push(i);
    }
  }

  return series.reduce((a, b) => a + b);
}

console.log(getOccurence(10));




// function HackDev() {
//   let user = { name: "Abdul_Wasiu", status: "500l" };
//   if (user) {
//     console.log(`Happy Sign-Out ${user.name}, never back to ${user.status}`);
//   }
// }

// HackDev();
