
window.addEventListener('load', loadUI);
function loadUI() {

    //Enable tooltip - Method 2
    // $('[data-bs-toggle="tooltip"]').tooltip();

    //Enable tooltip - Method 1
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //     return new bootstrap.Tooltip(tooltipTriggerEl)
    // })



    // employees = [{
    //     id: 1, regno: "EMP 001", fullname: "Nethmi Udara", gender: "Female", nic: "917851268v", mobile: "0789654123",
    //     dob: "1995-02-05", image: "assets/images/bubble.jpg", designation_id: { id: 1, name: "Manager", abc: { id: 1, name: "aaaaa" } }, status_id: { id: 1, status: "Working" }, civilStatus_id: { id: 1, status: "Married" }
    // },
    //     { id: 2, regno: "EMP 002", fullname: "Kamal Alvis", gender: "Male", nic: "955896547v", mobile: "0758965456", dob: "1992-10-22", image: null, designation_id: { id: 2, name: "Owner", abc: { id: 2, name: "bbbbb" } }, status_id: { id: 2, status: "Resign" }, civilStatus_id: { id: 2, status: "Single" } },
    //     { id: 3, regno: "EMP 003", fullname: "Hansi Perera", gender: "Female", nic: "996541236v", mobile: "0724569874", dob: "1988-12-18", image: null, designation_id: { id: 3, name: "Developer", abc: { id: 3, name: "ccccc" } }, status_id: { id: 3, status: "Resign" }, civilStatus_id: { id: 3, status: "Married" } }];

    //Refresh Table

    refreshTable();

    //Refresh Form

    refreshForm2();


}

//Fill data in to table
const refreshTable = () => {


    employees = getServiceRequest("/employee/all")

    // $.ajax("/employee/all" , {
    //
    //     async : false,
    //     dataType : 'json',
    //     success : function (data,status,ahr){
    //         console.log("success");
    //         employees = data;
    //     },
    //     error:function (ahr,status,errormsg){
    //         console.log("error");
    //         employees = [];
    //     }
    // })


    displayProp = ['regno', 'fullname', 'gender', 'nic', 'dob', 'dob', 'image', 'mobile', 'designation_id.name', 'status_id.status', 'civilStatus_id.status'];

    displayDataType = ['text', 'text', 'text', 'text', 'text', 'yearbydate', 'image', getDecimalPoint, 'object', 'object', 'object'];

    fillDataIntoTable2(tableEmployeeNew, employees, displayProp, displayDataType, viewEmployee, formRefillData, deleteEmployee);

    $('#tableEmployeeNew').DataTable();

    clearTableStyle(tableEmployeeNew);

}

//define decimalPoint

function getDecimalPoint(ob) {
    console.log(ob.mobile);
    return ob.mobile;
}

//refresh Form elements into default state

const refreshForm2 = () => {

    //Create new object for collect data
    employee = new Object();
    oldemployee = null;

    //Create array for fill designation select element

    civilstatuses = [{ id: 1, status: "Married" }, { id: 2, status: "Single" }];
    fillSelectFeild(cmbCivilStatus, "Select Civil Status", civilstatuses, "status");

    designations = [{ id: 1, name: "Manager" }, { id: 2, name: "Cashier" }, { id: 3, name: "Owner" }];
    fillSelectFeild(cmbDesignation, "Select Designation", designations, "name");

    statuses = [{ id: 1, status: "Working" }, { id: 2, status: "Resign" }];
    fillSelectFeild(cmbEmployeeStatus, "Select Status", statuses, "status", "Working", false,);

    employee.status_id = JSON.parse(cmbEmployeeStatus.value);


    assignDate.value = getCurrentDate("date", "");

    // text feild need to set empty
    txtFullname.value ="";
    typeMobileNo.value ="";
    txtNIC.value ="";
    dteDOB.value ="";
    radioMale.checked = false;
    radioFemale.checked = false;

    //set all ui element into default  color style

    setStyle('2px solid rgb(118, 118, 118)')

    //set valid color into selected values feilds(auto selected)

    cmbEmployeeStatus.style.borderRight = '2px solid green';
    cmbEmployeeStatus.style.borderBottom = '2px solid green';
    cmbEmployeeStatus.style.borderLeft = '2px solid green';
    cmbEmployeeStatus.style.borderTop = '2px solid green';

}

