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
}
task.value=""
}

function add(e){
  if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that runs
      console.log(e.preventDefault())
      this.onClickAdd()
  }
}