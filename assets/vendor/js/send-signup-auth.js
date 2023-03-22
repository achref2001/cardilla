function signup() {

var userName = document.getElementById("userName").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var firstname = document.getElementById("firstname").value;
var lastName = document.getElementById("lastName").value;
var age  = document.getElementById("age ").value;
var phoneNb  = document.getElementById("phoneNb ").value;
var gender  = document.getElementById("gender").value;

console.log(userName);
console.log(email);
console.log(password);
console.log(firstname);
console.log(lastName);
console.log(age);
console.log(phoneNb);
console.log(gender);


fetch('http://192.168.1.7:9099/user/employee/create', { //signup
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
    userType :'CLIENT'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => { 
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
  /*
  fetch('http://26.236.30.19:9099/admin/hello')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
  */
}
