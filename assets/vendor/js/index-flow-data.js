const userId = localStorage.getItem('userId');

const businessId = localStorage.getItem('businessId');

const card_data = localStorage.getItem('card_info');
const extract_card_data = JSON.parse(card_data);



const userData = localStorage.getItem('userData');
const extract_user_data = JSON.parse(userData);


const branches = localStorage.getItem('myBranches');
const extract_branches = JSON.parse(branches);

// console.log(extract_branches);
const card_id = localStorage.getItem('card_id');

const card_id2 = localStorage.getItem('card_id');

const number_of_branches = localStorage.getItem('numberOfBranches');
const numberofbranches = localStorage.getItem('numberOfBranches');
const numberofbranchesbranchpage = localStorage.getItem('numberOfBranches');
const numberofbranchesindexpage = localStorage.getItem('numberOfBranches');
//console.log(numberofbranches)
if(document.getElementById("number_of_branches")){
  document.getElementById("number_of_branches").innerHTML = numberofbranchesbranchpage ;
}
if(document.getElementById("numberofbranchesofferpage")){
  document.getElementById("numberofbranchesofferpage").textContent = numberofbranches ;
}
if(document.getElementById("numberofbranchesindexpage")){
  document.getElementById("numberofbranchesindexpage").innerHTML = numberofbranchesindexpage ;
}
if(document.getElementById("numberofbranchesbranchpage")){
  document.getElementById("numberofbranchesbranchpage").innerHTML = numberofbranchesbranchpage ;
}

/* vars for display  */
let firstname = extract_user_data.firstname,
    lastName = extract_user_data.lastName,
    userType = extract_user_data.userType;
    document.getElementById('role').innerHTML = userType ;
    //document.getElementById('fname').innerHTML = firstname + " " ;
    if(document.getElementById('admin')){

     document.getElementById('admin').innerHTML = firstname + " " ;
    }
    //document.getElementById('lname').innerHTML = lastName ;


let card_id3 = extract_card_data.card_id;
document.getElementById('role').innerHTML = userType ;

let cardcolor = extract_card_data.color;

var cardElement = document.querySelector('.imginsidecard');
cardElement.setAttribute("style", "background-color:#"+ cardcolor +"");

//document.getElementById('cardcolor').style.backgroundColor = cardcolor;
//document.getElementById('cardcolor').setAttribute("style", "background-color: " + cardcolor);


let name = extract_card_data.lenom;
document.getElementById('name').innerHTML = name ;