const setStyle = (style) => {
    txtFullname.style.borderRight = style;
    txtFullname.style.borderBottom = style;
    txtFullname.style.borderLeft = style;
    txtFullname.style.borderTop = style;

    txtNIC.style.borderRight = style;
    txtNIC.style.borderBottom = style;
    txtNIC.style.borderLeft = style;
    txtNIC.style.borderTop = style;

    dteDOB.style.borderRight = style;
    dteDOB.style.borderBottom = style;
    dteDOB.style.borderLeft = style;
    dteDOB.style.borderTop = style;

    cmbEmployeeStatus.style.borderRight = style;
    cmbEmployeeStatus.style.borderBottom = style;
    cmbEmployeeStatus.style.borderLeft = style;
    cmbEmployeeStatus.style.borderTop = style;

    cmbDesignation.style.borderRight = style;
    cmbDesignation.style.borderBottom = style;
    cmbDesignation.style.borderLeft = style;
    cmbDesignation.style.borderTop = style;

}

//check value bindings

const getErrors = () => {

    let errors = "";

    // Employee Full Name

    if (employee.fullname == null) {
        txtFullname.style.borderRight = '2px solid red';
        txtFullname.style.borderBottom = '2px solid red';
        txtFullname.style.borderLeft = '2px solid red';
        txtFullname.style.borderTop = '2px solid red';
        errors = errors + "Employee Full Name Not Enter...\n";

    } else {

    }

    // Employee Calling Name

    if (employee.callingname == null) {
        txtCallingname.style.borderRight = '2px solid red';
        txtCallingname.style.borderBottom = '2px solid red';
        txtCallingname.style.borderLeft = '2px solid red';
        txtCallingname.style.borderTop = '2px solid red';
        errors = errors + "Employee Calling Name Not Enter...\n";

    } else {

    }


    // Employee NIC

    if (employee.nic == null) {
        txtNIC.style.borderRight = '2px solid red';
        txtNIC.style.borderBottom = '2px solid red';
        txtNIC.style.borderLeft = '2px solid red';
        txtNIC.style.borderTop = '2px solid red';
        errors = errors + "Employee NIC Not Enter...\n";

    } else {

    }

    // Employee Gender



    if (employee.gender == null) {
        labelMale.style.color = 'red';
        labelFemale.style.color = 'red';
        errors = errors + "Employee Gender Not Selected...\n";

    } else {

    }

    // Employee DOB

    if (employee.dob == null) {
        dteDOB.style.borderRight = '2px solid red';
        dteDOB.style.borderBottom = '2px solid red';
        dteDOB.style.borderLeft = '2px solid red';
        dteDOB.style.borderTop = '2px solid red';
        errors = errors + "Employee DOB Not Enter...\n";

    } else {

    }

    // Employee Mobile number

    if (employee.mobile == null) {
        typeMobileNo.style.borderRight = '2px solid red';
        typeMobileNo.style.borderBottom = '2px solid red';
        typeMobileNo.style.borderLeft = '2px solid red';
        typeMobileNo.style.borderTop = '2px solid red';
        errors = errors + "Employee Mobile Number Not Enter...\n";

    } else {

    }

    // Employee Land Number

    // if (employee.land == null) {
    //     typeLandNo.style.borderRight = '2px solid red';
    //     typeLandNo.style.borderBottom = '2px solid red';
    //     typeLandNo.style.borderLeft = '2px solid red';
    //     typeLandNo.style.borderTop = '2px solid red';
    //     errors = errors + "Employee Land Number Not Enter...\n";

    // } else {

    // }

    // Employee Email

    if (employee.email == null) {
        email.style.borderRight = '2px solid red';
        email.style.borderBottom = '2px solid red';
        email.style.borderLeft = '2px solid red';
        email.style.borderTop = '2px solid red';
        errors = errors + "Employee Email Not Enter...\n";

    } else {

    }

    // Employee Address

    if (employee.address == null) {
        textAddress.style.borderRight = '2px solid red';
        textAddress.style.borderBottom = '2px solid red';
        textAddress.style.borderLeft = '2px solid red';
        textAddress.style.borderTop = '2px solid red';
        errors = errors + "Employee Address Not Enter...\n";

    } else {

    }

    //Employee Civil Status

    if (employee.civilStatus_id == null) {

        cmbCivilStatus.style.borderRight = '2px solid red';
        cmbCivilStatus.style.borderBottom = '2px solid red';
        cmbCivilStatus.style.borderLeft = '2px solid red';
        cmbCivilStatus.style.borderTop = '2px solid red';

        errors = errors + "Employee Civil Status Not Selected...\n";

    } else {

    }

    //Employee Designation

    if (employee.designation_id == null) {

        cmbDesignation.style.borderRight = '2px solid red';
        cmbDesignation.style.borderBottom = '2px solid red';
        cmbDesignation.style.borderLeft = '2px solid red';
        cmbDesignation.style.borderTop = '2px solid red';

        errors = errors + "Employee Designation Not Selected...\n";

    } else {

    }

    //Employee Status

    if (employee.status_id.status == null) {

        cmbEmployeeStatus.style.borderRight = '2px solid red';
        cmbEmployeeStatus.style.borderBottom = '2px solid red';
        cmbEmployeeStatus.style.borderLeft = '2px solid red';
        cmbEmployeeStatus.style.borderTop = '2px solid red';

        errors = errors + "Employee Status Not Selected...\n";

    } else {

    }

    return errors;

}

