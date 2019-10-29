/* eslint-disable prettier/prettier */
var count = 0;
var question = 0;
var end = false;
var order = [1, 2, 3, 4];

//To add a new question with answers, repeat the template
var questionSet2 = [
    [
        ["What season?"], [
            ["Winter", "https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"],
            ["Autumn", "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&w=1000&q=80"],
            ["Summer", "https://www.travelblat.com/wp-content/uploads/2014/07/summer-vacation.jpg"],
            ["Spring", "https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg"]
        ]
    ],
    [
        ["What element?"], [
            ["Ice", "https://images.unsplash.com/photo-1548097160-627fd636ee56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"],
            ["Storm", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/22/15/lightning.jpg?w968h681"],
            ["Fire", "https://images.pexels.com/photos/672636/pexels-photo-672636.jpeg?cs=srgb&dl=blaze-bonfire-burn-672636.jpg&fm=jpg"],
            ["Earth", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwO7UaIbPZQJQKz-H_E0RDOHqHWaqDUItaLK5q1pKKnOgXUllq"]
        ]
    ],
    [
        ["What end?"], [
            ["Death", "https://www.verywellmind.com/thmb/yjo1yq8GXV2iIv072fxWfCnXyNQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Preocupation-With-Death-56a09d095f9b58eba4b2110f.jpg"],
            ["Doom", "https://www.canald.com/polopoly_fs/1.1411139.1399646837!/image/apocalypse3.jpg_gen/derivatives/cd_796_449/apocalypse3.jpg"],
            ["Nothing", "https://miro.medium.com/max/1050/1*TNeuk9C_SnVZzpI01HZvrQ.jpeg"],
            ["Life", "https://cottagelife.com/wp-content/uploads/2018/06/shutterstock_609086588-1200x784.jpg"]
        ]
    ],
    [
        ["What band?"], [
            ["Rammstein", "https://media.ouest-france.fr/v1/pictures/MjAxOTAzOWZlOTlhYzliYzUxYjhjYzk2NjkxMWZmZmY3ZGJlOWI?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=72c1afde787ccd416ddfcd98dbdf27ff793a665e4c461695ab055931f3cd8946"],
            ["Dethklok", "https://www.wweek.com/resizer/ikuD92ICmtIlStJ6mgVNR3bw6hc=/1200x0/filters:quality(100)/static.wweek.com/image-archive/10875/music_dethklok.jpg"],
            ["Eluveitie", "https://cdn.wegow.com/media/artists/eluveitie/eluveitie-1492555894.02.320x320.jpg"],
            ["Epica", "https://www.metalzone.fr/wp-content/uploads/2019/10/epica-1200x800.jpg"]
        ]
    ]
];

//Sets up the first question on page load
function onLoad() {
    //Set the question title
    document.getElementsByClassName("questionT")[0].innerHTML = questionSet2[0][0][0];

    //gets all the cards and shuffle them
    var cards = document.getElementsByTagName("div");
    shuffleQuestions(order, cards, questionSet2);
    //sets the content of the cards
    for (i = 0; i < questionSet2[0][1].length; i++) {
        cards.namedItem(i + 1).getElementsByClassName("label")[0].innerHTML = questionSet2[0][1][i][0];
        cards.namedItem(i + 1).getElementsByClassName("image")[0].setAttribute("src", questionSet2[0][1][i][1]);
    }
}

//Adds to the result and randomises the next answers
function getAnswerRandV2(clickedId, questionSet) {
    var longueur = questionSet.length - 1;
    var cards = document.getElementsByTagName("div");
    var currentCard;

    //console.log(cards);

    //if it isn't the last question
    if (question < longueur) {
        count += parseInt(clickedId);
        question++;
        //change the question name
        document.getElementsByClassName("questionT")[0].innerHTML = questionSet[question][0][0];
        //change the question ID (randomize it)
        shuffleQuestions(order, cards, questionSet);
        //change cards images and text
        for (i = 0; i < questionSet[question][1].length; i++) {
            currentCard = cards.namedItem(i + 1);
            currentCard.getElementsByClassName("label")[0].innerHTML = questionSet[question][1][i][0];
            currentCard.getElementsByClassName("image")[0].setAttribute("src", questionSet[question][1][i][1]);
        }
    } else {
        if (!end)
            count += parseInt(clickedId);
        end = true;
        if (count <= 6)
            alert("ANSWER A");
        else if (count > 6 && count <= 11)
            alert("ANSWER B");
        else if (11 < count)
            alert("ANSWER C");
    }
    console.log(count);
}

//Shuffle an array
export function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//Shuffle the cards
function shuffleQuestions(order, cards, questionSet) {
    order = shuffle(order);
    for (i = 0; i < questionSet[question][1].length; i++) {
        currentCard = cards[i];
        currentCard.setAttribute("id", order[i]);
    }
    return cards;
}

//Reset the page
function reset() {
    count = 0;
    question = 0;
    end = false;
    onload();
}