function get_business(){//valid

  fetch('http://10.7.3.130:8098/api/business/'+userId, { //signup 641adf0d2c92a9645372d3b7 +businessId
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  //   body: JSON.stringify({})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      
    })
    .then(data => {
      //console.log(data);
      localStorage.setItem('businessId', data.businessId);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function generateCardHTML(data) {
  let showbname = data["show_b_name"] ? data["lenom"] : '';
  let color = data["color"];
  let cardshap = '<div class="nav-cards"  id="nav-cards-color" data-card="1" style="margin-bottom:20px; background: linear-gradient(to top left, #' + color + ', #' + color + '99, #' + color + ')">' +
    '<div class="image">' +
    '<div class="logo-card" style="margin-bottom:20px;">' +
    '<img width="50px" height="50px" src="http://10.7.3.130:8000/' + data["logo"] + '">' +
    '</div>' +
    '<h5 class="text-center" id="bname">' + showbname + '</h5>' +
    '<div class="cardinfos">' +
    '<div class="left">' +
    
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="next">' +
    '<i class="bx bx-right-arrow-alt"></i>' +
    '</div>' +
    '</div>';

  return cardshap;
}

function get_card_info() {
  fetch('http://10.7.3.130:8095/api/card_config/' + businessId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);

      // Generate card HTML
      let cardshap = generateCardHTML(data);

      //console.log(cardshap);
      
      if (document.getElementById('businessimgs')) {
        document.getElementById('businessimgs').innerHTML = '<img width="40" height="40" src="http://10.7.3.130:8000/'+data.logo+'"   class="w-px-40 h-auto rounded-circle" />';
      }
      if (document.getElementById('businessimg')) {
        document.getElementById('businessimg').innerHTML = '<img src="http://10.7.3.130:8000/'+data.logo+'"   class="w-px-40 h-auto rounded-circle" />';
      }
      if (document.getElementById('cardshap')) {
        document.getElementById('cardshap').innerHTML = cardshap;
      }

      if (document.getElementById('cardshapbr')) {
        document.getElementById('cardshapbr').innerHTML = cardshap;
      }
      if (document.getElementById('cardshapoffer')) {
        document.getElementById('cardshapoffer').innerHTML = cardshap;
      }
      if (document.getElementById('cardshapcustomer')) {
        document.getElementById('cardshapcustomer').innerHTML = cardshap;
      }
      localStorage.setItem('card_info', JSON.stringify(data));
      localStorage.setItem('card_id', data.card_id);
    })
    .catch(error => console.error(error));
}


function get_customers() {
  fetch('http://10.7.3.130:1000/api/business/customers/'+businessId, { //signup 641adf0d2c92a9645372d3b7 +businessId
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      
    })
    .then(data => {
      //console.log(data);
        ///////////////////////////////////////////////////////////////////// All users *//////////////////////////////////////////////
        var tbody = document.getElementById("tbody");
        var totalclient = document.getElementById("totalclient");
        
        if (tbody && totalclient) {
          if(data){//Users
            var user = "",
            total_users = 0;
            for (var i = 0; i < data.length; i++) { 
              total_users += data[i]["customers"].length;
              for(var j = 0; j < data[i]["customers"].length; j++){
                user = user +
                "<tr class='table-default'>" +
                      '<td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"> <img src="../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle" /></li></ul></td>'+ 
                      "<td>" + data[i]["customers"][j]["firstname"] + " " + data[i]["customers"][j]["lastName"] + "</td>" +
                      "<td><span class='badge bg-label-primary me-1'>" + data[i]["customers"][j]["phoneNb"] + "</span></td>" +
                      "<td>last purchase</td>"+
                      "<td>" + data[i]["customers"][j]["email"] + "</td>" + 
                      "<td>100 DzA</td>"+
                      '<td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a></div></div></td>'+
                 "</tr>";
                      
              }
    
            }            
            document.getElementById("tbody").innerHTML  = user; 
            document.getElementById("totalclient").innerHTML  = total_users; 
          }else{
            
            if(document.getElementById("users-table")){

              document.getElementById("users-table").innerHTML = "<tr class='table-default'><td><b style='color:#f00'> No Users Yet </b> </td></tr>";
              totalclient.innerHTML = "0";
            }
          }
        }
        /////////////////////////////////////////////////////////////////////pending users///////////////////////////////////////
      if(data){//Pending Users
        var Pendingusers = "",
            countpendingusers = 0;
        for (var i = 0; i < data.length; i++) {

          for(var j = 0; j < data[i]["pending_customers"].length; j++){
            countpendingusers = data[i]["pending_customers"].length;

            Pendingusers = Pendingusers +
            "<tr class='table-default'>" +
                  '<td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"> <img src="../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle" /></li></ul></td>'+ 
                  "<td>" + data[i]["pending_customers"][j]["firstname"] + " " + data[i]["pending_customers"][j]["lastName"] + "</td>" +
                  "<td><span class='badge bg-label-primary me-1'>" + data[i]["pending_customers"][j]["phoneNb"] + "</span></td>" +
                  "<td><span class='badge bg-label-warning me-1'>Pending</span></td>"+
                  '<td class="tdclientid"><button class="btn btn-danger" onclick="denyClientOutside();">DECLINE</button><input type="hidden" id="hiddeninputdecline" value="'+data[i]["pending_customers"][j]["userId"]+'"><input type="hidden" id="branchhiddeninputdecline" value="'+data[i]["branchId"]+'"></td>'+
                  '<td class="tdclientid"><button class="btn btn-success" onclick="approveClientOutside();">APPROVE</button><input type="hidden" id="hiddeninputapprove" value="'+data[i]["pending_customers"][j]["userId"]+'"><input type="hidden" id="branchhiddeninputapprove" value="'+data[i]["branchId"]+'"></td>'+
              "</tr>";       
          }
        }
if(document.getElementById("pending-client")){

  document.getElementById("pending-client").innerHTML  = Pendingusers; 
  document.getElementById("shownumb").innerHTML  = countpendingusers; 
}

      }else{
          document.getElementById("pending-client").innerHTML = "<tr class='table-default'><td><b style='color:#f00'> No Users Yet </b> </td></tr>";
        }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function approveClientOutside() {
  var valinpapprove = document.getElementById("hiddeninputapprove").value;
  var branchvalinpapprove = document.getElementById("branchhiddeninputapprove").value;
  approveclient(valinpapprove.toString(),branchvalinpapprove.toString());
}

function denyClientOutside() {
  var valinpdecline = document.getElementById("hiddeninputdecline").value;
  var branchvalinpdecline = document.getElementById("branchhiddeninputdecline").value;
  deleteclient(valinpdecline.toString(),branchvalinpdecline.toString());
}

function deleteclient(DENYclientid,DENYbranchid){//valid
  fetch('http://10.7.3.130:1000/api/branch/subscribe/'+card_id2, { //signup
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    branchId:DENYbranchid,
    clientId:DENYclientid, 
    action:"DENY" 
  })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //return response.json();
    
  })
  .then(data => {
    console.log(data);
    iziToast.show({
      title: 'Hooray!',
      message: 'You Have Successfully Completed Deleted the Client .',
      backgroundColor: '#F15A59',
      color:'#ffffff',
      position: 'topRight',
      timeout: 3000,
    });
  })
  .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

function approveclient(APPROVEclientid,APPROVEbranchid){//valid
  fetch('http://10.7.3.130:1000/api/branch/subscribe/'+card_id2, { //signup
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    branchId:APPROVEbranchid,
    clientId:APPROVEclientid, 
    action:"APPROVE"
  })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //return response.json();
    
  })
  .then(data => {
    console.log(data);
    iziToast.success({
      title: 'Hooray!',
      message: 'You Have Successfully Completed Approved Client .',
      backgroundColor: '#62CDFF',
      position: 'topRight',

      color: 'white',
      icon: 'icon-check',
      iconColor: 'white'
    });
    
  })
  .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}



function create_offer(){
  var offerTitle = document.getElementById("offerTitle").value;
  var offerDescriptiion = document.getElementById("offerDescriptiion").value;
  var offerDate = document.getElementById("offerDate").value;
  var offerPoint = document.getElementById("offerPoint").value;
 
  fetch('http://10.7.3.130:8099/api/offers/create', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      offer_ID_b : businessId,
      title: offerTitle,  
      description:offerDescriptiion,
      exp_time: offerDate,
      point:offerPoint
  })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
          
      }else if(response.status == 201){
        iziToast.show({
          title: 'Hooray!',
          message: 'offer created Succefully',
          backgroundColor: '#00FFD1',
          color:'#ffffff',
          position: 'topRight',
          timeout: 2000,
        });
      }
      return response.json();
      
      })
      .then(data => {
        console.log(data)
    
      })
  .catch(error => console.error(error))
  $('#createoffer').modal('hide');

}
function get_offers(){
  fetch('http://10.7.3.130:8099/api/offers/'+businessId, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  },
//   body: JSON.stringify({})
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
      if(data){//Pending Users
        var offers = "";
        var totaloffers = 0;
        for (var i = 0; i < data.length; i++) {
            //console.log(" pending = " + data[i]["pending_customers"].length);
            totaloffers = data.length;
            offers = offers +
          '<div class="col-lg-3 col-md-4 col-sm-12 order-3 mb-4">'+
            '<div class="big-div">'+
              '<div class="image-div">'+
                '<i class="bx bxs-offer special-offer"></i>'+
              '</div>'+
              '<div class="description-div">'+
                '<p color="#000000"><b>'+ data[i]["title"] +'</b></p>'+
                '<p>'+ data[i]["point"] +'</p>'+
                '<p>'+ data[i]["exp_time"] +'</p>'+
              '</div>'+
            '</div>'+
          '</div>'; 
        }
        if(document.getElementById("offers")){


          document.getElementById("offers").innerHTML  = offers;
        }
        if(document.getElementById("totaloffers")){

          document.getElementById("totaloffers").innerHTML  = totaloffers;
        }
        // strva = toString(valinp);
        // console.log(totaloffers)
        
      }else{
        if(document.getElementById("totaloffers")){

          document.getElementById("offers").innerHTML = "<b class='text-center' style='color:#f00'> No Offers Yet </b>";
        }
          
        }
    
    })
  .catch(error => console.error(error))
}
          ///////////////////////////////////////////////////////////////////// Create Branch  */////////////////////////////////////////////


