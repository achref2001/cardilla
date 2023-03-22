function get_business_data() {

  var businessName = document.getElementById("businessName").value;
  var businessType = document.getElementById("businessType").value;
  var logoUrl = document.getElementById("logoUrl").value;
  var branchAdress = document.getElementById("branchAdress").value;
  var branchName = document.getElementById("branchName").value;
  var adminUsername = document.getElementById("adminUsername").value;
  var adminEmail = document.getElementById("adminEmail").value;
  var adminPassword = document.getElementById("adminPassword").value;
  var card_type  = document.getElementById("card_type").value;
  var color = document.getElementById("color").value;
  
  
  console.log(businessName);
  console.log(businessType);
  console.log(logoUrl);
  console.log(branchAdress);
  console.log(branchName);
  console.log(adminUsername);
  console.log(adminEmail);
  console.log(adminPassword);
  console.log(card_type);
  console.log(color);


  
  fetch('http://192.168.1.6:6400/api/business/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      color:color,
      show_b_name:true,
      card_type:card_type,
      userName: adminUsername,
      email: adminEmail,
      password:adminPassword,
      branchName:branchName,
      branchAdress:branchAdress,
      businessOwnerId: "95b5ca0a-9e46-4001-a902-324ee95808fd",
      businessType:businessType,  
      logoUrl:logoUrl

    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("created");
    return response.json();
  })
  .then(data => { 
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
/*
var businessName = document.getElementById("businessName").value;
var businessType = document.getElementById("businessType").value;
var logoUrl = document.getElementById("logoUrl").value;
/*
b name
b type
logo url

fetch('http://26.236.30.19:8098/api/business/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    businessOwnerId: '123',
    businessName: 'value2',
    businessType:'v3',
    logoUrl:'sd'
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
*/
