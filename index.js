// 01 - Aujourd'hui

var array = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

function whatDayIsToday(){
    var test = new Date()
    var resultat = array[test.getDay()]
    // var auj = test.getDay()
    console.log(`Aujourd'hui nous sommes le ${resultat}`)
}

// whatDayIsToday()

// 02 - Mois courant

var month = ["janvier", "février", "mars", "avril", "mai", "juin","juillet","août","septembre","octobre","novemvre","décembre"]

function whatMonthIsIt(){
    var test = new Date()
    var resultat = month[test.getMonth()]
    // var auj = test.getDay()
    console.log(`Aujourd'hui nous sommes au mois de ${resultat}`)
}

// whatMonthIsIt()

// 03- Format

function formatDate(str){
    var test = new Date(str)
    // console.log(test)
    var day = test.getDate()
    if (day < 10){
        day = '0' + day;
    }
    var month = test.getMonth()+1
    if (month < 10){
        month = '0' + month;
    }
    var year = test.getFullYear()
    console.log(`${day}/${month}/${year}`)
}

// formatDate("1975-7-2")

// 04 - Age

function calculateAge(str){
    var calcul = Date.now() - new Date(str)
    // console.log(calcul)
    age = new Date(calcul)
    // console.log(age)
    age = (age.getFullYear()) - 1970
    console.log(age)


}

//calculateAge("1998-3-7")

// Bonus

// 01 - Aujourd'hui

var moment = require("moment");

function whatDayIsToday(){
    // var test = new Date()
    var resultat = moment().format('dddd')
    // var auj = test.getDay()
    console.log(`Aujourd'hui nous sommes le ${resultat}`)
}

// whatDayIsToday()


// 02 - Mois courant

function whatMonthIsIt(){
    // var test = new Date()
    var resultat = moment().format('MMMM')
    // var auj = test.getDay()
    console.log(`Aujourd'hui nous sommes au mois de ${resultat}`)
}

// whatMonthIsIt()

// 03- Format

function formatDate(str){
    var test =  new Date(str);
    // console.log(test)
    var day = moment(test).format("D");
    if (day < 10){
        day = '0' + day;
    }
    var month = moment(test).format('MM')
    var year = moment(test).format('YYYY');
    console.log(`${day}/${month}/${year}`)
}

 formatDate("1975-8-2")

// 04 - Age

// function calculateAge(str){
//     var calcul = moment().format('YYYY MM D') - moment(str).format('YYYY MM D')
//     // console.log(calcul)
//     var age = moment(calcul).format()
//     // console.log(age)
//     age = (age.getFullYear()) - 1970
//     console.log(age)
// }

// calculateAge("1998-3-7")