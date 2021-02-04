const { Pool } = require('pg');

const pool = new Pool({
  user: 'alibas01',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const args = process.argv.slice(2);

// pool.query(`
// SELECT students.id, students.name, cohorts.name AS cohort_name
// FROM students JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name LIKE '%${args[0]}%'
// LIMIT ${args[1]};
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));
const cohortName = args[0];
const limit = args[1] || 5;
const values = [`%${cohortName}%`, limit]
pool.query(`
SELECT students.id, students.name, cohorts.name AS cohort_name
FROM students JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});