let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

//Checking localStorage before rendering
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") ) // Get the leads from the localStorage - PS: JSON.parse()  // Store it in a variable, leadsFromLocalStorage

// Check if leadsFromLocalStorage is truthy
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);  
}

// the array, myLeads becomes the variable leads, which is accessible inside the body of the function

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
});

function render(leads) { 
    let listItems = ""

    for (let i = 0; i < leads.length; i += 1){
        //listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"; 
        listItems += `<li><a target = "_blank" href="${leads[i]}">${leads[i]}</a></li>`
    }

    ulEl.innerHTML = listItems;

};




deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});



inputBtn.addEventListener("click", function(){          // We pass in first the event we want to listen for(clicks), then what we want to trigger when the user clicks
    myLeads.push(inputEl.value);  // To push a value from the input field
    inputEl.value = ""
    // Saving the myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    // To verify that it works:
    console.log(localStorage.getItem("myLeads"));
});
































































// create elements
// set text content
// append to ul
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEl.append(li);




/* javascript object notation */

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// Use boolean() to check for truthy or falsy values
