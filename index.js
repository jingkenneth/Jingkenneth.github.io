const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
const btnDisLike1 = document.getElementById("btnLike2")
const countDisLikes1 = document.getElementById("countLikes2")
function clickLike1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
function clickDisLike2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
function clickLike1() {
  let totalDisLikes1 = parseInt(countDisLikes1.value) + 1
  countDisLikes1.textContent = totalDiaLikes2.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnDisLike1.addEventListener("click",clicDiskLike1)
