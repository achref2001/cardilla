function jumpToNext(event, currentIndex) {
    var maxLength = event.target.attributes["maxlength"].value;
    var currentLength = event.target.value.length;
    
    if (currentLength === parseInt(maxLength)) {
      var nextIndex = currentIndex + 1;
      var nextInput = document.querySelector('.otp-input:nth-child(' + nextIndex + ')');
      
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
  }
  function checkInputs(){
    
    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var input3Value = document.getElementById("input3").value;
    var input4Value = document.getElementById("input4").value;
    var input5Value = document.getElementById("input5").value;
    var input6Value = document.getElementById("input6").value;
    var myButton = document.getElementById("mycodebtn");

    if (input1Value !== "" && input2Value !== "" && input3Value !== "" && input4Value !== "" && input5Value !== "" && input6Value !== "") {
      myButton.disabled = false;
    } else {
      myButton.disabled = true;
    } 
  }
  function getOTP() {
    
    var otpInput = document.getElementsByClassName("otp-input");
    var otpValue = "";
    
    for (var i = 0; i < otpInput.length; i++) {
      otpValue += otpInput[i].value;
    }
    
    console.log(otpValue);
  }
function verify_code(){
    var otpInput = document.getElementsByClassName("otp-input");
    var otpValue = "";
    
    for (var i = 0; i < otpInput.length; i++) {
        otpValue += otpInput[i].value;
    }
    //console.log(otpValue);
 
   
    fetch('http://10.7.3.130:9099/user/verify', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        code : otpValue,
    })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
        })
    .then(
        data => {
            //console.log(data);
            if(data){
                console.log("true");
                window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/auth-register-basic.html";
            }else{
                alert('Wrong Code')
            }
        }
        )
    .catch(error => console.error(error))
  }