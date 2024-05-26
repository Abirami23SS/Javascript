function ValidateBookName() {
    var bookname = document.getElementById("book");
    if (bookname.value.trim() != "") {
        bookname.style.border = "5px solid green";
        document.getElementById("bookname").innerHTML = "Valid";
        document.getElementById("bookname").style.visibility = "visible";
        document.getElementById("bookname").style.color = "green";
        true;
    }
    else {
        bookname.style.border = "5px solid red";
        document.getElementById("bookname").innerHTML = "InValid";
        document.getElementById("bookname").style.visibility = "visible";
        document.getElementById("bookname").style.color = "red";
        return false;
    }
}

function ValidateRackNumber() {
    var racknumber = document.getElementById("rack");
    var regex = /\d/;
    if (regex.test(racknumber.value)) {
        racknumber.style.border = "5px solid green";
        document.getElementById("racknumber").innerHTML = "Valid";
        document.getElementById("racknumber").style.visibility = "visible";
        document.getElementById("racknumber").style.color = "green";
        true;
    }
    else {
        racknumber.style.border = "5px solid red";
        document.getElementById("racknumber").innerHTML = "InValid";
        document.getElementById("racknumber").style.visibility = "visible";
        document.getElementById("racknumber").style.color = "red";
        return false;
    }
}

function ValidateAuthorName() {
    var authorname = document.getElementById("author");
    if (authorname.value.trim() != "") {
        authorname.style.border = "5px solid green";
        document.getElementById("authorname").innerHTML = "Valid";
        document.getElementById("authorname").style.visibility = "visible";
        document.getElementById("authorname").style.color = "green";
        true;
    }
    else {
        authorname.style.border = "5px solid red";
        document.getElementById("authorname").innerHTML = "InValid";
        document.getElementById("authorname").style.visibility = "visible";
        document.getElementById("authorname").style.color = "red";
        return false;
    }
}

function ValidatePublisherYear() {
    var pubyear = document.getElementById("publisher");
    var regex = /\d{4}/;
    if (regex.test(pubyear.value)) {
        pubyear.style.border = "5px solid green";
        document.getElementById("publisherYear").innerHTML = "Valid";
        document.getElementById("publisherYear").style.visibility = "visible";
        document.getElementById("publisherYear").style.color = "green";
        true;
    }
    else {
        pubyear.style.border = "5px solid red";
        document.getElementById("publisherYear").innerHTML = "InValid";
        document.getElementById("publisherYear").style.visibility = "visible";
        document.getElementById("publisherYear").style.color = "red";
        return false;
    }
}

function ValidatePublisherName() {
    var pubname = document.getElementById("publisher_name");
    if (pubname.value.trim() != "") {
        pubname.style.border = "5px solid green";
        document.getElementById("publisherName").innerHTML = "Valid";
        document.getElementById("publisherName").style.visibility = "visible";
        document.getElementById("publisherName").style.color = "green";
        true;
    }
    else {
        pubname.style.border = "5px solid red";
        document.getElementById("publisherName").innerHTML = "InValid";
        document.getElementById("publisherName").style.visibility = "visible";
        document.getElementById("publisherName").style.color = "red";
        return false;
    }
}

function ValidateAuthorEmail() {
    var authmail = document.getElementById("mail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(authmail.value)) {
        authmail.style.border = "5px solid green";
        document.getElementById("emailID").innerHTML = "Valid";
        document.getElementById("emailID").style.visibility = "visible";
        document.getElementById("emailID").style.color = "green";
        true;
    }
    else {
        authmail.style.border = "5px solid red";
        document.getElementById("emailID").innerHTML = "InValid";
        document.getElementById("emailID").style.visibility = "visible";
        document.getElementById("emailID").style.color = "red";
        return false;
    }
}

function ValidatePhoneNumber() {
    var phnumber = document.getElementById("phone");
    var regex = /[7-9]\d{9}/;
    if (regex.test(phnumber.value)) {
        phnumber.style.border = "5px solid green";
        document.getElementById("phoneNumber").innerHTML = "Valid";
        document.getElementById("phoneNumber").style.visibility = "visible";
        document.getElementById("phoneNumber").style.color = "green";
        true;
    }
    else {
        phnumber.style.border = "5px solid red";
        document.getElementById("phoneNumber").innerHTML = "InValid";
        document.getElementById("phoneNumber").style.visibility = "visible";
        document.getElementById("phoneNumber").style.color = "red";
        return false;
    }
}

function ValidatePincode() {
    var pinco = document.getElementById("pincode");
    var regex = /[6]\d{5}/;
    if (regex.test(pinco.value)) {
        pinco.style.border = "5px solid green";
        document.getElementById("pinCode").innerHTML = "Valid";
        document.getElementById("pinCode").style.visibility = "visible";
        document.getElementById("pinCode").style.color = "green";
        true;
    }
    else {
        pinco.style.border = "5px solid red";
        document.getElementById("pinCode").innerHTML = "InValid";
        document.getElementById("pinCode").style.visibility = "visible";
        document.getElementById("pinCode").style.color = "red";
        return false;
    }
}

function ValidateISBN() {
    var isbnnum = document.getElementById("isbn");
    var regex = /(ISBN-)(\d{5})/;
    if (regex.test(isbnnum.value)) {
        isbnnum.style.border = "5px solid green";
        document.getElementById("ISBN-numbers").innerHTML = "Valid";
        document.getElementById("ISBN-numbers").style.visibility = "visible";
        document.getElementById("ISBN-numbers").style.color = "green";
        true;
    }
    else {
        isbnnum.style.border = "5px solid red";
        document.getElementById("ISBN-numbers").innerHTML = "InValid";
        document.getElementById("ISBN-numbers").style.visibility = "visible";
        document.getElementById("ISBN-numbers").style.color = "red";
        return false;
    }
}

function ButtonClick(event) {
    event.preventDefault();

    document.getElementById("bookForm").style.display = "none";
    document.getElementById("bookTable").style.display = "block";

    var bookname = document.getElementById("book").value;
    var deptname = document.getElementById("category").value;
    var rackname = document.getElementById("rack").value;
    var authorname = document.getElementById("author").value;
    var publisherYear = document.getElementById("publisher").value;
    var publisherName = document.getElementById("publisher_name").value;
    var authormail = document.getElementById("author").value;
    var phonenum = document.getElementById("phone").value;
    var address_name = document.getElementById("address").value;
    var pincode_btn = document.getElementById("pincode").value;
    var isbnnumberr = document.getElementById("isbn").value;
    var bookphoto=document.getElementById("photo").value;

    document.getElementById("id1").innerHTML = bookname;
    document.getElementById("id2").innerHTML = deptname;
    document.getElementById("id3").innerHTML = rackname;
    document.getElementById("id4").innerHTML = authorname;
    document.getElementById("id5").innerHTML = publisherYear;
    document.getElementById("id6").innerHTML = publisherName;
    document.getElementById("id7").innerHTML = authormail;
    document.getElementById("id8").innerHTML = phonenum;
    document.getElementById("id9").innerHTML = address_name;
    document.getElementById("id10").innerHTML = pincode_btn;
    document.getElementById("id11").innerHTML = isbnnumberr;
    document.getElementById("id12").innerHTML = bookphoto;
    
    const file=bookphoto.files?.[0];
    const reader=new FileReader();
    reader.onload=function (event){
        const base64string=event.target?.result;
        bookhoto:[base64string];
        if(file)
            {
                reader.readAsDataURL(file);
            }
    }
}