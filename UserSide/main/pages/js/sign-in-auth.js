function login() {
    var obj;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;  
    fetch('http://10.7.3.130:9099/user/login', { //signin
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password:password,
        
        })
      })
      .then(loginresponse => {
        if (loginresponse.status === 500) {
          alert(' username or password are false')
        }else{
          console.log('correct pass')
        }
        //throw new Error('Network login response was not ok');
        return loginresponse.json();
      })
      .then(logindata => {
        console.log(logindata); 
        const accessToken =  logindata.accessToken['access_token'];
        //console.log(accessToken); 

        const userId = logindata.user.userId;
        const userData = logindata.user;
        localStorage.setItem("userId",userId);  
        localStorage.setItem("userData",JSON.stringify(userData));  
        console.log( " user = " + userId);  
        sessionStorage.setItem('accesst',accessToken);
        const accesst = sessionStorage.getItem('accesst');
        
          fetch("http://10.7.3.130:8098/api/business/"+userId, { //signup
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(businessresponse => {
            if (businessresponse.status == 404) {
              window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/start_page.html";
              //throw new Error('Network business response was not ok');
            }else{
              window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/index.html";
            }
            return businessresponse.json();           
          })
          .then(data => {
            console.log(data);
            businessId = data.businessId;
            brancheslength = data["branches"].length;
              // Store the businessId value in localStorage
              localStorage.setItem('businessId', businessId);
              localStorage.setItem('brancheslength', brancheslength);
              
              if(businessId){
                window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/index.html";
              }else{
                window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/start_page.html";
              }
            console.log("b id = ",businessId)
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }