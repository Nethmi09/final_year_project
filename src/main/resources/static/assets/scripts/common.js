//

function getServiceRequest(url){
    $.ajax(url , {

        async : false,
        dataType : 'json',
        success : function (data,status,ahr){
            return data;
        },
        error:function (ahr,status,errormsg){
            alert ("error : " + ahr.responseJSON.error);
            return [];
        }
    })

}

function getHTTPRequestService(url,method,rdata){
    $.ajax(url , {

        async : false,
        type : method,
        data : JSON.stringify(rdata),
        contentType : 'application/json',
        success : function (data,status,ahr){
            return data;
        },
        error:function (ahr,status,errormsg){
            alert ("error : " + ahr.responseJSON.error);
            return ahr.responseJSON.error;
        }
    })
}
const clearTableStyle = (tableid) => {

    for (let index = 0; index < tableid.children[1].children.length; index++) {

        tableEmployeeNew.children[1].children[index].style.backgroundColor = "white";


    }
}

//getCurrentDate function for get current date

const getCurrentDate = (format, givendate) => {
    //Set auto load value

    let today;

    if (givendate != "") {
        today = new Date(givendate);

    } else {
        today = new Date();

    }

    let month = today.getMonth() + 1; // return 0 - 11

    let date = today.getDate(); // return 1 - 31

    if (month < 10) month = "0" + month
    if (date < 10) date = "0" + date

    // 2022-08-20
    // assignDate.value = "2022-08-20";

    let currentDate = today.getFullYear() + "-" + month + "-" + date;
    let currentMonth = today.getFullYear() + "-" + month;
    let currentYear = today.getFullYear();

    if (format == "date") return currentDate;
    if (format == "month") return currentMonth;
    if (format == "year") return currentYear;
}

//Function use to bind text feild value

const textFieldValidator = (feildid, pattern, object, property, oldobject) => {

    let ob = window[object];

    let oldob = window[oldobject];

    if (feildid.value != "") {
        const namepattern = new RegExp(pattern);

        if (namepattern.test(feildid.value)) {
            ob[property] = feildid.value;


            if (oldob != null && ob[property] != oldob[property]) {

                //update
                feildid.style.borderRight = '2px solid orange';
                feildid.style.borderBottom = '2px solid orange';
                feildid.style.borderLeft = '2px solid orange';
                feildid.style.borderTop = '2px solid orange';


            } else {

                //valid
                feildid.style.borderRight = '2px solid green';
                feildid.style.borderBottom = '2px solid green';
                feildid.style.borderLeft = '2px solid green';
                feildid.style.borderTop = '2px solid green';

            }

        } else {
            ob[property] = null;

            feildid.style.borderRight = '2px solid red';
            feildid.style.borderBottom = '2px solid red';
            feildid.style.borderLeft = '2px solid red';
            feildid.style.borderTop = '2px solid red';
        }

    } else {
        ob[property] = null;

        if (feildid.required) {
            feildid.style.borderRight = '2px solid red';
            feildid.style.borderBottom = '2px solid red';
            feildid.style.borderLeft = '2px solid red';
            feildid.style.borderTop = '2px solid red';

        } else {
            feildid.style.borderRight = '2px solid rgb(118, 118, 118)';
            feildid.style.borderBottom = '2px solid rgb(118, 118, 118)';
            feildid.style.borderLeft = '2px solid rgb(118, 118, 118)';
            feildid.style.borderTop = '2px solid rgb(118, 118, 118)';
        }
    }

}

//Function use to bind radio feild value

const radioFeildValidator = (feildid, pattern, object, property, oldobject, label1id, label2id) => {

    let ob = window[object];
    let oldob = window[oldobject];

    if (feildid.checked) {
        ob[property] = feildid.value;

        if (oldob != null && ob[property] != oldob[property]) {

            //update

            label1id.style.color = 'orange';
            label2id.style.color = 'orange';

        } else {

            //valid

            label1id.style.color = 'green';
            label2id.style.color = 'green';

        }

    } else {
        ob[property] = null;
        label1id.style.color = 'red';
        label2id.style.color = 'red';
    }

}

//Function use to bind date feild value

