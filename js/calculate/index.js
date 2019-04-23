// S 5
// A 3
// B 2
// C 1
// D
// level key 计算函数？

let stratigies = {
    'S':function(salary) {
        return salary*5;
    },
    'A':function(salary) {
        return salary*3;
    },
    'B':function(salary) {
        return salary*2;
    },
    'C':function(salary) {
        return salary*1;
    }
}
function calculate(level,salary) {
    return stratigies[lever](salary);
//     switch(lever){
//         case 'S': 5*salary
//           break;
//         case A: 3*salary
//           break;
//         case B: 2*salary
//           break;
//         case C: 1*salary
//           break;
//         case D: 0
//     }
}

console.log(calculate('S',10000))