// Retrieve the variable from local storage

//console.log(userId); // Output: Hello, World!

function get_business_data() {

  var businessName = document.getElementById("businessName").value;
  var businessType = document.getElementById("businessType").value;var logoUrl = document.getElementById("logo");
  const fileInput = document.getElementById("logo");
  const file = fileInput.files[0];
  var imagename = file.name;
  var branchAdress = document.getElementById("branchAdress").value;
  var branchName = document.getElementById("branchName").value;
  var adminUsername = document.getElementById("adminUsername").value;
  var adminEmail = document.getElementById("adminEmail").value;
  var adminPassword = document.getElementById("adminPassword").value;
  var card_type  = document.getElementById("card_type").value;
  var color = document.getElementById("color").value.slice(1);
  var show_b_name = document.getElementById("show_b_name").value;
  //const userId = localStorage.getItem("userId");
  var userId = localStorage.getItem("userId");
  // console.log(userId)

  // console.log(businessName)
  // console.log(businessType)
  // console.log(branchAdress)
  // console.log(branchName)
  // console.log(adminUsername)
  // console.log(adminEmail)
  // console.log(adminPassword)
  // console.log(card_type)
  // console.log(color)
  // console.log(show_b_name)
  fetch('http://10.7.3.130:1000/api/business/create',{//API USE FOR CREATE BUSINESS THROW THE BFF
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({

      businessName:businessName,
      color:color,
      show_b_name:show_b_name,
      card_type:card_type,
      userName: adminUsername,
      email: adminEmail,
      password:adminPassword,
      branchName:branchName,  
      branchAdress:branchAdress,
      businessOwnerId: userId,
      businessType:businessType,  
      logoUrl:imagename
    })
  })
  .then(response => {
    console.log(response.status);
    
    if (response.status == 201) { 
    
    console.log(userId); // Output: Hello, World!
    fetch('http://10.7.3.130:8098/api/business/'+userId,{//API USE FOR GET  BUSINESS DATA USING USER ID 
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      // Process the retrieved data
      console.log(data);
      
      if (data) {
      var businessId = data.businessId;
      
      const userData = data.user;
      // Store the businessId value in localStorage
      localStorage.setItem('businessId', businessId);
     
          //throw new Error('Network business response was not ok');
          window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/index.html";
        }else{
          alert('re-renter u r data')
          window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/start_page.html";
        }
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
    }else{
      console.log('not created')
    }
    console.log("created successfully");
    return response.json();
  })
  .then(data => { 
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}