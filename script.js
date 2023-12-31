const task= document.getElementById("input-box")
const list= document.getElementById("list-container")
// This is to check whether the browser supports Service worker or not  
if("serviceWorker" in navigator)
// Register Returns a promise
navigator.serviceWorker.register('/service-worker.js').then(
  ()=>{
    console.log("Service Workere Registered")
  }
) .catch((err) => {
  console.log(err);
});


function onClickAdd(){
  if (task.value===""){
    alert("Please Add a task")
  }
  else{
      let li=document.createElement("li")
      li.innerHTML=task.value
      list.appendChild(li)
      let span=document.createElement("span")
      span.innerHTML="\u00d7"
      li.appendChild(span)

}
task.value=""
this.saveData()
}

function add(e){
  if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that runs
      this.onClickAdd()
  }
}

list.addEventListener("click",function(e){
if (e.target.tagName==="LI"){
  e.target.classList.toggle("checked")
  saveData()
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  saveData()
} 
},false)

function saveData(){
  localStorage.setItem("data",list.innerHTML)
}

function showData(){
  list.innerHTML= localStorage.getItem("data")
}

showData()

