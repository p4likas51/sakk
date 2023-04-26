function konnyu1(){
  
    var melyikMezore = document.getElementById('mezo');
    var dropdown = document.getElementById('dropdown');

    if (melyikMezore.value === 'b6' && dropdown.value === 'kiralyno'){
        console.log('Helyes válasz! Jól megoldotta a feladatot.')
    }
    else{
        console.log('Rossz válasz :( Próbálja újra!')
    }
}

function konnyu2(){
  
    var melyikMezore = document.getElementById('mezo');
    var dropdown = document.getElementById('dropdown');

    console.log('gecifely')
    if (melyikMezore.value === 'b5' && dropdown.value === 'futo'){
        console.log('Helyes válasz! Jól megoldotta a feladatot.')
    }
    else{
        console.log('Rossz válasz :( Próbálja újra!')
    }
}

function konnyu3(){
  
    var melyikMezore = document.getElementById('mezo');

    if (melyikMezore.value === 'c5'){
        console.log('Helyes válasz! Jól megoldotta a feladatot.')
    }
    else{
        console.log('Rossz válasz :( Próbálja újra!')
    }
}