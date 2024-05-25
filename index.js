const btnlike1 = document.getElemtById("btnlike1")
const countlikes1 = document.getElementById("countlikes1")

function clicklike1(){
  let totallikes1 = parseInt(countlikes1.value) + 1
  countlikes1.textContent = totalikes1.toString()
}

btnlike1.addEventListener("click",clicklike1)
