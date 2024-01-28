const quizeContent = document.querySelector(".quizeContent");
const btn = document.querySelector(".btn button");
const MyRuleContent = document.querySelector(".rulesContent");
const exitBtn = document.querySelector(".rbtn .left");
const contBtn = document.querySelector(".rbtn .right");
const Question = document.querySelector(".questionContent");

btn.onclick = () =>{
    MyRuleContent.classList.add("activeInfo");
}

exitBtn.onclick = ()=>{
    MyRuleContent.classList.remove("activeInfo");
}




contBtn.onclick = () =>{
    quizeContent.style.display = "none";
    MyRuleContent.classList.remove("activeInfo");
    Question.classList.add("quizeShow");
    showQuestions(0);
}

// showing dynamic option
let questionCount = 0;

const NextBtn = document.querySelector(".nextBtn");
console.log(NextBtn)
NextBtn.onclick = ()=>{
    if(questionCount < questions.length - 1){
        questionCount ++
        showQuestions(questionCount);
    }else{
        console.log("You have completed successfully");
    }
}

// showing question and option
function showQuestions(index){
    // question showing here
    const que_text = document.querySelector(".text");
    let que_tag = "<h3>"+ questions[index].num + ". " + questions[index].question + "</h3>";
    que_text.innerHTML = que_tag;

    // option showing here
    const optionList = document.querySelector(".options");
    console.log(optionList);
    let optaion_tag = '<div class="option"><span>' + questions[index].queOptions[0] + '</span></div>'+
    '<div class="option"><span>' + questions[index].queOptions[1] + '</span></div>'+
    '<div class="option"><span>' + questions[index].queOptions[2] + '</span></div>'+
    '<div class="option"><span>' + questions[index].queOptions[3] + '</span></div>'; 
    optionList.innerHTML = optaion_tag;

    // showing question counter here
    const total_question = document.querySelector(".totalQuestion");
    total_que_tag = "<p>" + questions[index].num + " Of " + questions.length + "</p>";
    total_question.innerHTML = total_que_tag ;

    // selected option ans here

    const selectOption = optionList.querySelectorAll(".option");
    for(let i=0; i<selectOption.length; i++){
        selectOption[i].setAttribute("onclick", "optionSelected(this)");
    }
    
}


function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[questionCount].answer;

    if(userAns == correctAns){
        answer.style.color ="green";
    }else{
        answer.style.color = "red";
    }

}


