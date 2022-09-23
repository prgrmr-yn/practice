SELECT first_name, last_name FROM patients;

-- SELECT * FROM doctors;

-- SELECT * FROM doctors WHERE age = 21;

-- SELECT * FROM doctors WHERE speciality = 'heart'

-- SELECT * FROM doctors
-- WHERE speciality LIKE '%surgian' AND first_name = 'Lisa';

-- SELECT * FROM patients ORDER BY ASC
-- SELECT * FROM patients ORDER BY DESC

-- SELECT COUNT(*) FROM doctors

-- SELECT COUNT(*) AS c, speciality
-- FROM doctors
-- GROUP BY speciality
-- ORDER BY c DESC

-- SELECT *
-- FROM inhabitants i
-- JOIN city c ON
-- WHERE city_id  = 2


-- SELECT c.date, p.first_name, p.last_name, d.first_name, d.last_name
-- FROM consultations c
-- JOIN patients p ON p.id = c.patient_id
-- JOIN doctors d ON d.id = c.doctor.id
-- WHERE c.date >= '2022-12-01'
-- AND c.date < '2023-01-01'
-- ORDER BY c.date ASC
