//Union type  : send multiple types for single arg  

function combain(num1: number | string,num2: number | string){
    if(typeof num1 == 'number' && typeof num2 == 'number' )
        return num1 + num2;
    return `${num1}${num2}` // return num1.toString() + num2.toString()
}


console.log(combain("nadav","Salman"));




function logSize(moduleSize: 'A' | 'B' | 'C'){
    switch(moduleSize) { 
        case 'A': { 
           console.log('aaa');
           break; 
        } 
        case 'B': { 
           console.log('bbb');
           break; 
        } 
        default: { // 'C'
           console.log('ccc');
           break; 
        } 
     } 
}

logSize('A');