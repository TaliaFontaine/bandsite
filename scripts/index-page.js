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

const commentsContainer = document.querySelector(".comment-container");

/*function createCommentsContainer(commentsArray) {
    for(let i = 0; i < commentsEntered.length; i++) {
        let listItem = document.createElement("li");
        listItem.classList.add("comment-container__item");
        listItem.innerText = commentsArray[i];
        
        commentsContainer.appendChild(listItem);
    }
}

createCommentsContainer(commentsEntered);*/



//create the array for each item



function displayComment(data) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment-card")
    

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

function addNewComment (event) {

    
 
}

//event listener
user.addEventListener("submit", (event) => {
    event.preventDefault();
    const newFullName = event.target.full_name.value;
    const newDateEntered = new Date().toString();
    const newComment = event.target.comments.value;
    commentsContainer.innerText = "";
    commentsEntered.unshift( {
        name: newFullName,
        date: newDateEntered,
        comment: newComment,
    });
    commentsEntered.forEach((event) => {
        displayComment(event);
    });
});

//error catch code
/*const handleSubmit = (event) => {
    console.log(event.target.name.value);
    let fullName = document.getElementById("fullname").value;
    document.getElementById("comment").value;
    if(fullName==="") {
        alert("Enter your full name");
    } else {
        console.log(fullName);
    }

    
}*/