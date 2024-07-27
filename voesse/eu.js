const next = ['a', 'b', 'c'];
const scores = [ ...next ];

console.log(scores); // Output: ['a', 'b', 'c']

// Modifying scores will not affect next
scores.push('d');
console.log(next);    // Output: ['a', 'b', 'c']
console.log(scores);  // Output: ['a', 'b', 'c', 'd']
