console.log('js');

$(document).ready(onReady);

// class Employee {
//     constructor(firstName, lastName, id, title, annualSalary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.id = id;
//         this.title = title;
//         this.annualSalary = annualSalary;
//     }
// }


function onReady(){
    console.log('JQ');
    $('#addEmployeeButton').on('click', addEmployee)
    
}

let salaryArray = [];
const reducer = accumulator + 

function addEmployee(){
    console.log('add employee click is working');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#ID').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    $('#employeeTable').append(`
        <tr>
            <td>` + firstName + `</td>
            <td>` + lastName + `</td>
            <td>` + id + `</td>
            <td>` + title + `</td>
            <td id="salaryInput">` + annualSalary + `</td>
        </tr>
    `)

    $('input').val('');

    salaryArray.push((Number(annualSalary)));
    console.log(salaryArray);
    
}