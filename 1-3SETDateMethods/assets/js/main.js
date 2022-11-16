let date1 = new Date();
date1 = new Date(2000);
console.log(date1);

date1.setMonth(1);
date1.setDate(24);
date1.setFullYear(2123)
console.log(date1);

date1.setMonth(2);
console.log(date1);

date1.setDate(3);
console.log(date1);

const date2 = new Date();
console.log(date2);
date2.setDate(date2.getDate() +30);
console.log(date2);

