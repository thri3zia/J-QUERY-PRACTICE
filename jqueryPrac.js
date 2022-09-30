// ****************** NUMBER 1 ( NUMBER SYSTEM CONVERTER) **********************

let txtNumber = document.getElementById('txtNumber');
let baseDDL = document.getElementById('base');
let convertBtn = document.getElementById('btnConvert');
let spanEl = document.getElementById('convertedValue');
let inputEl = document.getElementById('result')

convertBtn.addEventListener('click', function(){

    let num = +txtNumber.value;
    let base = +baseDDL.value;

    if(isNaN(num)){
        spanEl.textContent = 'Please enter a valid number.';
        spanEl.style.color = '#EF5350';
    } else {
        let convertedValue = num.toString(base);
        spanEl.textContent = convertedValue.toUpperCase();
        spanEl.style.fontWeight = 'bold';
    }

})

// ****************** NUMBER 2 ( MONTH CHECK) **********************

const months = [
    "January", "February",
    "March", "April", "May",
    "June", "July", "August",
    "September", "October",
    "November", "December"
];
$(document).ready(function(){
    $("#month-pick").click(function(){
        const date = parseInt($("#tdate").val().slice(5,7));
        const month = months[date-1];
    $("#month-result").val(month)
    });
});

// =================================================================

// ****************** NUMBER 3 ( DAY CHECK) **********************

function dayIdentifier(){
    var m = new Date($(".day").val());
    if(m == "Invalid Date"){
        alert("please put valid Date!!")
    } else{ 
        let day = m.getDay();
    
        if(day>5){
            day = "Weekend"
            $(".date-result").val(day)
        }else{
            day = "Weekday"
            $(".date-result").val(day)
        }}  
}
$("#date-pick").click(function(){
    dayIdentifier();  
})