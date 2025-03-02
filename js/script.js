let dHM = document.getElementById('html')
let dCS = document.getElementById('css')
let dJS = document.getElementById('js')
let dBS = document.getElementById('bs')
function showResult(){
    let result = (+dHM.value + +dCS.value + +dJS.value + +dBS.value)
    let per =(result * 100)/400
     if (per >= 90){
        document.querySelector('.grade').innerHTML = "A+"
     }
     else if( per >=85 && per <90){
        document.querySelector('.grade').innerHTML = "A"
     }
     else if (per < 85 && per >=70){
        document.querySelector('.grade').innerHTML = "B"
     }
     else if(per < 70 && per >= 65){
        document.querySelector('.grade').innerHTML = "C"
     }
     else {   
        document.querySelector('.grade').innerHTML = "D"
     }

    document.querySelector('.total').innerHTML = result
    document.querySelector('.percentage').innerHTML = per

}