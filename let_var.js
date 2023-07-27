function sam(){
    let x=10
    if (x==10)
    {
        let x=20
        console.log(x);
    }
    console.log(x);
}
// above program prints 20 10 as let has block scope
function sam1(){
    var x=10
    if (x==10)
    {
        var x=20
        console.log(x);
    }
    console.log(x);
}
// above program prints 20 20 as let has block scope
sam()