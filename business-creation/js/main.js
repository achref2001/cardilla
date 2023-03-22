
(function($) {

    var form = $("#signup-form");
    // form.validate({
    //     errorPlacement: function errorPlacement(error, element) {
    //          element.before(error); 
    //     },
    //     rules: {
    //         first_name : {
    //             required: true,
    //         },
    //         last_name : {
    //             required: true,
    //         },
    //         user_name : {
    //             required: true,
    //         },
    //         password : {
    //             required: true,
    //         },
    //         color : {
    //             required: true,
    //         },
    //         phone : {
    //             required: true,
    //         },
    //         address: {
    //             required: true,
    //         },
    //         employee_id : {
    //             required: true,
    //         },
    //         designation: {
    //             required: true,
    //         },
    //         password: {
    //             required: true,
    //         },
    //         work_hours: {
    //             required: true,
    //         },
    //         bank_name: {
    //             required: true,
    //         },
    //         holder_name: {
    //             required: true,
    //         },
    //         card_number: {
    //             required: true,
    //             number: true,
    //         },
    //         cvc: {
    //             required: true,
    //         },
    //     },
    //     onfocusout: function(element) {
    //         $(element).valid();
    //     },
    //     highlight : function(element, errorClass, validClass) {
    //         $(element.form).find('.actions').addClass('form-error');
    //         $(element).removeClass('valid');
    //         $(element).addClass('error');
    //     },
    //     unhighlight: function(element, errorClass, validClass) {
    //         $(element.form).find('.actions').removeClass('form-error');
    //         $(element).removeClass('error');
    //         $(element).addClass('valid');
    //     }
    // });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
        titleTemplate : '<span class="title">#title#</span>',
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

    
})(jQuery);
$(document).ready(function() {
    $("#myForm").submit(function(event) {
      // Prevent the form from submitting by default
      event.preventDefault();
      // Validate form input here
      // If input is valid, redirect to new page
      window.location.href = "https://chat.openai.com/chatl";
    });
  });

  /*login businessform */

  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}