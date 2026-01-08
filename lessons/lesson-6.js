// Conditional statement

// if time is between 6 and 12 -> print "Good morning"
// if time is between 12 and 18 -> print "Good afternoon"
// else: Good evening

var time = 5
if (time >= 6 && time < 12) {
    console.log('Good morning')
} else if (time >=12 && time < 18 ) {
    onsole.log('Good afternoon')
} else {
    console.log('Good evening')
}

var ageMoreThanEighteen = true
var isUSCitizen = true

if (ageMoreThanEighteen && isUSCitizen){
    console.log('Customer is eleigible for DL')
} else {
    console.log('Customer is not eleigible for DL')
}