const dateFeildValidator = (feildid, pattern, object, property, oldobject) => {

    let ob = window[object];
    let oldob = window[oldobject];

    if (feildid.value != "") {
        ob[property] = feildid.value;

        if (oldob != null && ob[property] != oldob[property]) {

            //update

            feildid.style.borderRight = '2px solid orange';
            feildid.style.borderBottom = '2px solid orange';
            feildid.style.borderLeft = '2px solid orange';
            feildid.style.borderTop = '2px solid orange';

        } else {

            //valid

            feildid.style.borderRight = '2px solid green';
            feildid.style.borderBottom = '2px solid green';
            feildid.style.borderLeft = '2px solid green';
            feildid.style.borderTop = '2px solid green';

        }

    } else {
        ob[property] = null;

        if (feildid.required) {
            feildid.style.borderRight = '2px solid red';
            feildid.style.borderBottom = '2px solid red';
            feildid.style.borderLeft = '2px solid red';
            feildid.style.borderTop = '2px solid red';
        } else {
            feildid.style.borderRight = '2px solid rgb(118, 118, 118)';
            feildid.style.borderBottom = '2px solid rgb(118, 118, 118)';
            feildid.style.borderLeft = '2px solid rgb(118, 118, 118)';
            feildid.style.borderTop = '2px solid rgb(118, 118, 118)';
        }
    }

}

//Function use to bind select feild value

const selectValidator = (feildid, pattern, object, property, oldobject) => {

    let ob = window[object];
    let oldob = window[oldobject];

    if (feildid.value != "") {
        ob[property] = JSON.parse(feildid.value);

        if (oldob != null && ob[property]['id'] != oldob[property]['id']) {

            //update

            feildid.style.borderRight = '2px solid orange';
            feildid.style.borderBottom = '2px solid orange';
            feildid.style.borderLeft = '2px solid orange';
            feildid.style.borderTop = '2px solid orange';

        } else {

            //valid

            feildid.style.borderRight = '2px solid green';
            feildid.style.borderBottom = '2px solid green';
            feildid.style.borderLeft = '2px solid green';
            feildid.style.borderTop = '2px solid green';

        }

    } else {
        ob[property] = null;

        if (feildid.required) {
            feildid.style.borderRight = '2px solid red';
            feildid.style.borderBottom = '2px solid red';
            feildid.style.borderLeft = '2px solid red';
            feildid.style.borderTop = '2px solid red';
        } else {
            feildid.style.borderRight = '2px solid rgb(118, 118, 118)';
            feildid.style.borderBottom = '2px solid rgb(118, 118, 118)';
            feildid.style.borderLeft = '2px solid rgb(118, 118, 118)';
            feildid.style.borderTop = '2px solid rgb(118, 118, 118)';
        }
    }

}

const checkboxValidator = (feildid, pattern, object, property, oldobject, setTrueValue , setFalseValue , labelid , trueLabelDisplayText , falseLabelDisplayText) =>{

    let ob = window[object];
    let oldob = window[oldobject];

    
    if (feildid.checked) {
        ob[property] = setTrueValue;
        labelid.innerText=trueLabelDisplayText;

    } else {
        ob[property] = setFalseValue;
        labelid.innerText=falseLabelDisplayText;

}
}



