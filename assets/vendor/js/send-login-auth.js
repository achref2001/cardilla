function login() {
    var obj;
    var userName = document.getElementById("userName").value;
    
    var password = document.getElementById("password").value;
    
    
    console.log(userName);
    console.log(password);
   
    
    
    fetch('http://192.168.1.7:9099/user/login', { //signup
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password:password,
        
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        
      })
      .then(data => {
          const userId = data.user.userId;  
        if(data.hasBusiness == false){
          console.log(data.hasBusiness);
          window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/business-creation/create-business-form.html"
        }else{
          console.log('true');
          window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/index.html";

        }
       //const obj = JSON.stringify(data);
        //console.log(obj);
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
  
    /* rsponse
     "user": {
          "userId": "95b5ca0a-9e46-4001-a902-324ee95807fd",
          "userName": "OUSSAMA",
          "email": "oussama@gmail.com",
          "firstname": "oussama",
          "lastName": "silem",
          "age": 22,
          "phoneNb": "09929393",
          "gender": "MALE",
          "userType": "BUSINESS_OWNER"
      },
      "accessToken": {
          "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpWkxNaUlJdmFaS05CbnNzeVJQQnBab0hYZDBvbnAxS2I3VE40WFBYams4In0.eyJleHAiOjE2NzkzMzM0MDAsImlhdCI6MTY3OTMzMzEwMCwianRpIjoiNGJiNTE4YWQtOGRjOS00NzVkLTkwZjQtNTcxYmMxMWVhNGQzIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9jYXJkaWxsYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI5NWI1Y2EwYS05ZTQ2LTQwMDEtYTkwMi0zMjRlZTk1ODA3ZmQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjYXJkaWxsYV9zcHJpbmdfYm9vdCIsInNlc3Npb25fc3RhdGUiOiJjNDMxNjI5YS0wMDUwLTRmMjMtODg3OS1lNTAzN2Y4YzQwYTkiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtY2FyZGlsbGEiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiYzQzMTYyOWEtMDA1MC00ZjIzLTg4NzktZTUwMzdmOGM0MGE5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoib3Vzc2FtYSBzaWxlbSIsInByZWZlcnJlZF91c2VybmFtZSI6Im91c3NhbWEiLCJnaXZlbl9uYW1lIjoib3Vzc2FtYSIsImZhbWlseV9uYW1lIjoic2lsZW0iLCJlbWFpbCI6Im91c3NhbWFAZ21haWwuY29tIn0.m6ON4Wp_z9w48TxzVd6jnbnDuq36-vRkiPPuz83dX0QUOQSZCpQ4H6c-_3ojl35Y5HZEpsawtK_vFodcjVWajcyE9j3oLSaa9ahSmjB9XQv3r-glEiHlPa7cYJdON8zGfa_LMw4crE6Y7uankUYztcJR71HVF5va2suaYSUPNI8E69EjhSIcZG4j4jFyB0KDCgrQkr0GHUJd8zZl3hdz9Lub320g9qh_D7ju7pszVtkMc9dXcR7yF-EybQd0ODPXq5QHi4uW_j4cO0_h70izJ4UwGg_xsE_3EP-97u3ig5p6mH851D7lJ91MfrNrhPV7MfiXDSZt_u10GXZi2glmbQ",
          "expires_in": 300,
          "refresh_expires_in": 1800,
          "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0YWQyNGFhMy03YmE2LTQ3ZWYtYmEzYi0xNDgzNTdkODRmNzEifQ.eyJleHAiOjE2NzkzMzQ5MDAsImlhdCI6MTY3OTMzMzEwMCwianRpIjoiODdmNTM5NjUtMmM2My00MGE1LWE2ZjItYjY3Y2ZlODNmMjQwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9jYXJkaWxsYSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWFsbXMvY2FyZGlsbGEiLCJzdWIiOiI5NWI1Y2EwYS05ZTQ2LTQwMDEtYTkwMi0zMjRlZTk1ODA3ZmQiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiY2FyZGlsbGFfc3ByaW5nX2Jvb3QiLCJzZXNzaW9uX3N0YXRlIjoiYzQzMTYyOWEtMDA1MC00ZjIzLTg4NzktZTUwMzdmOGM0MGE5Iiwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiYzQzMTYyOWEtMDA1MC00ZjIzLTg4NzktZTUwMzdmOGM0MGE5In0.YyRStDoCDFH78cgcfAmsulkTHlTuDZf6-FQsjxlBRXc",
          "token_type": "Bearer",
          "id_token": null,
          "not-before-policy": 0,
          "session_state": "c431629a-0050-4f23-8879-e5037f8c40a9",
          "scope": "profile email",
          "error": null,
          "error_description": null,
          "error_uri": null
      }
  */