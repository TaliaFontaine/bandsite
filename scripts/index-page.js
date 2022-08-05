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

const commentsContainer = document.getElementById("comment-section");

function createComments(newComments) {
    container.innerHTMl = null;

    for(let i = 0; i < commentsEntered.length; i++) {
        const fullName = document.createElement("h3");
        fullName.classList.add("fullname");
        commentsContainer.appendChild(fullName);

        const dateEntered = document.createElement("div");
        dateEntered.classList.add("dateEntered");
        commentsContainer.appendChild(dateEntered);

        const comment = document.createElement("div");
        comment.classList.add("comment");
        commentsContainer.appendChild(comment);
        
    }
}
createComments(commentsEntered);


const user = document.querySelector("#user");

function addNewComment (event) {
    const newFullName = event.target.newComments.value;
    const newDateEntered = event.target.newComments.value;
    const newComment = event.target.newComments.value;
    let newCommentsObject = {
        name: newFullName,
        date: newDateEntered,
        comment: newComment,
    };
    
    const commentsArray = commentsEntered;
    commentsArray.unshift(newCommentObject);

    user.reset();   
}

//event listener
user.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    createComments(addNewComment());
});


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