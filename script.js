var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("click", function(dets){
    cursor.Style.left = dets.x+"px";
})