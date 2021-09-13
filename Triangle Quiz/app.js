const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-btn")
const output = document.querySelector("#message");

const correctAnswer = ["90°", "right angle","20","side CA","BaseIntoPerpendicular","Hypotenuse"]

function clickHandler() {
    let score = 0;
    let index = 0;
    const newForm = new FormData(quizForm)
    for (let value of newForm.values()){
        if(value === correctAnswer[index]){
            score++
        }
        index++
    }
    output.innerText = `Your Score is : ${score}`
}
submitButton.addEventListener("click", clickHandler)