let args = process.argv.slice(2);

console.log(args)

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if(args[0] == 's'){
    c = soma(a,b);

}else if(args[0] =='m'){
    c = mult(a,b)

}else if(args[0] =='d'){
    c = div(a,b)    

}else if(args[0]=='sub'){
    c = sub(a,b)

} else {
    c = "Opção Inválida"
}

function soma (x,y){
    return x + y;
}

function mult (x,y){
    return x * y;
}

function div(x,y){
    return x / y;
}
 function sub(x,y){
    return x -y;
 }

console.log(c)
