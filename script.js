const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0)
})

let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 100;
        let height =sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }

    })
}





let questions = [
    {
        'question':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'javascript',
        'd':'PHP',
        'correct':'a'
    },

    {
        'question':'what does HTML stands for?',
        'a':'hyper toast markup language',
        'b':'hyper text markup language',
        'c':'hyper toast makeup language',
        'd':'hyphen text markup language',
        'correct':'b'
    },

    {
        'question':'what does CSS stands for?',
        'a':'case style sheets',
        'b':'casing styling sheet',
        'c':'cascading simple sheets',
        'd':'cascading style sheets',
        'correct':'d'
    },

    {
        'question':'choose the correct HTML element for the largest heading:',
        'a':'<heading>',
        'b':'<head>',
        'c':'<h1>',
        'd':'<6>',
        'correct':'c'
    },

    {
        'question':'whih computer language was designed to extract data from a database',
        'a':'BASIC',
        'b':'SQL',
        'c':'COBOL',
        'd':'FORTRAN',
        'correct':'b'
    },

    {
        'question':'which HTML tag is used to define an internal style sheet',
        'a':'<style>',
        'b':'<script>',
        'c':'<css>',
        'd':'<body>',
        'correct':'a'
    },

    {
        'question':'How do you insert a comment in a CSS file?',
        'a':'// this is a comment',
        'b':'!this is a comment',
        'c':'/*this is a comment*/',
        'd':'?? this is a comment ??',
        'correct':'c'
    },

    {
        'question':'which property is used to change the background color?',
        'a':'color',
        'b':'background-color',
        'c':'bgcolor',
        'd':'bground',
        'correct':'b'
    },

    {
        'question':'How do you write "Hello World" in an alert box?',
        'a':'msgBox("hello world");',
        'b':'alertBox("hello world");',
        'c':'msg("hello world");',
        'd':'alert("hello world");',
        'correct':'d'
    },

    {
        'question':'what is not a legal variable name?',
        'a':'Myvar',
        'b':'my_var',
        'c':'_myvar',
        'd':'my-var',
        'correct':'c'
    },

]





let index = 0;
let total = questions.length;
let correct = 0;
let incorrect = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options');

const loadQuestions = () => {
    if(index === total){
        return endQuiz();
    }
  
     
    if(index === total-1){
        document.getElementById("btn").innerHTML = `<h4 id="kunj" onclick=stopTime()>submit</h4>`
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    console.log(data);
}

const nextQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    
    if(ans == data.correct){
        correct++;
    }
    else{
        incorrect++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
               answer = input.value;
            }
        })
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("quesBox").innerHTML = `<h2>result</h2>`
    document.getElementById("btn").innerHTML = `<a href="home.html"><h5 id="k">home page</h5></a>`
    document.getElementById("btn").style.backgroundColor = "#008080";
    document.getElementById("k").style.color = "white";
    document.getElementById("box").innerHTML = `
        <div id="end-1">
        <h3> thankyou for participating in the quiz</h3>
        <h2> ${correct} / ${total} are correct</h2>
        <img src="images/img-31.png" height="100px" width="100px"/>
        </div>
    `
    document.getElementById("end-1").style.textAlign = "center";
    
}

//initial call
loadQuestions();



const startingTime = 5;
let time = startingTime * 60;
let is_examover =false;

const countdown = document.getElementById("countdown");

setInterval(update,1000);

function update(){

        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        if((minutes === 0 && seconds===0) || is_examover){
            countdown.innerHTML = `0:00`
            return 
        }
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        countdown.innerHTML = `${minutes}:${seconds}`
        
        time--;
}

function stopTime(){
    const time = 0;
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    if(minutes === 0 && seconds===0){
        is_examover=true;
        return countdown.innerHTML = `0:00`;
    }
}





