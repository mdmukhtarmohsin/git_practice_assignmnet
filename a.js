function checkPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

console.log(checkPrime(17));

function pali(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    if(rev==str){
        return true;
    }
    return false;
}

console.log(pali("racecar"));