const refreshForm = () => {

    txtFullname.value = "";
    txtCallingname.value = "";
    txtNIC.value = "";
    labelMale.checked = "";
    labelFemale.checked = "";
    dteDOB.value = "";
    typeMobileNo.value = "";

    email.value = "";
    textAddress.value = "";
    cmbCivilStatus.value = "";
    cmbDesignation.value = "";
    cmbEmployeeStatus.value = "";

}

//function for add data in to database

function buttonAddMC() {
    let errors = getErrors();
    if (errors == "") {

        response = confirm("Are you sure to add following employee?" +
            "\n Employee Full Name : " + employee.fullname +
            "\n Employee Calling Name : " + employee.callingname +
            "\n Employee NIC : " + employee.nic +
            "\n Employee Gender : " + employee.gender +
            "\n Employee DOB : " + employee.dob +
            "\n Employee Mobile : " + employee.mobile +

            "\n Employee Email : " + employee.email +
            "\n Employee Address : " + employee.address +
            "\n Employee Civil Status : " + employee.civilStatus_id.status +
            "\n Employee Designation : " + employee.designation_id.name +
            "\n Employee Status : " + employee.status_id.status)

        if (response) {
            alert("Employee Added Successfully!");
            employees.push(employee);
            console.log(employees);
            refreshTable();

            refreshForm();

            // hide Modal

            $('#modalAddEmployee').modal('hide')


        } else {

        }

    } else {
        alert("You have following errors! \n \n" + errors);

    }
}

// view function

function viewEmployee(emp, rowind) {

    let employeeprint = emp;

    tdPrintEmployeeNo.innerHTML = employeeprint.regno;
    tdPrintEmployeeFullName.innerHTML = employeeprint.fullname;
    tdPrintEmployeeNIC.innerHTML = employeeprint.nic;

    if (employeeprint.image == null)
        imgPrintEmpImage.src = '';
    else imgPrintEmpImage.src = employeeprint.image;

    // Show Print Modal

    $('#modalViewEmployee').modal('show')

}

//function for refill form with data

function formRefillData(emp, rowind) {

    console.log(rowind);
    clearTableStyle(tableEmployeeNew)

    tableEmployeeNew.children[1].children[rowind].style.backgroundColor = "#92a8d1";

    employee = JSON.parse(JSON.stringify(emp));
    oldemployee = JSON.parse(JSON.stringify(emp));

    txtFullname.value = employee.fullname
    txtNIC.value = employee.nic
    dteDOB.value = employee.dob


    fillSelectFeild(cmbCivilStatus, "Select Designation", civilstatuses, "status", employee.civilStatus_id.status);
    fillSelectFeild(cmbDesignation, "Select Designation", designations, "name", employee.designation_id.name);
    fillSelectFeild(cmbEmployeeStatus, "Select Status", statuses, "status", employee.status_id.status, false);

    setStyle('2px solid green');

    // show Modal

    $('#modalAddEmployee').modal('show')


}


//Function for get updated value

const getUpdatedRecodes = () => {
    let updates = "";

    if (employee != null && oldemployee != null) {

        if (employee.fullname != oldemployee.fullname) {
            updates = updates + "Employee Full Name is Changed \n";
        }

        if (employee.nic != oldemployee.nic) {
            updates = updates + "Employee NIC is Changed \n";
            // updates = updates + "Employee NIC is Changed " + oldemployee.nic + " into " + employee.nic + "\n";
        }

        if (employee.civilStatus_id.status != oldemployee.civilStatus_id.status) {
            updates = updates + "Employee Civil Status is Changed \n";
        }

        if (employee.designation_id.name != oldemployee.designation_id.name) {
            updates = updates + "Employee Designation is Changed \n";
        }

        if (employee.status_id.status != oldemployee.status_id.status) {
            updates = updates + "Employee Status is Changed \n";
        }
    }

    return updates;
}

//Update function

function buttonUpdateMC() {

    let errors = getErrors();
    if (errors == "") {
        let updates = getUpdatedRecodes();
        if (updates != "") {
            let response = window.confirm("Are you sure to update following employee? \n" + updates);
            if (response) {

                window.alert("Updated Successfully...! \n ");
                refreshTable();
                refreshForm2();

                // hide Modal

                $('#modalAddEmployee').modal('hide')

            }
        } else {
            window.alert("Nothing updated...! \n" );
        }

    } else {
        window.alert("You have following errors...! \n" + errors);
    }

}



// delete function

