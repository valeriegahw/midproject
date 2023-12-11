// Form validation
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
  
    if (name === "" || email === "" || phone === "") {
        alert("All fields must be filled out");
        return false;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
  
    var phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert("Please enter a 10-digit phone number");
        return false;
    }
  
    return true;
  }