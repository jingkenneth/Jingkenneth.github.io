const btnLike1 = document.getElemtById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLike1 = parseInt(countLike1.value) + 1
  countlike1.textContent = totaLike1.toString()
}

btnLike1.addEventListener("click",clickLike1)
