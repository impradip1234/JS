console.log("hello")

function Createcards(title, cName, views, monthsOld, duration, thumbnail){
if(views>1000 && views<1000000){
    views=views/1000+"K";
}
else if(views>1000000){
    views=views/1000000+"M";
}
else{
    views=views;
}
let HTML = `
<div class="cardcontainer">
    <div class="card">
        <div class="img">
            <img src="${thumbnail}" alt="thumbnail">
        </div>

        <div class="text">
            <h4>${title}</h4>
            <p>${cName} · ${views} views · ${monthsOld} months ago</p>
        </div>

        <div class="time">
            ${duration}
        </div>
    </div>
</div>`

document.body.insertAdjacentHTML("beforeend", HTML)
}


// function call
Createcards(
"Introduction to Backend | sigma web dev video #1",
"CodeWithHarry",
56000,
4,
"23:30",
"https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg"
)

Createcards(
"Introduction to Backend | sigma web dev video #2",
"CodeWithHarry",
5600000000,
3,
"2:40",
"https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg"
)