function deleteEmployee(emp, rowind) {
    console.log("Delete");
    console.log(emp);
    console.log(rowind);

    // Method 02

    let deletemsg = 'Are you sure to delete following employee? \n' +
        '\n Employee Reg No : ' + emp.regno +
        '\n Employee Full Name : ' + emp.fullname;
    let response = window.confirm(deletemsg);

    if (response) {
let deleterequest = getHTTPRequestService("/employee" , "DELETE" , "emp" );
if (deleterequest == "0"){
    alert("Delete Successfully..")
}


        //employees.splice(rowind, 1);

    }

    // Method 01

    // window.confirm('Are you sure to delete following employee?')
}



//print select row in table

const printEmployeeRow = () => {

    let newWindow = window.open();
    newWindow.document.write(
        "<link  rel='stylesheet' href='assets/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css'>" +
        "<script src='assets/jquery/jquery.js'></script>" +
        '<h2>Employee Details</h2>'
        + tablePrintEmployee.outerHTML
    );

    //set time out .... 1000milisecond giyata passe print eka open wee...

    setTimeout(() => {
        newWindow.print();
    }, "1000")


}

//print table

// const printTable = () => {
//     let newWindow = window.open();

//     newWindow.document.write(
//         "<link  rel='stylesheet' href='assets/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css'>" +
//         "<style>.modifycol{display:none;}</style>" +
//         "<script src='assets/jquery/jquery.js'></script>" +
//         '<h2>Employee Details</h2>'
//         + tableEmployeeNew.outerHTML
//     );


//     setTimeout(() => {
//         newWindow.print();
//     }, "1000")

// }


function selectValidation(feildid) {
    console.log(JSON.parse(feildid.value));

}




//custom nic field validator(generate Gender and DOB)
function nicFieldValidator() {


    if (txtNIC.value != "") {

        let nicpattern = new RegExp('^(([0-9]{9}[VvXx])|([0-9]{12}))$');

        if (nicpattern.test(txtNIC.value)) {

            console.log(txtNIC.value);

            txtNIC.style.borderRight = '2px solid green';
            txtNIC.style.borderBottom = '2px solid green';
            txtNIC.style.borderLeft = '2px solid green';
            txtNIC.style.borderTop = '2px solid green';

            if (txtNIC.value.length == 10) {
                empnic = "19" + txtNIC.value.substring(0, 5) + "0" + txtNIC.value.substring(5, 9);

            } else {
                empnic = txtNIC.value;
            }

            let empBirthYear = empnic.substring(0, 4);
            let empNofBirthDays = empnic.substring(4, 7)

            if (empNofBirthDays > 500) {
                radioFemale.checked = true;
                empNofBirthDays = empNofBirthDays - 500;

                employee.gender = "Female";

            } else {
                radioMale.checked = true;
                employee.gender = "Male";
            }

            let empdob = new Date(empBirthYear);

            empdob.setDate(empdob.getDate() - 1 + parseInt(empNofBirthDays));
            //  empdob.setDate(empdob.getDate() - 2 + parseInt(empNofBirthDays) );
            dteDOB.value = getCurrentDate('date', empdob);


            employee.nic = txtNIC.value;
            employee.dob = dteDOB.value;




            if (oldemployee != null && employee.nic != oldemployee.nic) {

                txtNIC.style.borderRight = '2px solid orange';
                txtNIC.style.borderBottom = '2px solid orange';
                txtNIC.style.borderLeft = '2px solid orange';
                txtNIC.style.borderTop = '2px solid orange';

                dteDOB.style.borderRight = '2px solid orange';
                dteDOB.style.borderBottom = '2px solid orange';
                dteDOB.style.borderLeft = '2px solid orange';
                dteDOB.style.borderTop = '2px solid orange';




            } else {

                txtNIC.style.borderRight = '2px solid green';
                txtNIC.style.borderBottom = '2px solid green';
                txtNIC.style.borderLeft = '2px solid green';
                txtNIC.style.borderTop = '2px solid green';

                dteDOB.style.borderRight = '2px solid green';
                dteDOB.style.borderBottom = '2px solid green';
                dteDOB.style.borderLeft = '2px solid green';
                dteDOB.style.borderTop = '2px solid green';



            }



        } else {

            employee.nic = null;

            txtNIC.style.borderRight = '2px solid red';
            txtNIC.style.borderBottom = '2px solid red';
            txtNIC.style.borderLeft = '2px solid red';
            txtNIC.style.borderTop = '2px solid red';

        }

    } else {
        employee.nic = null;

        txtNIC.style.borderRight = '2px solid red';
        txtNIC.style.borderBottom = '2px solid red';
        txtNIC.style.borderLeft = '2px solid red';
        txtNIC.style.borderTop = '2px solid red';

    }
}
