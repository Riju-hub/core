let jsonRes='{"fact":"The ability of a cat to find its way home is called \u201cpsi-traveling.\u201d Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses.","length":216}'
let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);

console.log(JSON.stringify(validRes.fact));


