// code your solution here
function saturdayFun(defaultActivity = 'roller-skate' ){
    return `This Saturday, I want to ${defaultActivity}!`;
}
saturdayFun("bathe my dog!");

function mondayWork(defaultActivity = 'go to the office'){
    return `This Monday, I will ${defaultActivity}.`;
}
mondayWork("work from home");


function wrapAdjective(wrap = "*") {
    return function(word = "special") {
        return `You are ${wrap}${word}${wrap}!`;    }
}