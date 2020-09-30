const Color= {

ID:[

 {
   word:"red",
   options:['Pink','Blau','Grün','Rot'],
   img:'../quizz game/Game/color/red.png',
   rightAnswer:"Rot"


 },
 {
 word:"blue",
   options:['Pink','Blau','Grün','Rot'],
   img:'../quizz game/Game/color/blue.png',
   rightAnswer:"Blau"

 },{
 word:"green",
   options:['Pink','Blau','Grün','Rot'],
   img:'../quizz game/Game/color/green.png',
   rightAnswer:"Grün"

},

{
    word:"yellow",
      options:['Pink','Gelb','Grün','schwarz'],
      img:'../quizz game/Game/color/yellow.png',
      rightAnswer:"Gelb"
   
   },
   {
    word:"black",
      options:['Pink','Gelb','Grün','schwarz'],
      img:'../quizz game/Game/color/black.jpeg',
      rightAnswer:"schwarz"
   
   },
   {
    word:"yellow",
      options:['Pink','Gelb','Grün','schwarz'],
      img:'../quizz game/Game/color/yellow.png',
      rightAnswer:"Gelb"
   
   },
   {
    word:"orange",
      options:['Pink','Gelb','Orange','schwarz'],
      img:'../quizz game/Game/color/orange.jpg',
      rightAnswer:"Orange"
   
   },
   {
    word:"pink",
      options:['Rosa','lila','rot','weiß'],
      img:'../quizz game/Game/color/pink.png',
      rightAnswer:"Rosad"
   
   },
   {
    word:"white",
      options:['Rosa','lila','rot','weiß'],
      img:'../quizz game/Game/color/white\.png',
      rightAnswer:"weiß"
   
   },
   {
    word:"purple",
      options:['Rosa','lila','rot','weiß'],
      img:'../quizz game/Game/color/purple.jpg',
      rightAnswer:"lila"
   
   }

]


};

const Animals={

ID:[{

    word:"snake",
    options:['Frosch', 'Schlange', 'warum', 'Elefant'],
    img:'../quizz game/Game/animel/snick.jpeg',
    rightAnswer:"Schlange"

},
{

    word:"frog",
    options:['Frosch', 'Schlange', 'warum', 'Elefant'],
    img:'../quizz game/Game/animel/frong.jpeg',
    rightAnswer:"Frosch"

},
{

    word:"elephant",
    options:['Frosch', 'Schlange', 'warum', 'Elefant'],
    img:'../quizz game/Game/animel/elephant.jpeg',
    rightAnswer:"Elefant"

},
{

    word:"Lama",
    options:['Frosch', 'Schlange', 'Lama', 'Elefant'],
    img:'../quizz game/Game/animel/Warum.jpg',
    rightAnswer:"Lama"

},{
word:"dog",
options:['Hund', 'Katze', 'Pferd', 'Tiger'],
img:'../quizz game/Game/animel/dog.jpeg',
rightAnswer:"Hund"

},
{

word:"cat",
options:['Hund', 'Katze', 'Pferd', 'Tiger'],
img:'../quizz game/Game/animel/cat.jpeg',
rightAnswer:"Katze"

},
{

word:"horse",
options:['Hund', 'Katze', 'Pferd', 'Tiger'],
img:'../quizz game/Game/animel/hores.jpeg',
rightAnswer:"Pferd"

},
{

word:"tiger",
options:['Hund', 'Katze', 'Pferd', 'Tiger'],
img:'../quizz game/Game/animel/tiger.jpeg',
rightAnswer:"Tiger"

},{
word:"camel",
options:['Hund' ,'Löwe', 'Kamel', 'Tiger'],
img:'../quizz game/Game/animel/camel.jpg',
rightAnswer:"Kamel"

},{
word:"lion",
options:['Hund' ,'Löwe', 'Kamel', 'Tiger'],
img:'../quizz game/Game/animel/lion.jpeg',
rightAnswer:"Löwe"
}

]


};

const Job={
ID:[ 

    {
        word:"teacher",
        options:['Lehrer', 'Dozent', 'Busfahrer', 'Taxifahrer'],
        img:'',
        rightAnswer:"Löwe"
        },

        {
            word:"lecturer",
            options:['Lehrer', 'Dozent', 'Busfahrer', 'Taxifahrer'],
            img:'',
            rightAnswer:"Dozent"
            },

            {
                word:"taxi driver",
                options:['Lehrer', 'Dozent', 'Busfahrer', 'Taxifahrer'],
                img:'',
                rightAnswer:"Taxifahrer"
                },


                {
                    word:"farmer",
                    options:['LKW-Fahrer', 'Bauer', 'Kuhhirte', 'Soldat'],
                    img:'',
                    rightAnswer:"Kuhhirte"
                    },{

                    word:"Truck driver",
                    options:['LKW-Fahrer', 'Bauer', 'Kuhhirte', 'Soldat'],
                    img:'',
                    rightAnswer:"LKW-Fahrer"
                    },
            
                    {
                        word:"cowherd",
                        options:['LKW-Fahrer', 'Bauer', 'Kuhhirte', 'Soldat'],
                        img:'',
                        rightAnswer:"Kuhhirte"
                        },
            
                        {
                            word:"soldier",
                            options:['LKW-Fahrer', 'Bauer', 'Kuhhirte', 'Soldat'],
                            img:'',
                            rightAnswer:"Soldat"
                            },
            
            
                            {
                                word:" farmer",
                                options:['LKW-Fahrer', 'Bauer', 'Kuhhirte', 'Soldat'],
                                img:'',
                                rightAnswer:"Kuhhirte"
                                },      
                                {   
                                word:" DJ",
                                options:['LKW-Fahrer, Barkeeper, DJ, Soldat'],
                                img:'',
                                rightAnswer:"DJ"
                                }, 
                                 {    
                                
                                word:" bartender",
                                options:['LKW-Fahrer, Barkeeper, DJ, Soldat'],
                                img:'',
                                rightAnswer:"Barkeeper"
                                },     


]


};

var catagory;
var index = 0;
var score = document.getElementById("counterScore")

function gameQuiz(){


    catagory = document.getElementById("catagory")
    score = document.getElementById("scorecounter")
    var myAnswer = document.getElementsByClassName("myAnswer")
    var picture = document.getElementById("picture")
    switch (catagory.innerHTML) {
        case "Color":
            catagory = Color
            break;
        case "Animals":
            catagory = Animals
            break; 
        case "Job":
            catagory = Job
            break;

}
picture.src = catagory[index].img
var i = 0;
for (const answer of myAnswer) {
    answer.value = catagory[index].options[i];
    answer.innerHTML = catagory[index].options[i]
    i++
}
}

function gameOver(){// game over

    alert("You win! Your score is: " + score.innerHTML)
}

function rightA() 
{
    console.log(score.innerHTML)
    score.innerHTML = 1 + Number(score.innerHTML);
    alert(" You Right ")
    nextQ()
}

function wrongA() {
//wrong answer

    console.log(score.innerHTML)
    score.innerHTML = Number(score.innerHTML) - 0.5;
    alert("You Wrong")
}

function nextQ(){

    //next question

    console.log(index)
    console.log(catagory.length)
    index++
    if (index < catagory.length) {
        game();
    }
    else{
        gameOver();
    }
}
function previousQustion(){
    index--
    game();
}

function myAnswer(userAnswer){
    if (userAnswer == catagory[index].rightA) {
        rightA()
    }
    else{
        wrongA()
    }
    
}
