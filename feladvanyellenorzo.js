function konnyu1(){
  
    result = ''
    var melyikMezore = document.getElementById('mezo');
    var dropdown = document.getElementById('dropdown');

    if (dropdown.value == '' && melyikMezore.value == ''){
        result = 'Kérem adjon meg egy bábut és egy mezőt!'
    }
    else if (dropdown.value == ''){
        result = 'Kérem válasszon a lenyíló menüből!'
    }
    else if (melyikMezore.value == ''){
        result = 'Kérem írjon be egy mezőt, melyre lépni kíván!'
    }
    if (melyikMezore = 'b6' && dropdown.value == 'kiralyno'){
        result = 'Helyes válasz! Jól megoldotta a feladatot.'
    }
    else{
        result = 'Rossz válasz :( Próbálja újra!'
    }
}
  