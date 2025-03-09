// code your solution here
function saturdayFun (fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function(what = "go to the office"){
    return `This Monday, I will ${what}.`;
}

function wrapAdjective(string = "*"){
    return function(state="special"){
        return `You are ${string}${state}${string}!`;
    }
}
