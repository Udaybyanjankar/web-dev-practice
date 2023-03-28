console.log("javascript");

//alert box
window.alert("Hello");

//confirm dialog box
//let answer = window.confirm("Are you sure you want to exit?");
//console.log(answer);


//prompt dialog box
// let answer = window.prompt("What is the capital of Nepal?")
// if(answer=="kathmandu"){
//     window.alert("You are correct");
// }
// console.log(answer);    

//Document


document.body.style.fontFamily="sans-serif";

//selectror
// let movies=document.getElementById("movies");
// movies.style.backgroundColor="cyan";

//class selector
// let movies=document.getElementsByClassName("movieslist");
// console.log(movies);

//query selector
// let movies = document.querySelector(".movieslist");
// movies.classList.add("big-red");

//query selector all
// let movies1=document.querySelectorAll(".movieslist");
// movies1[1].style.backgroundColor="blue";

//event listener
// document.addEventListener("click",function(){
//     window.alert("You clicked");
// });

// let button = document.querySelector('.click');
// button.addEventListener("click",function(){
//     window.alert("You pressed a button");
// }
// );

let button = document.querySelector(".click");
button.addEventListener(".click",function(){
    document.body.classList.toggle("dark");
    button.textContent="Light mode";
});
