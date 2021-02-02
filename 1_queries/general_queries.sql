SELECT count(id)
FROM students 
WHERE cohort_id IN (1,2,3);

SELECT name, id, cohort_id
FROM students
WHERE email IS NULL OR phone IS NULL;


SELECT id, name, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail%' AND phone IS NULL;


SELECT name, id, cohort_id
FROM students
WHERE end_date IS NULL
ORDER BY cohort_id;

SELECT name, email, phone
FROM students
WHERE end_date IS NOT NULL
AND github IS NULL;


SELECT students.name as student_name, 
students.start_date as student_start_date, 
cohorts.name as cohort_name, 
cohorts.start_date as cohort_stat_date 
from students 
join cohorts on cohorts.id = cohort_id 
where students.start_date < cohorts.start_date;