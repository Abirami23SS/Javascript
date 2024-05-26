function ButtonClick(event) {
    event.preventDefault();

    document.getElementById("tabelForm").style.display = "none";
    document.getElementById("userTable").style.display = "block";

    var username=document.getElementById("firstnameid").value;
    var email = document.getElementById("emailId").value;
    var phonenumm = document.getElementById("number").value;
    var presentadd = document.getElementById("present_address").value;
    var permenadd = document.getElementById("premanent_address").value;
    var pincodde = document.getElementById("pincode").value;
    var genderr = document.getElementById("gender").value;
    var deptnammee = document.getElementById("category").value;

    document.getElementById("firstname1").innerHTML = username;
    document.getElementById("email_Id").innerHTML = email;
    document.getElementById("phoneno").innerHTML = phonenumm;
    document.getElementById("present").innerHTML = presentadd;
    document.getElementById("per_present").innerHTML = permenadd;
    document.getElementById("pincodee1").innerHTML = pincodde;
    document.getElementById("genDer").innerHTML = genderr;
    document.getElementById("deptartment").innerHTML = deptnammee;
}

function ValidateFirstName() {
    var fname = document.getElementById("firstnameid");
    if (fname.value.trim() != "") {
        fname.style.border = "5px solid green";
        document.getElementById("namespan").innerHTML = "Valid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "green";
        true;
    }
    else {
        fname.style.border = "5px solid red";
        document.getElementById("namespan").innerHTML = "InValid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "red";
        return false;
    }
}

function ValidateLastName() {
    var fname = document.getElementById("lastnameid");
    if (fname.value.trim() != "") {
        fname.style.border = "5px solid green";
        document.getElementById("namespan").innerHTML = "Valid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "green";
        true;
    }
    else {
        fname.style.border = "5px solid red";
        document.getElementById("namespan").innerHTML = "InValid";
        document.getElementById("namespan").style.visibility = "visible";
        document.getElementById("namespan").style.color = "red";
        return false;
    }
}

function ValidateEmail() {
    var usermail = document.getElementById("emailId");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(usermail.value)) {
        usermail.style.border = "5px solid green";
        document.getElementById("emailSpan").innerHTML = "Valid";
        document.getElementById("emailSpan").style.visibility = "visible";
        document.getElementById("emailSpan").style.color = "green";
        true;
    }
    else {
        usermail.style.border = "5px solid red";
        document.getElementById("emailSpan").innerHTML = "InValid";
        document.getElementById("emailSpan").style.visibility = "visible";
        document.getElementById("emailSpan").style.color = "red";
        return false;
    }
}

function ValidatePhone() {
    var phnumber = document.getElementById("number");
    var regex = /[7-9]\d{9}/;
    if (regex.test(phnumber.value)) {
        phnumber.style.border = "5px solid green";
        document.getElementById("phonenumber").innerHTML = "Valid";
        document.getElementById("phonenumber").style.visibility = "visible";
        document.getElementById("phonenumber").style.color = "green";
        true;
    }
    else {
        phnumber.style.border = "5px solid red";
        document.getElementById("phonenumber").innerHTML = "InValid";
        document.getElementById("phonenumber").style.visibility = "visible";
        document.getElementById("phonenumber").style.color = "red";
        return false;
    }
}

function ValidatePincode() {
    var pinco = document.getElementById("pincode");
    var regex = /[6]\d{5}/;
    if (regex.test(pinco.value)) {
        pinco.style.border = "5px solid green";
        document.getElementById("pinSpan").innerHTML = "Valid";
        document.getElementById("pinSpan").style.visibility = "visible";
        document.getElementById("pinSpan").style.color = "green";
        true;
    }
    else {
        pinco.style.border = "5px solid red";
        document.getElementById("pinSpan").innerHTML = "InValid";
        document.getElementById("pinSpan").style.visibility = "visible";
        document.getElementById("pinSpan").style.color = "red";
        return false;
    }
}

function CopyAddress()
{
    var presentadd = document.getElementById("present_address").value;
    if(document.getElementById("same_address").checked==true)
        {
            document.getElementById("premanent_address").innerHTML = presentadd;
        }
}

