const commentsEntered = [
    {
    name: "Conner Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

const commentsContainer = document.querySelector(".comment-entered-section");

//create the array for each item

function displayComment(data) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment-card");
    
    const userPic = document.createElement("div");
    userPic.classList.add("user-profile-pic");
    commentsContainer.appendChild(userPic);

    const userCircle = document.createElement("div");
    userCircle.classList.add("user-profile-pic__circle");
    userPic.appendChild(userCircle);

    const fullName = document.createElement("h3");
    fullName.classList.add("fullname");
    fullName.innerText = data.name;
    commentCard.appendChild(fullName);

    const dateEntered = document.createElement("div");
    dateEntered.classList.add("dateEntered");
    dateEntered.innerText = data.date;
    commentCard.appendChild(dateEntered);

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerText = data.comment;
    commentCard.appendChild(comment);

    commentsContainer.appendChild(commentCard);
}

commentsEntered.forEach((event) => {
    displayComment(event);
});

 //form
const user = document.getElementById("user");

//event listener
user.addEventListener("submit", (event) => {
    event.preventDefault();
    const newFullName = event.target.full_name.value;
    const newDateEntered = dateEntered;
    const newComment = event.target.comments.value;
    commentsContainer.innerText = "";
    commentsEntered.unshift({
        name: newFullName,
        date: newDateEntered,
        comment: newComment,
    });
    commentsEntered.forEach((event) => {
        displayComment(event);
    });
    user.reset();
});

//date comment entered code
let currentDate = new Date();
let dd = currentDate.getDate();
let mm = currentDate.getMonth()+1;
let yyyy = currentDate.getFullYear(); 
let dateEntered = dd + "/" + mm + "/" + yyyy;


//error catch code
/*const checkNewFullName = (event) => {
    if(newFullName === "") {
        alert("Must enter your name");
    } else if (newFullName <10) {
        alert("Must enter your first and last name");
    } else {
        console.log("This full name is valid");
    }
}*/