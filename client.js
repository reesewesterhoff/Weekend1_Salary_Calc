console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#addEmployeeButton').on('click', addEmployee)
    
}

function addEmployee(){
    console.log('add employee is working');
    
}