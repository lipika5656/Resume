// Changing the inner html of the main-heading
document.getElementById("main-heading").innerHTML="Welcome to my website";

//Changing the title
document.title="My website";

//Changing the background-color
document.body.style.backgroundColor="pink";

//Changing the text color
document.body.style.color="bisque";
document.body.style.fontWeight="600";

//let paras = document.getElementsByClassName("info-class");
//paras[0].innerHTML="Updated first";
//paras[1].animate="";

let patanahi = document.getElementsByTagName("p");
patanahi[0].style.fontSize="50px";
patanahi[1].style.color="yellow";

//Query selector
//let firstInfo = document.querySelector(".query");
//firstInfo.innerHTML = "First Only";
//firstInfo.style.color = "green";

let info=document.querySelectorAll(".all");
info.forEach(function(i){
    i.style.color="red";
    i.style.fontSize="30px";
    i.style.backgroundColor="lightblue";
    i.innerHTML="All selectors";

let newPara = document.createElement("p");
 newPara.textContent ="This is a dynamically created paragraph!";
 newPara.style.color = "blue";
 newPara.style.fontSize ="20px";

 //Append it to the container div
//document.getElementById("container").appendChild(newPara);

 //Append it to the body
//document.body.appendChild(newPara);

 //Append it to body using classname
//document.getElementsByClassName("container").appendChild(newPara);//Not appending

 //create a new heading
//let newHeading = document.createElement("h2");
//newHeading.innerHTML ="This is a new heading added using Js.";
//newHeading.style.color = "purple";
//document.body.appendChild(newHeading);

 //set attribute to newHeading
 //newHeading.setAttribute("class", "dynamic-heading");

//setTimeout(() => {
  //let infoPara = 
 //document.getElementsByClassName("info")[0];
 //if(infoPara){
   //  infoPara.remove();
 //}
   // },3000);


let myList = document.createElement("ul");
    for(let i = 1; i <= 3; i++) {
        let li = document.createElement("li");
        li.textContent = "Item " + i;
        myList.appendChild(li);
    }
    document.body.appendChild(myList);

// // remove second item after 4 seconds
setTimeout(() => {
    let items =
myList.getElementByTageName("li");
if (items[1]) {
    myList.removeChild(items[1]);

}

},4000);
    
});