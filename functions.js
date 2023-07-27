// named function
function named(params){
    //code here
    console.log("named");
}

named(5)

// anonymus function
let anonymus= function(params){
    //code here
    console.log("anonymus");
}

anonymus(5)

// arrow function
let arrow = (params)=> console.log(params)

arrow(5) // Recheck the semicolon for arrow funcs

// immediate invoke funtion expression

(function(){
    //code here
    console.log("IIFE");
})()

// models,routes,views,controllers in node projects
// mrc - backend
// mvc - frontend
// models - schema and design of MongoDB database