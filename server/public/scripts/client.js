$(document).ready(readyNow);

function readyNow() {
    $('#employeeForm').on('submit', submitClicked);
    $('#output').on('click', '.deleteBtn', deleteRow);
}

var averageSalary = 0;

// somewher in jQuery... submitClicked(someObject);
function submitClicked() {
    event.preventDefault();
    console.log($('#salary').val());
    averageSalary += parseInt($('#salary').val());

    // Add to the table body
    var $tr = $('<tr></tr>'); // Create a new table row
    $tr.append('<td>' + $('#firstName').val() + '</td>');
    $tr.append('<td>' + $('#lastName').val() + '</td>');
    $tr.append('<td>' + $('#empId').val() + '</td>');
    $tr.append('<td>' + $('#jobTitle').val() + '</td>');
    $tr.append('<td>' + $('#salary').val() + '</td>');
    $tr.append('<td><button class="deleteBtn">Delete</button></td>');
    $('#output').append($tr);

    $('input').val('');

    $('#avgMonthlySalary').text('$' + calculateAverageSalary());
}

function deleteRow() {
    // button -> td -> previous td -> text
    var salaryOfEmployee = parseInt($(this).parent().prev().text());
    // Subtract from total
    averageSalary -= salaryOfEmployee;
    // $(this) will be the button that was clicked on
    $(this).closest('tr').remove();
    // Could also be written as...
    // $(this).parent().parent().remove();

    // Update the dom
    $('#avgMonthlySalary').text('$' + calculateAverageSalary());
}

function calculateAverageSalary() {
    // Calculate the monthly average
    var avgMonthlySalary = averageSalary / 12;
    return avgMonthlySalary;
}