console.log('working') //working
console.log(document.querySelector(".box").innerHTML)// hey i am box
console.log(document.querySelector(".box").innerHTML="hey i am Pradip")// hey i am Pradip
console.log(document.querySelector(".box").outerHTML)//<div class="box">hey i am box</div>
console.log(document.querySelector(".box").textContent)//hey i am box
console.log(document.querySelector(".box").tagName)//DIV
console.log(document.querySelector(".container").nodeName)//DIV
console.dir(document.querySelector(".container").innerHTML)// <div class="box">hey i am box</div>
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style","color:red;");
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
//about data- attribute
console.log(document.querySelector(".box").dataset);
//about insertion 
let div=document.createElement("div");
div.className="alert";
div.innerHTML="<span>hello mittar</span>";
//method 1...
// document.body.append(div);
//method 2...
// document.body.prepend(div);
//method 3...
// document.body.before(div);
//method 4...
// document.body.after(div);
//method 5...
document.body.querySelector(".box").replaceWith(div);

//insertAdcentHTML
div.insertAdjacentHTML("afterbegin","<b>hello maharaj</b>");
div.insertAdjacentHTML("afterend","<span>kya hal chal</span>");
//classList ........
console.log(document.querySelector(".box").classList);
//classsName
console.log(document.querySelector(".box").className);