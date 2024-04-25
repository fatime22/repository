function kredit(a,b,c) {

    let d = " ayliq odenis"

    if (a>=d/0.45){
        console.log("kredit dusur")
        
    }else{
        console.log("kredit dusmur")
    }

   
    if (b<=a*10){
        console.log("kredit dusur")
        
    }else{
        console.log("kredit dusmur")
    }


   
    if (c<=12) {
        console.log("illik 13%")
    }else if (c<=24){
        console.log("illik 15%")
        
    }else if (c<=36){
        console.log("illik 17%")

    }else{
        console.log("size kredit dushmur")
    }
    
}

let a = " emek haqqi";
let b = " istediyiniz meblegh";
let c = " istediyiniz muddet";


console.log(kredit(1000,7000,33));