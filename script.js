const task= document.getElementById("input-box")
const list= document.getElementById("list-container")


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
}

function add(e){
  if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that runs
      this.onClickAdd()
  }
}

list.addEventListener("click",function(e){
  console.log("hi line 30",e.target)
if (e.target.tagName==="LI"){
  e.target.classList.toggle("checked")
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
} 
},false)