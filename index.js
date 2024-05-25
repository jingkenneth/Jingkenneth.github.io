const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")

function clickLike1(){
  let totalLike1 = parseInt(countLike1.value) + 1
  countlike1.textContent = totaLike1.toString()
}
function clickLikes2(){
  let totalLike2 = parseInt(countLikes2.value) + 1
  countlikes1.textContent = totaLike2.toString()
}
btnLike1.addEventListener("click",clickLike1)