const fillDataIntoTable2 = (tableid, dataList, propertyList, dataTypeList, viewfunction, modifyfunction, deletefunction, buttonVisibility = true) => {


    tbody = tableid.children[1];
    tbody.innerHTML = ""; //melesa link karanna hethuwa refill wena awasthawedi table eka clean wela table eka nawatha fill wiimata
    for (index in dataList) {

        //create tr node

        tr = document.createElement("tr");

        //create td node

        tdind = document.createElement("td");
        tdind.innerText = parseInt(index) + 1;
        tr.appendChild(tdind);

        for (pro in propertyList) {

            //create td node

            td = document.createElement("td");
            let data = dataList[index][propertyList[pro]];


            if (dataTypeList[pro] == "text") {
                if (data == null) {
                    td.innerText = "-";
                } else td.innerText = data;
            }

            else if (dataTypeList[pro] == 'object') {
                console.log(propertyList[pro]);
                td.innerText = getDataFromObject(dataList[index], propertyList[pro]);
            }

            else if (dataTypeList[pro] == "yearbydate") {
                if (data == null) {
                    td.innerText = "-";
                } else td.innerText = new Date(data).getFullYear();
            }

            else if (dataTypeList[pro] == "image") {
                //create image node
                let img = document.createElement("img");
                // img.width = '100px';
                // img.height = '100px';
                if (data == null) {
                    img.src = 'assets/images/apple.png';


                } else {
                    img.src = data;
                }

                td.appendChild(img);

            }

            else {

                td.innerText = dataTypeList[pro](dataList[index]);

            }

            tr.appendChild(td);
        }



        //create td for add modify buttons
        tdB = document.createElement("td");
        tdB.classList.add('modifycol');

        // View

        btnView = document.createElement("button");
        btnView.classList.add('btn');
        btnView.classList.add('btn-info');
        // btnView.classList.add('ms-1');

        btnView.onclick = function () {
            //alert("view");
            let index = this.parentNode.parentNode.firstChild.innerHTML;
            viewfunction(dataList[parseInt(index) - 1], parseInt(index) - 1);
        }

        // Edit

        btnEdit = document.createElement("button");
        btnEdit.classList.add('btn');
        btnEdit.classList.add('btn-warning');
        btnEdit.classList.add('ms-1');
        btnEdit.classList.add('me-1');
        btnEdit.onclick = function () {
            //alert("edit");
            let index = this.parentNode.parentNode.firstChild.innerHTML;
            modifyfunction(dataList[parseInt(index) - 1], parseInt(index) - 1);
        }

        // Delete

        btnDelete = document.createElement("button");
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn-danger');
        // btnDelete.classList.add('btn-outline-danger');
      

        btnDelete.onclick = function () {
            //alert("delete");
            let index = this.parentNode.parentNode.firstChild.innerHTML;
            deletefunction(dataList[parseInt(index) - 1], parseInt(index) - 1);
        }



        btnView.innerHTML = "<i class='fa-solid fa-eye'>";
        btnEdit.innerHTML = "<i class='fas fa-edit'></i>";
        btnDelete.innerHTML = "<i class='fa-solid fa-trash-can'>";

        tdB.appendChild(btnView);
        tdB.appendChild(btnEdit);
        tdB.appendChild(btnDelete);


        if (buttonVisibility)
            tr.appendChild(tdB);

        tbody.appendChild(tr);

    }

}

//get data from object from using given propertypath

const getDataFromObject = (ob, path) => {


    //string ekak split eken , use kara separate kiriima


    let getData = (modal, propPath) => {
        let paths = propPath.split('.');

        if (paths.length > 1 && typeof modal[paths[0]] === "object") {
            return getData(modal[paths[0]], paths.slice(1).join('.'));
        } else {
            return modal[paths[0]];
        }

    }
    let data = getData(ob, path);

    return data;



}

// Fill data into select element

const fillSelectFeild = (feildid, displayMessage, dataList, displayProperty, selectedValue, visibility = false) => {
    feildid.innerHTML = "";

    optionPlaceholder = document.createElement('option');
    optionPlaceholder.value = "";
    optionPlaceholder.selected = true;
    optionPlaceholder.disabled = true;
    optionPlaceholder.innerText = displayMessage;
    feildid.appendChild(optionPlaceholder);


    for (index in dataList) {
        optionValues = document.createElement('option');
        optionValues.value = JSON.stringify(dataList[index]);
        // optionValues.innerText = dataList[index][displayProperty];
        optionValues.innerText = getDataFromObject(dataList[index], displayProperty);
        if (getDataFromObject(dataList[index], displayProperty) == selectedValue) {
            optionValues.selected = true;
            feildid.style.borderRight = '2px solid green';
            feildid.style.borderBottom = '2px solid green';
            feildid.style.borderLeft = '2px solid green';
            feildid.style.borderTop = '2px solid green';
        }
        feildid.appendChild(optionValues);
    }

    if (visibility)
        feildid.disabled = true;
    else
        feildid.disabled = false;

}