function create_branch() {
  var branchname = document.getElementById("branchname").value;
  var adminbranchusername = document.getElementById("adminbranchusername").value;
  var adminemail = document.getElementById("adminemail").value;
  var adminbranchpassword = document.getElementById("adminbranchpassword").value;
  var branchadress = document.getElementById("branchadress").value;
  var createbranch = document.getElementById("createbranch");

  fetch('http://10.7.3.130:1000/api/branch/create', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      businessID: businessId,
      branchName: branchname, 
      email:adminemail,
      userName: adminbranchusername,
      password:adminbranchpassword,
      branchAdress: branchadress
  })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
      
      })
  .then(data => {

    console.log(data)
    iziToast.show({
      title: 'Hooray!',
      message: 'Branche create successfully',
      backgroundColor: '#FF6D60',
      color:'#ffffff',
      position: 'topRight',
      timeout: 2000,
    });
  })
  .catch(error => 
    console.error(error)
  )
  $('#createbranch').modal('hide');

}

function getFileName() {
  
}

async function uploadImage() {
  const result = {};
  console.log("Uploading image...");

  const request = new XMLHttpRequest();
  request.open("POST", 'http://10.7.3.130:1000/api/business/logoUpload');
  request.responseType = "json";

  // Add the image file to the request
  const fileInput = document.getElementById("logo");
  const file = fileInput.files[0];

  const filePart = new FormData();
  filePart.append("logourl", file);
  request.send(filePart);

  try {
    await request.response;

    if (request.status === 200 || request.status === 201) {
      result.status = true;
      result.message = "Successful";
    } else {
      result.status = false;
      result.message = "Failed to upload image. Status code: " + request.status;
    }
  } catch (e) {
    result.status = false;
    result.message = "Error: " + e;
  }

  console.log(result);

  return result;
}

