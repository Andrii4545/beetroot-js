// TASK 1
btn = document.getElementById("task_button");
btn.onclick = function () {
    let el = document.getElementById("task_text").value;
    if (isNaN(el)){
        document.getElementById("task_answer").textContent = "нужны цифры"
    }else if (el < 0 ){
        document.getElementById("task_answer").textContent =  "забери минус"
    }
    else if (el <= 3){
        document.getElementById("task_answer").textContent =  "ребенок"
    }
    else if (el <= 11 && el >= 4){
        document.getElementById("task_answer").textContent =  "дитя"
    }
    else if (el <= 18 && el >= 12){
        document.getElementById("task_answer").textContent =  "подросток"
    }
    else if (el <= 59 && el >= 19){
        document.getElementById("task_answer").textContent =  "взрослый человек"
    }
    else if (el >= 60 && el <= 100 ){
        document.getElementById("task_answer").textContent =  "пожилой человек"
    }
    else if (el >100 && el <150){
        document.getElementById("task_answer").textContent =  "старец мудрец"
    }
    else if (el >151 ){
        document.getElementById("task_answer").textContent =  "земля тебе пухом"
    }
    
}

//TASK 2
btn1 = document.getElementById("task_button1");
btn1.onclick = function (){
    let symb = [")!@#$%^&*("]
    let numbr = ["1234567890"]
    let el = document.getElementById("task_text").value
    
}


// TASK 3
btn2 = document.getElementById("task_button2");
btn2.onclick = function a (){
    let numbr = document.getElementById("task_text2").value;
    let nb = String(numbr);
    let a = nb[0];
    let b = nb[1];
    let c = nb[2];
    if (isNaN(numbr)){
        document.getElementById("task_answer2").textContent = "нужны цифры"
    }else if (numbr.toString().length !== 3 || numbr < 0) {
        document.getElementById("task_answer2").textContent = "error" 
    }else if(a == b || b == c || c == a){
        document.getElementById("task_answer2").textContent = "bingo" 
    }else{
        document.getElementById("task_answer2").textContent = "нету совпадений" 
    }
    
    
}