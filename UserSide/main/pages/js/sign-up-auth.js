// function sanitizeInput(input) {
//   const allowedChars = /^[a-zA-Z0-9_ ]+$/;
//   // Check if the input matches the whitelist
//   if (input.match(allowedChars)) {
//     return input;
//   } else {
//     return '';
//   }
// }
// function sanitizeLastName() {
//   let lastNameInput = document.getElementById("lastName");
//   let sanitizedLastName = sanitizeInput(lastNameInput.value);
//   lastNameInput.value = sanitizedLastName;
//   if(sanitizedLastName===""){
//     console.log("write valid text")
//     return false;
//   }else{
//     console.log(sanitizedLastName)
//     return true;

//   }
  
// }
// // Get all the input elements in the form
// const inputs = document.querySelectorAll('input');

// // Loop through each input element and attach an event listener to it
// inputs.forEach(input => {
//   input.addEventListener('input', () => {
//     // Get the sanitized input value
//     const sanitizedValue = sanitizeInput(input.value);

//     // Update the input value with the sanitized value
//     input.value = sanitizedValue;

//     // Check if the sanitized value is empty and display an error message if it is
//     if (sanitizedValue === '') {
//       const errorElement = document.getElementById(`${input.id}-error`);
//       errorElement.innerText = 'Please enter valid text';
//     } else {
//       // Clear the error message if the value is valid
//       const errorElement = document.getElementById(`${input.id}-error`);
//       errorElement.innerText = '';
//     }
//   });
// });

function signup() {
  
    var userName = document.getElementById("userName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var firstname = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var age  = document.getElementById("age ").value.trim();
    var phoneNb  = document.getElementById("phoneNb ").value.trim();
    var gender  = document.getElementById("gender").value.trim();
  
    
  
  // function validate_form(){
  
  
  //   function validateEmail(email) {
  //     // Regular expression to check if the email is valid
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return emailRegex.test(email);
  //   }
  //   if(userName === ""){
  //     document.getElementById('username-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('username-error').innerHTML = "";
      
  //   }
  //   if(email === ""){
  //     document.getElementById('email-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     // Check if the email is valid
  //     if (!validateEmail(email)) {
  //       // Email is valid, submit the form
  //     document.getElementById('email-error').innerHTML = "<span style='color:#f00;font-size:12px'>Enter Valid Email</span>";
  //     return false;
  //       //document.getElementById("formAuthentication").submit();
  //     }else{
  //       document.getElementById('email-error').innerHTML = "";
  //     }
  //   }
  //   if(password === ""){
  //     document.getElementById('password-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('password-error').innerHTML = "";
  //   }
  //   if(firstname === ""){
  //     document.getElementById('firstname-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('firstname-error').innerHTML = "";
  //   }
  //   if(lastName === ""){
  //     document.getElementById('lastName-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('lastName-error').innerHTML = "";
  //   }
  //   if(age === ""){
  //     document.getElementById('age-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('age-error').innerHTML = "";
  //   }
  //   if(phoneNb === ""){
  //     document.getElementById('phoneNb-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('phoneNb-error').innerHTML = "";
  //   }
  //   if(gender === ""){
  //     document.getElementById('gender-error').innerHTML = "<span style='color:#f00;font-size:12px'>Required Field</span>";
  //     return false;
  //   }else{
  //     document.getElementById('gender-error').innerHTML = "";
  //   }
  //   if (!document.getElementById("terms-conditions").checked) {
  //    // alert("Please agree to the terms and conditions");
  //     document.getElementById('terms-conditions').innerHTML = "<span style='color:#f00;font-size:12px'>Please agree to the terms and conditions</span>";
  //     return false;
      
  //   }else{
  //     document.getElementById('terms-conditions').innerHTML = "";
  //   }
  //   return true;
  // }
  //if(validate_form()){
    fetch('http://10.7.3.130:9099/user/create', { //signup
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password:password,
        firstname:firstname,
        lastName:lastName,  
        age:age,
        phoneNb:phoneNb,
        gender:gender,
        userType:'CLIENT'
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => { 
        console.log(data.user.userType);
        // if(data.user.userType == "BUSINESS_OWNER"){
        //   window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/index.html";
        // }else{
        //   window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/landingpage.html";
        // }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  
  //}
    
  }
  