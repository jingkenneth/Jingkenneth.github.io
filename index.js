const btnlike1 = document.getElemtById("btnlike1")
const countlike1 = document.getElementById("countlike1")

function clicklike1(){
  let totallike1 = parseInt(countlike1.value) + 1
  countlike1.textContent = totalike1.toString()
}

btnlike1.addEventListener("click",clicklike1)
