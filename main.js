//Function to display Content
function displayContent(content){
    result.value += content
}
function ClearDisplay(){
    result.value =" "
}
//backspace
function backspace(){
    result.value = result.value.slice(0,-1)
}
//result
function equalClick(){
    result.value = eval(result.value)
}
