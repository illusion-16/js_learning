// how does javasccript execute code + call stack//

//check notebook notes as well//
let val1 = 10 
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(3,7)

// how does the above program is executed//
/* 1. Global Execution => this
   2. Memory Phase 
        val1 -> undefined
        val2 -> undefined
        addnum -> definition
        result1 ->undefined
        result2 -> undefined
    3.Execution Phase
        val1 -> 10
        val2 -> 5
        add num -> new variable environment + execution thread
                 -> memory phase -> val1 - undefined , val2 -> undefined , total -> undefined
                 -> execution context -> num1 - 10, num2 - 5 , total - 15 