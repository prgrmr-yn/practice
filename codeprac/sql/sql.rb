www.airbnb.com/flats
www.girhub.com/users/Mim1991
# Read all
SELECT * FROM flats

# Read one
SELECT * FROM flats
WHERE id = 52

SELECT * from users
WHERE username = 'Mim1991'

# Create
INSERT INTO doctors(name, age, speciality)
VALUES ('Jerry', 40, 'GP');

# update
UPDATE doctors SET specialty = 'Fake doc'
where name = 'Adam'

# Delete
DELETE from doctors
where id = 3
