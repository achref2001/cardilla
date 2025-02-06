$(document).ready(function() {
    $('#btnbr1').click(function() {
      $('#br1').toggleClass('show');
    });
    $('#btnbr2').click(function() {
        $('#br2').toggleClass('show');
      });
});
//const storedCustomers = JSON.parse(localStorage.getItem('myCustomers'));
/*local storage calls */
let storedArray = localStorage.getItem('myArray');
let ids = JSON.parse(storedArray);
let getCustomers = localStorage.getItem('customers');
let customers = JSON.parse(getCustomers);
/*local storage calls */


function get_branch_customers(){

    fetch('http://10.7.3.130:1000/api/business/customers/'+businessId   , { //signup+businessId  'http://10.7.3.130:1000/api/business/customers/'+businessId
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
        // console.log("data");
        // console.log(data);

        var customers = [];
        for(let i = 0;i < data.length; i++ ){
        //  console.log(data[i]["customers"])
        customers = customers.concat(data[i]);
        }
        //console.log(customers);
        localStorage.setItem('customers', JSON.stringify(customers));
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
} 
function get_branches(){    
    fetch('http://10.7.3.130:8098/api/business/branches/'+businessId, { //signup
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
        //console.log(data);//to get customers
        localStorage.setItem('myBranches', JSON.stringify(data));
        //const storedData = JSON.parse(localStorage.getItem('myBranches'));
        //console.log(storedData);
        var IdsOfBranches = [];
        for(i= 0 ;i<data.length;i++){
            IdsOfBranches.push(data[i]["branchId"])
        }
         localStorage.setItem('myArray', JSON.stringify(IdsOfBranches));
         let storedArray = localStorage.getItem('myArray');
         let ids = JSON.parse(storedArray);
        // branchId = data[0]["branchId"];
        // console.log(branchId);
        if(data){//Branhes
            //console.log(data);
            var branches = "";
            for (var i = 0; i < data.length; i++) {
            //console.log(data[i]["customers"].length);
            branches = branches +
                    '<div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4 " >'+
                        '<div class="container-branch">'+
                            '<div class="left-content">'+/*
                                '<div class="left-content">'+
                                '<div class="left-content">'+*/
                                '<i class=" bx bx-store-alt"></i>'+
                               /*'<img src="128.png" alt="Profile Image">'+*/
                            '</div>'+
                            '<div class="name">' +data[i]["branchName"]+ '</div>' +
                            '<input type="hidden" id="hiddeninput" class="hiddeninput" value='+ data[i]["branchId"]  + '>'+
                        '</div>'+
                    '</div>'
                    /*
                        
                            '<button class="btn  hug-btn">' +data[i]["branchName"]+ '</button>'+
                        '</div>'+
                    '</div>'     */
            }
            let branch = document.getElementById("branches");
            if(branch){

                branch.innerHTML  = branches; 
            }

            var branchesforindex = "";
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]["customers"].length);
                branchesforindex +=
                        '<div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4 ">'+
                            '<div class="container-branch">'+
                                '<div class="left-content">'+
                                    '<i class=" bx bx-store-alt"></i>'+
                                '</div>'+
                                '<div class="name">' +data[i]["branchName"]+ '</div>' +
                                '<input type="hidden" id="hiddeninput" class="hiddeninput" value='+ data[i]["branchId"]  + '>'+
                            '</div>'+
                        '</div>'
                        
                }
                let branchindex =document.getElementById("branchesforindexx");
                if(branchindex){
                branchindex.innerHTML  = branchesforindex; 
                }   
               

            // for (var i = 0; i < data.length; i++) {
            //     branchesforindex += '<div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">' +
            //         '<div class="container-branch">' +
            //         '<div class="left-content">' +
            //         '<i class="bx bx-store-alt"></i>' +
            //         '</div>' +
            //         '<div class="name">' + data[i]["branchName"] + '</div>' +
            //         '<input type="hidden" id="hiddeninput" class="hiddeninput" value=' + data[i]["branchId"] + '>' +
            //         '</div>' +
            //         '</div>';
            // }
            // document.getElementById("branchesforindex").innerHTML = branchesforindex;

                //console.log(branches)
                
            var number_of_branches = data.length; 
            localStorage.setItem('numberOfBranches',number_of_branches)
            // document.getElementById("number_of_branches").textContent = number_of_branches ;
            // document.getElementById("numberofbranches").textContent = number_of_branches ;
            
            

        }else{
            console.log("hello")
        //document.getElementById("branches").innerHTML = "<h1>  <b>No Branche Yet</b> </td>";
        }
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
}
$(document).on("click", ".container-branch", function() {
    var branchId = $(this).find(".hiddeninput").val();
    myOtherFunction(branchId);
    get_transaction(branchId);
});

function myOtherFunction(branchId) {
    // Do something with branchId here, such as making an API call
    const storedData = JSON.parse(localStorage.getItem('myBranches'));
    //console.log(storedData);//data of branches (id, name , customers )
    let getCustomers = localStorage.getItem('customers');
    
    let customers = JSON.parse(getCustomers);
    //console.log("lenghth" + storedData.length);
   //console.log(storedCustomers);
   var user = "";
   
   for(var i = 0; i < storedData.length; i++){
       if(storedData[i]["branchId"] === branchId){

                if(storedData[i]["branchId"] === customers[i]["branchId"]){
                    for(var j= 0 ;j< customers[i]["customers"].length;j++){
                            var usersdata = customers[i]["customers"][j]//users  data is here
                            
                            user = user +
                            "<tr class='table-default'>" +
                            '<td><ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"><li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker"> <img src="../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle" /></li></ul></td>'+ 
                            "<td>" + usersdata.firstname + "</td>" +
                            "<td><span class='badge bg-label-primary me-1'>" + usersdata.phoneNb + "</span></td>" +
                            "<td>last purchase</td>"+
                            "<td>" + usersdata.email + "</td>" + 
                            "<td>100 DzA</td>"+
                            '<td><div class="dropdown"><button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button><div class="dropdown-menu"><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a><a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a></div></div></td>'+
                            "</tr>";
                        
                    }
                }else{
                    console.log('id not matche')
                    
                }
            // if(storedData[i]["customers"][j] === customers[i]["userId"]){
            //     console.log(storedData[i]["customers"][j])
            // }
            var branch_name = storedData[i]["branchName"]; 
            document.getElementById("branch_name").innerHTML = branch_name ;
        }
    }
    //console.log(user);
    if(user){
        document.getElementById("tbody").innerHTML  = user; 
    }
    else{
        iziToast.show({
            title: 'OoOpss!',
            message: 'No User Yet',
            backgroundColor: '#FF6D60',
            color:'#ffffff',
            position: 'topRight',
            timeout: 2000,
          });
        //document.getElementById("users-table").innerHTML  = "<h1><b>There is No User Yet</b></h1>"; 
        //document.getElementById("tbody").innerHTML  =  "<h1><b>There is No User Yet</b></h1>"; 
    }
    

  }
          ///////////////////////////////////////////////////////////////////// get  Branch  by  id  *//////////////////////////////////////////////
function get_branche_by_Id(branchId){

} 

          ///////////////////////////////////////////////////////////////////// GET TARNSACTION  *//////////////////////////////////////////////

function get_transaction(branchId){
    let IDs = ids.join(',');
    fetch('http://10.7.3.130:8096/api/branch/transactions?branchIds='+IDs, { 
    method: 'get',
    // headers: {
        
    // },
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
        //console.log(branchId);
        //console.log(customers);

        var transaction = "";
        const transtype = "";//lazm nafichiha f blasetha
        
            for(var i = 0;  i<data.length;i++){
                if(data[i]["branchId"] === branchId ){
                       
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
                  
                        for (var i = 0; i < data.length; i++) {
                            transaction += '<li class="d-flex mb-4 pb-1">' +
                              '<div class="avatar flex-shrink-0 me-3">' +
                              '<i class="bx bxs-credit-card"></i>' +
                              '</div>' +
                              '<div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">' +
                              '<div class="me-2">' +
                              '<h6><b>Card 1 : ' +  userName + '</b></h6>' +
                              '<h6 class="mb-0">' + data[i]["transaction_time"] + '</h6>' +
                              '</div>' +
                              '<div class="user-progress d-flex align-items-center gap-1">' +
                              '<h6 class="mb-0">+' + data[i]["points"] + '</h6>' +
                              '<span class="text-muted">PTS</span>' +
                              '</div>' +
                              '</div>' +
                              '</li>';
                          } 
                    
                }
            }
        if(transaction){
            document.getElementById("show_transactions").innerHTML = transaction ;
        }else{
            document.getElementById("show_transactions").innerHTML =" <h3>No Transaction Yet</h3>" ;
        }
        
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
}
