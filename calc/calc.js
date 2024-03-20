let str=""
const buttons=document.querySelectorAll('.button')
function Backspace(str){
    let len=str.length;
    return str.substring(0,len-1);
}
buttons.forEach(button =>
    {
        button.addEventListener('click',function(){
            if(str.length>15){
                window.alert("Limit exceeded!");
            }
            else{
            if (str=="Syntax Error"||str=="Infinity"||str=="undefined"||str=="0"){
                str="";
            }
            str+=this.value;
            document.getElementById("text-area").textContent=str;
        }
        });
    });
document.getElementById("ac").onclick=function(){
    str=""
    document.getElementById("text-area").textContent="";
}
document.getElementById("c").onclick=function(){
    if(str=="Syntax Error"){
        console.log("HI");
        str="";
    }
    else{
        console.log("BI");
    str=Backspace(str);
    document.getElementById("text-area").textContent=str;
}
}
function Result(){
    try{
        str=String(eval(str));
        document.getElementById("text-area").textContent=str;
    }
    catch(e){
        str="Syntax Error"
        document.getElementById("text-area").textContent=str;
    }
}
document.addEventListener('keydown',function(event){
    if(["Enter","Backspace","Shift","1","2","3","4","5","6","7","8","9","0","-","=","/",".","+","%","*"].includes (event.key)){
    if(event.key=='Backspace'){
        str=Backspace(str);
        document.getElementById("text-area").textContent=str;
    }
    else if(event.key=="Enter" || (event.key=="=")){
        event.preventDefault()
        Result();
    }
    else if(event.key != "Shift"){
        if(str.length>15){
            window.alert("Limit exceeded!");
        }
        else{
        str+=event.key;
        document.getElementById("text-area").textContent=str;
        }
    }
    console.log("VAR");
}
});