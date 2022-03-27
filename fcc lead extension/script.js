
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save");
const listEl = document.getElementById("list");


inputBtn.addEventListener("click", function() {
    console.log("Button clicked JS");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
})
function renderLeads() {
    let listItems = ""
    for (let i=0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
        console.log(listItems);
//     const li = document.createElement("li");
//     li.textContent = myLeads[i];
//     listEl.append(li);  
    }
 listEl.innerHTML=listItems
 console.log(listItems);
}

// const contEl = document.getElementById("container");
// contEl.innerHTML = "<button>Buy!</button>";

// contEl.addEventListener ("click", function thanks (){
//     contEl.innerHTML += "<p>Thanks for buying<p>"

// })
