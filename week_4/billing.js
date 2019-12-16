

// function showName() {
//     document.getElementById("pName").innerHTML = document.getElementById("name").value
// }
// function showGender() {
//     document.getElementById("pGender").innerHTML = document.getElementById("gender").value
// }

// function showEmail() {
//     document.getElementById("pEmail").innerHTML = document.getElementById("email").value
// }

// function showNumber() {
//     document.getElementById("pMobile").innerHTML = document.getElementById("mobile").value
// }

// function showEquip(){
//     document.getElementById("pEquip").innerHTML=document.getElementById("equip").value
// }

function elec_bill() {
    document.getElementById("pName").innerHTML = document.getElementById("name").value
    document.getElementById("pGender").innerHTML = document.getElementById("gender").value
    document.getElementById("pEmail").innerHTML = document.getElementById("email").value
    document.getElementById("pMobile").innerHTML = document.getElementById("mobile").value
    document.getElementById("pEquip").innerHTML=document.getElementById("equip").value

    var watthr = document.getElementById("pwruse").value;
    var consperday = document.getElementById("usgprday").value;
    var conspermonth = document.getElementById("usgprmon").value;

    // console.log(watthr , consperday , conspermonth)
    var tot_cons;
    var unit_cons;
    var amount = 0;
    tot_cons = watthr * consperday * conspermonth;
    unit_cons = tot_cons / 1000;

    if (unit_cons <= 0) {
        document.getElementById("pbill").innerHTML =  "No bill"
    }

    else {
        if (unit_cons > 0 && unit_cons < 100) {

            document.getElementById("pbill").innerHTML ="Your Electric Bill is Rs " + 4 * unit_cons;

        }

        else if (unit_cons => 100 && unit_cons < 300) {
            document.getElementById("pbill").innerHTML = "Your Electric Bill is Rs " + 5 * unit_cons;

        }

        else if (unit_cons => 300 && unit_cons < 500) {
            document.getElementById("pbill").innerHTML = "Your Electric Bill is Rs " + 7 * unit_cons;
        }
        else if (unit_cons => 500){
            document.getElementById("pbill").innerHTML= "Your Electric Bill is Rs " + 10 * unit_cons;
        }
    }

}

function reset(){
    document.getElementById("pName").innerHTML =" "
    document.getElementById("pGender").innerHTML =" "
    document.getElementById("pEmail").innerHTML = " "
    document.getElementById("pMobile").innerHTML =" "
    document.getElementById("pEquip").innerHTML=" "
    document.getElementById("pbill").innerHTML=" "
    document.getElementById("equip").value=" "
    document.getElementById("mobile").value=" "
    document.getElementById("email").value=" "
    document.getElementById("gender").value=" "
    document.getElementById("name").value=" "
    document.getElementById("pwruse").value=" "
    document.getElementById("usgprday").value=" "
    document.getElementById("usgprmon").value=" "
}