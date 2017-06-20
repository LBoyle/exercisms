const dict = [
  {score: 1, vals: 'AEIOULNRST'},
  {score: 2, vals: 'DG'},
  {score: 3, vals: 'BCMP'},
  {score: 4, vals: 'FHVWY'},
  {score: 5, vals: 'K'},
  {score: 8, vals: 'JX'},
  {score: 10, vals: 'QZ'}
];
function score(w) {
  if(!w) return 0;
  let counter = 0;
  w.split('').forEach(l => {
    dict.forEach(record => {
      if(record.vals.includes(l.toUpperCase())) counter += record.score;
    });
  });
  return counter;
}
module.exports = score;
