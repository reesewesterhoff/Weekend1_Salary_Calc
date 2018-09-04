# Salary Calculator Project
In this project I created an application that records employee salaries and adds salaries up to report monthly costs. 

## Technologies Used
- JavaScript
- jQuery - Selectors, append, and event handling
- CSS

## Description

This application has an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button collects the form information, stores the information to calculate monthly costs, appends information to the DOM and clears the input fields. Using the stored information, monthly costs are calculated and appended to the to DOM. If the total monthly cost exceeds $20,000, a red background color is added to the total monthly cost.

A delete button removes an employee from the DOM.

An `Employee` class stores the information about each new employee in an Array.

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 