function get_card_info_update(){//valid
  //
  const switchInput = document.getElementById('switch');
  const show_b_name = switchInput.checked ? 'true' : 'false';
  const color = document.getElementById('exampleColorInput').value.slice(1);
  const card_type  = document.getElementById("card_type").value;
  const fileInput = document.getElementById("logo");
  const file = fileInput.files[0];
  var imagename = file.name;
  
  console.log(show_b_name);
  console.log(color);
  console.log(card_type);
  console.log(imagename) ;
  //console.log(logo);

  fetch('http://10.7.3.130:8095/api/card_config/update/'+card_id, {//card_id
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    card_type:card_type,
    color:color,
    show_b_name:show_b_name,
    logo:imagename
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    
  })
  .then(data => {
    iziToast.show({
      title: 'Hooray!',
      message: 'Card Updated Succefully',
      backgroundColor: '#00FFD1',
      color:'#ffffff',
      position: 'topRight',
      timeout: 2000,
    });

  })
  .catch(error => console.error(error));
  $('#cardModal').modal('hide');
}
async function getTransactions() {
  let transactions = [];
  console.log('rani fl transactions');
  try {
    const response = await fetch('http://10.7.3.130:8096/api/transactions/8be172c7-4700-4988-b8ff-23ba767f4e7e');
    if (response.status === 200) {
      const items = await response.json();
      transactions = items.map(e => new Transaction(e)); // Mapping json response to our data model
      console.log(response.body);
      console.log(transactions);
      
    } else {
      console.log('Error Occurred');
    }
  } catch (e) {
    console.log('Error Occurred' + e.toString());
  }
  return transactions;
}

