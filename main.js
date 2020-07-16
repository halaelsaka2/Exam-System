class Question {
    constructor(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

var q1 = new Question('What is your name', ['Hala', 'lolo', 'lolita', 'halhola'],'halhola');
var q2 = new Question('How old are you', ['23', '22', '26', '25'], '22');
var q3 = new Question('Who is your supervisor in yor track', ['menna', 'mohamed','aya','ahmed'],'menna');
var q4 = new Question('How many Hours do you spend in ITI everyday', ['5','7','8','9'],'9');
var q5 = new Question('How many your sister', ['2', '3', '5', '1'], '2');
var q6 = new Question('How many days in year', ['365', '15.5','1', '587'],'365');
var q7 = new Question('How many hours in day', ['24.5', '55', '24', '36'],'24');
var q8 = new Question('Do you love running', ['no', 'sure', 'sometimes','not sure'], 'no');
var q9 = new Question('When you wake up in the morning  ', ['7', '7:30', '8', '6'], '7:30');
var q10 = new Question('Do you love ITI', ['yeeeeees', 'NO!', 'Sure', 'yes'],'yeeeeees');

var arrayOfQues = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var corretAnser = [];

var rondomQues = [];
var i = 0;
chooseQuestions();

function getQuesForm() {

    document.getElementById('signUp').style.display = 'none';
    document.querySelector('.container2').style.display = 'flex';
    document.querySelector('.quesBody').textContent = (i + 1) + '-' + arrayOfQues[rondomQues[i]].question;
    console.log(arrayOfQues[rondomQues[i]].answers.length)
    for (var j = 1; j <= arrayOfQues[rondomQues[i]].answers.length; j++) {
        // console.log(document.querySelector('.ans' + j))
        document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[i]].answers[j-1];
    }
    console.log(corretAnser)
}

function chooseQuestions() {
    while (rondomQues.length < 5) {
        var numberOfQues = Math.floor(Math.random() * 10);
        if (rondomQues.indexOf(numberOfQues) === -1) {
            rondomQues.push(numberOfQues);
        }
    }

}
for (var z = 0; z < rondomQues.length; z++) {

    corretAnser.push(arrayOfQues[rondomQues[z]].correctAnswer)
}

document.querySelector('.btnNext').addEventListener('click', function () {
    document.querySelectorAll('.ans').forEach(function (cur) {
        if(cur.checked===true){
            console.log(cur.dataset.active);
            var c= document.querySelector('.ans'+parseInt(cur.dataset.active)).textContent;
            console.log(c)
            answerss.push(c);
        }
        cur.checked = false;
        
    })
    if (i !== 4) {
        i++;
        document.querySelector('.quesBody').textContent = (i + 1) + '-' + arrayOfQues[rondomQues[i]].question;
        for (var j = 1; j < arrayOfQues[rondomQues[i]].answers.length + 1; j++) {
            document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[i]].answers[j - 1];
        }
    }

    
    
})
document.querySelector('.score').addEventListener('click', function () {
    isEqual();

})
document.querySelector('.btnPrev').addEventListener('click', function () {
    document.querySelectorAll('.ans').forEach(function (cur) {
        cur.checked = false;
    })
    if (i > 0) {
        i--;
        document.querySelector('.quesBody').textContent = (i + 1) + '-' + arrayOfQues[rondomQues[i]].question;
        for (var j = 1; j < arrayOfQues[rondomQues[i]].answers.length + 1; j++) {
            console.log(document.querySelector('.ans' + j))
            document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[i]].answers[j - 1];
        }
    }
    console.log(i + "in last prev")
})

document.querySelectorAll('.cell').forEach(function (cur) {
    
    cur.addEventListener('click', function (e) {
        i = parseInt(e.target.dataset.active);
        document.querySelector('.quesBody').textContent = (i + 1) + '-' + arrayOfQues[rondomQues[i]].question;
        document.querySelectorAll('.ans').forEach(function (cur) {
            cur.checked = false;
        })
        for (var j = 1; j < arrayOfQues[rondomQues[e.target.dataset.active]].answers.length; j++) {
            console.log(document.querySelector('.ans' + j))
            document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[e.target.dataset.active]].answers[j];
        }
        console.log(i);
    })
})
var array = [];
document.querySelector('.mark').addEventListener('click', function (e) {
    document.querySelectorAll('.ans').forEach(function (cur) {
        cur.checked = false;
    })
    if (array.indexOf(i) === -1) {
        array.push(i);
        var html = '<span class="markedques"data-active="%cur%">Q%num%</span><br>'
        html = html.replace('%num%', i + 1);
        html = html.replace('%cur%', i);
        document.querySelector('.marked-question').insertAdjacentHTML('beforeend', html);
        document.querySelectorAll('.markedques').forEach(function (cur) {

            cur.addEventListener('click', function (e) {

                document.querySelector('.quesBody').textContent = parseInt(e.target.dataset.active) + 1 + '-' + arrayOfQues[rondomQues[parseInt(e.target.dataset.active)]].question;
                for (var j = 1; j < arrayOfQues[rondomQues[parseInt(e.target.dataset.active)]].answers.length + 1; j++) {
                    console.log(document.querySelector('.ans' + j))
                    document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[parseInt(e.target.dataset.active)]].answers[j - 1];
                }
            })
        })
    }

    if (i !== 4) {
        i++;
        document.querySelector('.quesBody').textContent = (i + 1) + '-' + arrayOfQues[rondomQues[i]].question;
        for (var j = 1; j < arrayOfQues[rondomQues[i]].answers.length + 1; j++) {
            console.log(document.querySelector('.ans' + j))
            document.querySelector('.ans' + j).textContent = arrayOfQues[rondomQues[i]].answers[j - 1];
        }
    }
})



var answerss = [];
var scoreArr =[];
var truecount = 0;
var falsecount = 0;
function isEqual() {
    console.log(corretAnser);
    console.log(answerss)
    for (var k = 0; k < corretAnser.length; k++) {
        if (corretAnser[k] !== answerss[k]) {

            scoreArr.push(false);
            falsecount++;
        } else {
            scoreArr.push(true);
            truecount++;
        }
    }
    if(truecount>falsecount){
        alert(`congratulation!!..
        you passed the Exam`)
    }else{
        alert(`oh ):
        you failed the Exam`)
    }
    console.log(scoreArr)
}
