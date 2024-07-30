const cases = [
  ['a', 'b', 'c'],    // cases[0]
  ['d', 'e', 'f'],    // cases[1]
  ['g', 'h', 'i']     // cases[2]
];

const t0 = 1;
const t1 = 0;

function stitch(item) {
  console.log(item);
}

cases[t0 | t1 << 1].forEach(stitch);