function create_transaction(){
  const customers = localStorage.getItem('customers');
  const parsedCustomers = JSON.parse(customers);
  console.log(parsedCustomers[0].branchId );

 //var tratype = document.getElementById("tratype").value;
  var clientID = document.getElementById("selectcutomers").value;
  var branchid = document.getElementById("selectbranch").value;
  var point = document.getElementById("transactionpoint").value;
  var currentDate = new Date();
  var isoString = currentDate.toISOString();
   //console.log(tratype);
   console.log(clientID );
   console.log(businessId );
   console.log(card_id );

  
  fetch('http://10.7.3.130:8096/api/transaction/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_card_id : "",
    businessId : businessId, 
    branchId :branchid,
    clientID: clientID,

    transactionType : "GAIN",
    card_id:card_id,
    points   : point,
    transaction_time  : isoString,

})
})
.then(response => {
  if (!response.ok) {
      throw new Error('Network response was not ok');
      
  }else if(response.status == 201){
    iziToast.show({
      title: 'Hooray!',
      message: 'Traction created Succefully',
      backgroundColor: '#00FFD1',
      color:'#ffffff',
      position: 'topRight',
      timeout: 2000,
    });
  }
  return response.json();
  
  })
.then(data => {
  console.log("created");

  // do something with the data
})
.catch(error => {
  console.error('Error fetching data:', error);
});
$('#createoffer').modal('hide');
}
function fetsh_transactions(){//valid

  const customers = localStorage.getItem('customers');
  const parsedCustomers = JSON.parse(customers);
  let selectHTML = '';
  for (let i = 0; i < parsedCustomers.length; i++) {

    for (let j = 0; j < parsedCustomers[i].customers.length; j++) {
      let userId = parsedCustomers[i].customers[j].userId;
      let userName = parsedCustomers[i].customers[j].userName;
      selectHTML +='<option value="1">Customer...</option>';
      selectHTML += `<option value="${userId}">${userName}</option>`;
    }
  }
  selectHTML += '</select>';
  document.getElementById('selectcutomers').innerHTML = selectHTML;
  
  //console.log(storedArray);
  let storedArray = localStorage.getItem('myArray');
  let parsedArray = JSON.parse(storedArray);
  let idString = parsedArray.join(',');

  const url = `http://10.7.3.130:8096/api/branch/transactions?branchIds=${idString}`;
  fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  //   body: JSON.stringify({})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      
    })
    .then(data => {
    //  console.log(data);
      let trancustomerid = localStorage.getItem("customers");
      let customersids = JSON.parse(trancustomerid);

// Merge the two for loops
for (var i = 0; i < customersids.length; i++) {
  var customers = customersids[i]["customers"];
  for (var j = 0; j < customers.length; j++) {
    var userId = customers[j].userId;
    var userName = customers[j].userName;
   // console.log(userId, userName);
  }
}

var transactionsHtml = '';

// Iterate over the data array and create the HTML for each transaction
for (var i = 0; i < data.length; i++) {
  transactionsHtml += '<li class="d-flex mb-4 pb-1">' +
    '<div class="avatar flex-shrink-0 me-3">' +
    '<i class="bx bxs-credit-card"></i>' +
    '</div>' +
    '<div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">' +
    '<div class="me-2">' +
    '<h6><b>Card 1 : ' + userName + '</b></h6>' +
    '<h6 class="mb-0">' + data[i]["transaction_time"] + '</h6>' +
    '</div>' +
    '<div class="user-progress d-flex align-items-center gap-1">' +
    '<h6 class="mb-0">+' + data[i]["points"] + '</h6>' +
    '<span class="text-muted">PTS</span>' +
    '</div>' +
    '</div>' +
    '</li>';
}
      if(document.getElementById("transactionsContainer")){
        document.getElementById("transactionsContainer").innerHTML = transactionsHtml;
      }

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function fetch_branches(){
  var Fetchingbranches = '';
  var branches =  document.getElementById("branches");
  for (var i = 0; i < extract_branches.length; i++) {
    var Fetchingbranches = Fetchingbranches + 
    '<option value='+extract_branches[i]["branchId"]+'>'  + extract_branches[i]["branchName"]+'</option>';
    
      document.getElementById("branchesforqrcode").innerHTML  = Fetchingbranches;
      document.getElementById("selectbranch").innerHTML  = Fetchingbranches;
      
  }
}
function verify_coupon(){
  var couponcode = document.getElementById("coponcode").value; 
  console.log(couponcode);
  var  url = "http://10.7.3.130:8099/api/offers/coupon/delete/"+couponcode;
  fetch(url, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
  //   body: JSON.stringify({})
    })
    .then(response => {
      if (response.status == 404) {
        iziToast.show({
          title: 'oops!',
          message: 'no coupon incorrect .',
          backgroundColor: '#F15A59',
          color:'#ffffff',
          position: 'topRight',
          timeout: 3000,
        });
        throw new Error('Network response was not ok');
      }else if(response.status == 200){
        iziToast.show({
          title: 'Hooray!',
          message: 'The coupon correct .',
          backgroundColor: '#00FFD1',
          color:'#ffffff',
          position: 'topRight',
          timeout: 3000,
        });
      }
      return response.json();
      
    })
    .then(data => {} )
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
//dropdown.addEventListener("load", generateQRCode);

// Function to generate the QR code
function generateQRCode() {
  var dropdown = document.getElementById("branchesforqrcode");
  // Get the selected value from the dropdown
  var selectedValue = dropdown.value;
  //console.log(selectedValue);
  var previousQRCode = document.getElementById("qrcode");
  previousQRCode.innerHTML = "";
  // Generate the QR code based on the selected value
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: businessId+"/"+selectedValue,

  });
}
function logout(){
  localStorage.clear();
  //window.location.href = ".html";
  window.location.href = "file:///C:/xampp/htdocs/Cardila/Cardila/html/auth-login-basic.html";
}


// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  const modalBody = document.getElementById('modalBody');
  const colorInput = document.getElementById('exampleColorInput');
  const switchInput = document.getElementById('switch');
  const nameElement = document.getElementById('name');

  colorInput.addEventListener('input', function () {
    const selectedColor = colorInput.value;
    modalBody.style.backgroundColor = selectedColor;
  });

  switchInput.addEventListener('change', function () {
    if (switchInput.checked) {
      nameElement.style.display = 'block';
    } else {
      nameElement.style.display = 'none';
    }
  });
  // JavaScript code


});

//JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("logo");
  const previewImage = document.getElementById("cardsectionlogo");

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.src = "../assets/img/12.jpg"; // Default image if no file selected
    }
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const fileInput = document.getElementById("logo");
//   const previewImage = document.getElementById("previewImage");

//   fileInput.addEventListener("change", function (event) {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function () {
//         previewImage.src = reader.result;
//         // Convert the loaded image to PNG with transparent background
//         convertToPNGWithTransparentBackground(previewImage);

//         // Enable the download button
//         const downloadButton = document.getElementById('downloadButton');
//         downloadButton.disabled = false;
//       };
//       reader.readAsDataURL(file);
//     } else {
//       previewImage.src = "../assets/img/uploadimage.png"; // Default image if no file selected
//     }
//   });
// });

// function convertToPNGWithTransparentBackground(imageElement) {
//   // The code for image conversion remains the same as in the previous example
//   // ...
// }

// document.getElementById('downloadButton').addEventListener('click', function () {
//   const outputImage = document.getElementById('outputImage');

//   // Create a new canvas to draw the resized image
//   const resizedCanvas = document.createElement('canvas');
//   const resizedCtx = resizedCanvas.getContext('2d');

//   resizedCanvas.width = 100;
//   resizedCanvas.height = 100;

//   // Draw the resized image on the canvas with border radius
//   resizedCtx.beginPath();
//   resizedCtx.arc(50, 50, 50, 0, 2 * Math.PI);
//   resizedCtx.closePath();
//   resizedCtx.clip();
//   resizedCtx.drawImage(outputImage, 0, 0, 100, 100);

//   // Create a temporary anchor element to download the PNG
//   const downloadLink = document.createElement('a');
//   downloadLink.href = resizedCanvas.toDataURL('image/png');
//   downloadLink.download = 'output.png';
//   downloadLink.click();
// });

// function uploadImage() {
//   // Add your logic to handle the image upload here
// }

// function getCardInfoAndUpdate() {
//   // Add your logic to retrieve the card information and perform any necessary updates
// }
