DROP DATABASE IF EXISTS employee_trackDB;
CREATE database employee_trackDB;

USE employee_trackDB;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alex', 'Vandenesse', 1, 1),
('Hamb', 'Sandvich', 2, 1),
('Gertrude', 'Gutherie', 4, 1),
('Darth', 'Water', 3, 1);

INSERT INTO department (name)
VALUES  ('Marketing'),
		('Finances'),
		('Construction');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Legal_aid', 7900099, 1),
		('Body-guard', 130230, 2),
		('Rodent-wrangler', 2412, 3),
		('Refuse_engineer', 445009999, 1);


