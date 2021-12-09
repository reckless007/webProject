function validation() {
    let name = document.logins.uname.value;
    let password = document.logins.pwd.value;

    if (password.length < 6) {
        alert("Password is too shorts");
        return;
    }

    if (name.length < 6) {
        alert("Username Should not be less than 5 Characters");
        return;
    }
}


function vali() {
    let name = document.registers.uname1.value;
    let password = document.registers.pwd1.value;
    let mail = document.registers.mail.value;


    if (password.length < 6) {
        alert("Password is too shorts");
        return;
    }

    if (name.length < 6) {
        alert("Username Should not be less than 5 Characters");
        return;
    }
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!mail.match(reEmail)) {
        alert("Invalid email addresssssss");
        return;
    }


}