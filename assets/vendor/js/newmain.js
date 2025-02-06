// const card_info = localStorage.getItem('card_info');
// const card_information = JSON.parse(card_info);
// let color = card_information.color,
// logo = card_information.logo,
// lename = card_information.lenom,
// showbname = card_information.show_b_name,
// exp_date = card_information.card_id;
// if(showbname){
//     document.getElementById("bname").innerHTML = lename; 
//   }else{
//     document.getElementById("bname").innerHTML = '';
//   }
//   document.getElementById("logodiv").innerHTML = "<img width='50px' class='w-px-40 h-auto rounded-circle' height='50px' src=" + logo + " />" ; 
//   document.getElementById("businessimgs").innerHTML = "<img width='50px' class='w-px-40 h-auto rounded-circle' height='50px' src=" + logo + " />" ; 
//     document.getElementById("businessimg").innerHTML = "<img width='50px' class='w-px-40 h-auto rounded-circle' height='50px' src=" + logo + " />" ; 
//   //document.getElementById("color").setAttribute('style', 'background-color :#' + data["color"]); 
//   if(color == ""){
//     document.getElementById("nav-cards-color").setAttribute('style', "background-color: #FBAB7E;background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);"); //background: linear-gradient(to right, #ffffff, #000000);
//   }else{
//     document.getElementById("nav-cards-color").setAttribute('style', "background: linear-gradient(to top left, #" + color + ", #"+ color +"99, #"+ color + ")"); //background: linear-gradient(to right, #ffffff, #000000);
//   }

(function(){
var rotate, timeline;
    rotate = function(){
        return $(".nav-cards:first-child").fadeOut(400,'swing',function(){
            return $(".nav-cards:first-child").appendTo(".all-cards").hide()
        }).fadeIn(400,'swing');
    }
    $(".next").click(function(){
        return rotate();
    })
}).call(this)

/* live preview card pop up */
//let exampleColorInput = document.getElementById('exampleColorInput');
/* live preview card pop up */

$(".show-pending").click(function(){
    $(".cardtohide").toggleClass("hidden-pending-table");
    $(".hidec").toggleClass("hide-card");
  });

//your javascript goes here
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {


    showTab(currentTab);

});

// function showTab(n) {
//     var x = document.getElementsByClassName("tab");
//       x[n].style.display = "block";
    
//     if (n == 0) {
//         document.getElementById("prevBtn").style.display = "none";
//     } else {
//         document.getElementById("prevBtn").style.display = "inline";
//     }
//     if (n == (x.length - 1)) {
//         document.getElementById("nextBtn").innerHTML = "Submit";
//     } else {
//         document.getElementById("nextBtn").innerHTML = "Next";
//     }
//     fixStepIndicator(n)
// }
function showTab(n) {
  var x = document.getElementsByClassName("tab");

  if (n >= 0 && n < x.length) {
    x[n].style.display = "block";

    if (n === 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }

    if (n === (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n);
  } else {
    console.error("Invalid index: " + n);
  }
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("text-message").style.display = "block";
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) { document.getElementsByClassName("step")[currentTab].className += " finish"; }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) { x[i].className = x[i].className.replace(" active", ""); }
    x[n].className += " active";
}

/*chart js */
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 44, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "World Wide Wine Production 2018"
//     }
//   }
// });
/*chart js */
/*card display */
// const card_info = localStorage.getItem('card_info');
//const card_information = JSON.parse(card_info);


/**check image extension */

function checkFileExtension() {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  const fileInput = document.getElementById('logo');
  const fileName = fileInput.value;

  if (!allowedExtensions.exec(fileName)) {
    
    document.getElementById("extension").innerHTML = "<b>Invalid file type. Only JPG, JPEG, PNG and GIF file types are allowed.</b>";
    fileInput.value = '';
      return false;
    }
}

/**live preview */

// const showBusinessNameInput = document.getElementById('switch');
//   const cardColorInput = document.getElementById('exampleColorInputr');
//   const cardTypeInput = document.getElementById('card_type');
//   const logoInput = document.getElementById('logo');
//   const previewCard = document.getElementById('preview-card');

//   function updatePreview() {
//     const businessName = showBusinessNameInput.checked ? 'Business Name' : '';
//     const cardColor = cardColorInput.value;
//     const cardType = cardTypeInput.value;
//     const logoUrl = logoInput.value;

//     previewCard.style.backgroundColor = cardColor;
//     previewCard.querySelector('.card-title').textContent = businessName;
//     previewCard.querySelector('.card-text').textContent = cardType;
//     previewCard.querySelector('.card-img-top').src = logoUrl;
//   }

//   showBusinessNameInput.addEventListener('change', updatePreview);
//   cardColorInput.addEventListener('change', updatePreview);
//   cardTypeInput.addEventListener('change', updatePreview);
//   logoInput.addEventListener('change', updatePreview);

//live 


// const showBusinessNameCheckbox = document.getElementById('switch');
// const businessNameLabel = document.querySelector('#preview-content h3');

// showBusinessNameCheckbox.addEventListener('change', () => {
//   if (showBusinessNameCheckbox.checked) {
//     businessNameLabel.textContent = lename;
//   } else {
//     businessNameLabel.textContent = '';
//   }
// });
// const colorPicker = document.getElementById('exampleColorInput');
// const cardTypeSelect = document.getElementById('card_type');
// const cardPreview = document.querySelector('.imginsidecard');

// colorPicker.addEventListener('input', () => {
//   cardPreview.style.backgroundColor = colorPicker.value;
// });

//live

// const logoInput = document.getElementById('logo');
// logoInput.addEventListener('change', () => {
//   const logoPreview = document.querySelector('.logo-card img');
//   const file = logoInput.files[0];
//   console.log(file);
//   const reader = new FileReader();
  
//   reader.addEventListener('load', () => {
//     logoPreview.src = reader.result;
//   });

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// });

$('a[href*="#"]').click(function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// /*Dropdown Menu branches QR CODE*/
// $('.brdropdown').click(function () {
//   $(this).attr('tabindex', 1).focus();
//   $(this).toggleClass('active');
//   $(this).find('.dropdowbranches').slideToggle(300);
// });
// $('.brdropdown').focusout(function () {
//   $(this).removeClass('active');
//   $(this).find('.dropdowbranches').slideUp(300);
// });
// $('.brdropdown .dropdowbranches').click(function () {
//   $(this).parents('.brdropdown').find('span').text($(this).text());
//   $(this).parents('.brdropdown').find('input').attr('value', $(this).attr('id'));
// });

// $('.dropdowbranches').click(function () {
//   var input = '<strong>' + $(this).parents('.brdropdown').find('input').val() + '</strong>',
//       msg = '<span class="msg">Hidden input value: ';
//   $('.msg').html(msg + input + '</span>');
// }); 
// /*End brdropdown Menu*/
