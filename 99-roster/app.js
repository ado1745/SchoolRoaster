// Initialize Firebase
var config = {
    apiKey: "AIzaSyAihPc1s4_qM3BvyPo99EGOKXLoJpfhW2I",
    authDomain: "click-counter-harcam-ccc3a.firebaseapp.com",
    databaseURL: "https://click-counter-harcam-ccc3a.firebaseio.com",
    projectId: "click-counter-harcam-ccc3a",
    storageBucket: "click-counter-harcam-ccc3a.appspot.com",
    messagingSenderId: "244838916859"
};
firebase.initializeApp(config);


//Var for DataBase
let database = firebase.database();


//Site Main Var
let name = "";
let nickName = "";
let photoURL = "";
let studentCount = 0;




//Working wiht DataBase//----------------------------------------------------------------------------------------------
$("#saveBtn").on('click', function (e) {
    e.preventDefault();
    // studentCount++;
    // $('#counter').text(studentCount);
    console.log(studentCount)
    name = $('#name').val().trim();
    nickName = $('#nickName').val().trim();
    photoURL = $('#photoURL').val().trim();

    database.ref('students').push({
        name,
        nickName,
        photoURL,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    database.ref('students').set({
        name,
        nickName,
    })

});

database.ref('students').on("child_added", function (snapshot) {
    var hbt = snapshot.val();

    $('#userAddedNameCard').text(hbt.name);
    $('#userAddedNickNameCard').text(hbt.nickName);
    $('#userFoto').attr('src', photoURL);

})
//----------------------------------------------------------------------------------------------











//FUNCS
//----------------------------------------------------------------------------------------------
//Form reset Func after add Btn is pressed
function formReset() {
    $("#studentForm")[0].reset();
}


function createStudentWin() {

    var newStunedEntry = $(`<div class="col-md-3">` +
        `<div class="card" style="width: 18rem;">` +
        `<img src="" class="card-img-top" id="userFoto">` +
        `<div class="card-body">` +
        `<h3 class="card-title" id="userAddedNameCard"></h3>` +
        `<h5 id="userAddedNickNameCard"></h5>` +
        `</div >` +
        `</div >` +
        `</div >`)

    $('#studenGrid').append(newStunedEntry)

}


/*  <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" id="userFoto">
                    <div class="card-body">
                        <h3 class="card-title" id="userAddedNameCard"></h3>
                        <h5 id="userAddedNickNameCard"></h5>
                    </div>
                </div>
            </div>*/




// function clearUserInputAfterSubmit() {
//     $('#userAddedNameCard').val('');
//     $('#userAddedNickNameCard').val('');
//     $('#photoURL').val('');
// }



// <div class="col-md-3">
//         <div class="card" style="width: 18rem;">
//             <img src="" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h3 class="card-title">Name</h3>
//                 <h5>Nick Name</h5>
//             </div>
//         </div>
//     </div>




// $('#optionsDiv').append('<div class="col-xs-3">' +
//              '<div class="input-group col-xs-10">' +
//              '<span class="input-group-addon">' +
//              '<span class="glyphicon glyphicon- user"></span>' +
//              '</span>' +
//              '<input type="text" name="userName" class="form-control" placeholder="Username">' +
//              '</div>' +
//              '</div>');