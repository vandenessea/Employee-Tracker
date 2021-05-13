USE employee_trackDB;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alex', 'Vandenesse', 1, 1),
('Hamb', 'Sandwich', 2, 1),
('Gertrude', 'Gutherie', 4, 1),
('Girth', 'Brooks', 3, 1);

INSERT INTO department (name)
VALUES  ('Marketing'),
		('Finances'),
		('Construction');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Manager', 7900099, 1),
		('Salesman', 130230, 2),
		('Mathmatician', 2412, 3),
		('Refuse_engineer', 445009999, 1);

