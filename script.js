const start_btn = document.querySelector(".start-quaiz ");
const quaiz_box = document.querySelector(".quaiz-box");
const que_text = quaiz_box.querySelector(".quaiz-text");
const option_box = quaiz_box.querySelector(".options");
const next_btn = quaiz_box.querySelector(".next-btn");

const total_q = document.querySelector(".quaiz-footer .total-que");
const count_que = document.querySelector(".quaiz-footer .cunt-que");
const result_box = document.querySelector(".result-box");

const total_que_r = document.querySelector(".total-que span");
const right_ans_r = document.querySelector(".right-ans span");
const wrong_ans_r = document.querySelector(".wrong-ans span");
const perc_r = document.querySelector(".percentage span");

const Result_footer = document.querySelector(".result-footer");
const exit = Result_footer.querySelector(".exit");
const again_quaiz = document.querySelector(".result-footer .again-quaiz");


const mark_wrong = '<i class="fa fa-times"></i>';
const mark_check = '<i class="fa fa-check"></i>';



start_btn.onclick = () => {
    quaiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");

}
total_q.innerText = questions.length;
total_que_r.innerText = questions.length
var question_index = 0
var right_ans = 0;
var wrong_ans = 0;
count_que.innerText = question_index + 1;
showquestion(question_index);

function showquestion(q_index) {
    que_text.innerText = questions[q_index].question;

    var Option_statement = "";
    for (i = 0; i < questions.length - 1; i++) {
        Option_statement += `<div class="option"> ${questions[q_index].Option[i]}</div>`;
    };

    option_box.innerHTML = Option_statement;
    var AllOption = option_box.querySelectorAll(".option");
    for (var j = 0; j < AllOption.length; ++j) {
        AllOption[j].setAttribute("onclick", "UserAnswer(this)");
    }
    next_btn.classList.add("inactive");
};



next_btn.onclick = () => {
    console.log(Result_footer);
    

    question_index++;
    if (questions.length > question_index) {
        showquestion(question_index);
        count_que.innerText = question_index + 1;

    } else {
        quaiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");        
        right_ans_r.innerText = right_ans;
        wrong_ans_r.innerText = wrong_ans;
        perc_r.innerText = (right_ans * 100) / questions.length + "%";

    }
    if (questions.length - 1 == question_index) {
        next_btn.innerText = "finish";
    }
};

function UserAnswer(answer) {

    let UserAns = answer.innerText;
    console.log(UserAns);
    let CorrectAns = questions[question_index].answer
    var AllOption2 = option_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive");

    if (UserAns == CorrectAns) {
        
        answer.classList.add("correct");
        answer.classList.add("disable");
        answer.insertAdjacentHTML("beforeend", mark_check);
        right_ans++;
    } else{
        
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", mark_wrong);
    wrong_ans++;
    }
    for (var i = 0; i < AllOption2.length; ++i) {

        if (AllOption2[i].innerText == CorrectAns) {
            AllOption2[i].classList.add("correct");
            AllOption2[i].insertAdjacentHTML("beforeend", mark_check);
        }

    }
    for (var j = 0; j < AllOption2.length; ++j) {
        AllOption2[j].classList.add("disable");
    }
}
function reset(){
    question_index = 0
    right_ans = 0;
    wrong_ans = 0;
    count_que.innerText = question_index + 1;
    showquestion(question_index);
}   

again_quaiz.onclick=() =>{
    quaiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();

}
exit.onclick=() =>{
    console.log(exit);
    start_btn.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();
}

