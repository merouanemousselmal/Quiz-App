const quizData = [
    {
        question: "An element is composed of...",
        a: "Opening tag, closing tag",
        b: "Opening tag, content, closing tag",
        c: "Opening tag, content",
        d: "Content, closing tag",
        correct: "b",
    },
    {
       question: "Which statement/s about CSS are true?",
       a: "CSS goes inside <style> element",
       b: "The <style> element should be inside the <head> element",
       c: "CSS goes inside the <body> element",
       d: "A & B",
       correct: "d",
    },
    {
        question: "What is the tag beginning the section of the Web page that is visible to the viewer/user?",
        a: "<Title>",
        b: "</Title>",
        c: "<Body>",
        d: "</Body>",
        correct: "c",
    },
    {
        question: "Which tag would be used for a line break",
        a: "Lb",
        b: "Br",
        c: "Brk",
        d: "Ln",
        correct: "b",
    },
    {
        question: "Which format is best for high quality Web photos?",
        a: "TIF",
        b: "GIF",
        c: "JPEG",
        d: "QRL",
        correct: "c",
    },
    {
        question: "Which format are exemples of lossless files?",
        a: "JPEG & GIF",
        b: "GIF & TIF",
        c: "RGB & CMYK",
        d: "PNG & JPEG",
        correct: "b",
    },
    {
        question: "Which tag begins emphasized text",
        a: "<em>",
        b: "<um>",
        c: "</em>",
        d: "</um>",
        correct: "a",
    },
    {
        question: "The document type declaration, or <!DOCTYPE html>...",
        a: "Is placed at the very beginning of the HTML document.",
        b: "Informs web browsers which version of HTML is begin used.",
        c: "Both A & B",
        d: "Is none of the above",
        correct: "c",
    },
    {
        question: "Creates horizontal lines",
        a: "<horz>",
        b: "<hrz>",
        c: "<hr>",
        d: "<zl>",
        correct: "c",
    },
    {
        question: "A GIF format is/has...",
        a: "256 colors",
        b: "A larger size than jpeg",
        c: "Lossless",
        d: "All are correct",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly </h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
