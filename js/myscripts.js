// Primary JS Document
function validate() {
    var username = document.getElementById("userName").value;
    var mail = document.getElementById("userMail").value;
    var subject = document.getElementById("userSubject").value;
    var message = document.getElementById("userMessage").value;

    if (username == null || username == "") {
        alert("Please enter a name.");
        return false;
    }
    if (mail == null || mail == "") {
        alert("Please enter an email address. Must include @ symbol and domain extension, e.g .com");
        return false;
    }
    if (subject == null || subject == "") {
        alert("Please enter a subject.");
        return false;
    }
    if (message == null || message == "") {
        // Changed Password message for testing
        alert("Please enter a message.");
        return false;
    }
    else {
        alert("Thank you for your response")
     } ;
} 

