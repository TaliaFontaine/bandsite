const commentsContainer = document.querySelector(".comment-entered-section");
const commentsURL = "https://project-1-api.herokuapp.com/comments?api_key=b5af0f5b-bb6b-46ac-9cf2-1e9701b06b8b";

const dateFormat = (timestamp) => {
    console.log(timestamp);
let currentDate = new Date(timestamp);
let dd = currentDate.getDate();
let mm = currentDate.getMonth()+1;
let yyyy = currentDate.getFullYear(); 
let dateEntered = dd + "/" + mm + "/" + yyyy;
return dateEntered;
}

const displayComment = (commentsEntered) => {
    commentsContainer.innerHTML = "";

    commentsEntered.forEach((data) => {
        let commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");
    
        const userPic = document.createElement("div");
        userPic.classList.add("comment-card__user-profile");
        commentCard.appendChild(userPic);

        const userCircle = document.createElement("div");
        userCircle.classList.add("comment-card__user-profile__circle");
        userPic.appendChild(userCircle);

        const topContainer = document.createElement("div");
        topContainer.classList.add("comment-card__top-container");
        commentCard.appendChild(topContainer);

        const fullName = document.createElement("h3");
        fullName.classList.add("comment-card__top-container__fullname");
        fullName.innerText = data.name;
        topContainer.appendChild(fullName);

        //timestamp to date code ECMAScript Date object
        //let dateStamp = new Date(data.timestamp)

        const dateEntered = document.createElement("div");
        dateEntered.classList.add("comment-card__top-container__dateEntered");
        dateEntered.innerText = dateFormat(data.timestamp);
        topContainer.appendChild(dateEntered);

        const comment = document.createElement("div");
        comment.classList.add("comment-card__comment");
        comment.innerText = data.comment;
        commentCard.appendChild(comment);

        commentsContainer.appendChild(commentCard);
    });
};

axios.get(commentsURL).then((response) => {
    console.log(response.data);
    //.catch(error => console.log(error))

    displayComment(response.data); 
});

/*commentsEntered.forEach((event) => {
    displayComment(event);
});*/

/*axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/

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