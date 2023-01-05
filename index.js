
// Select some elements...
let pageHeader = document.querySelectorAll("#page-header")

console.log(pageHeader)
for(let i = 0; i < pageHeader.length; i++) {
    pageHeader[i].style.color = "green"
    pageHeader[i].style.fontFamily = "Serif-sans"
}



let dogNames = document.querySelectorAll(".dog-name")
console.log(dogNames)
for(let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.color = "red"
}
 let dogImages = document.querySelectorAll("img")
 