console.log('js');

$(document).ready(onReady);

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let employeeArray = [];


function onReady(){
    console.log('JQ');
    $('#addEmployeeButton').on('click', addEmployee);
    $('#employeeTable').on('click', '#deleteButton', deleteEmployee);
}

let totalExpenses = 0;


function addEmployee(){
    console.log('add employee click is working');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#ID').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    let employeeStoreToArray = new Employee(
        firstName,
        lastName,
        id,
        title,
        annualSalary
    )

    employeeArray.push(employeeStoreToArray);

    $('#employeeTable').append(`
        <tr>
            <td>` + firstName + `</td>
            <td>` + lastName + `</td>
            <td>` + id + `</td>
            <td>` + title + `</td>
            <td>` + annualSalary + `</td>
            <td><button id="deleteButton">Delete</button></td>
        </tr>
    `)

    $('input').val('');

    totalExpenses+=Number(annualSalary);

    $('#totalMonthlyExpenses').empty().append(
    '<h3>Total Monthly: $ ' + totalExpenses.toFixed(2)/12 + '</h3>');

    if(totalExpenses/12 > 20000){
        $('#totalMonthlyExpenses').css('background-color', 'red');
    }

    console.log(employeeArray);

}

function deleteEmployee(){
    console.log('delete button working');
    $(this).closest('tr').remove();
}


