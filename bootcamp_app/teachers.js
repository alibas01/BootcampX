const { Pool } = require('pg');

const pool = new Pool({
  user: 'alibas01',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohort = process.argv[2];
pool.query(`
SELECT DISTINCT 
teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers 
ON teachers.id = teacher_id
JOIN students
ON students.id = student_id
JOIN cohorts
ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1;
`, [`%${cohort}%`])
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}:${teacher.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));