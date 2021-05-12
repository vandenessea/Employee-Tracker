DROP DATABASE IF EXISTS employee_trackDB;
CREATE database employee_trackDB;

USE employee_trackDB;

CREATE TABLE employee (
    id PRIMARY KEY
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT
    manager_id INT

);

CREATE TABLE department (
    id PRIMARY KEY
    name VARCHAR(30)
    role
);

CREATE TABLE roles (
    id PRIMARY KEY



);


SELECT * FROM employee;
select * from department;
select * from roles;




















