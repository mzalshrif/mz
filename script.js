var text = document.getElementById("text");
var result = document.getElementById("result");
var select = document.getElementById("select-text");

text.addEventListener("input", ()=>{
    play();
});
select.addEventListener("change", ()=>{
    play();
})

function play(){
   if(select.value == "decode"){
result.value = atob(text.value);
}else{
    result.value = btoa(text.value);
}

}