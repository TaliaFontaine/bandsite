const commentsContainer = document.querySelector(".comment-entered-section");
const commentsURL = "https://project-1-api.herokuapp.com/comments?api_key=b5af2f5b-bb6b-46ac-9cf2-1e9701b06b8b";

const dateFormat = (timestamp) => {
    console.log(timestamp);
    let currentDate = new Date(timestamp);
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth()+1;
    let yyyy = currentDate.getFullYear(); 
    let dateEntered = dd + "/" + mm + "/" + yyyy;
    return dateEntered;
};

const displayComment = (commentsEntered) => {
    commentsContainer.innerHTML = "";

    commentsEntered.sort((a, b) => {
        return b.timestamp - a.timestamp
    });    
    
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
    console.log(response.data)
    displayComment(response.data); 
}).catch(error => console.log(error));

 //form
const user = document.querySelector(".form-section__container__user");

//event listener
user.addEventListener("submit", (event) => {
    event.preventDefault();
    const newFullName = event.target.full_name.value;
    if(newFullName === "") {
        alert("Must enter your name");
        return;
    } else {
        console.log("This full name is valid");
    }
    const newComment = event.target.comments.value;
    if(newComment === "") {
        alert("Must enter comment field");
        return;
    } else {
        console.log("This comment is valid");
    }

    axios.post(commentsURL, {
        name: newFullName,
        comment: newComment,
      })
      .then(function (response) {
        axios.get(commentsURL).then((response) => {
            commentsContainer.innerText = "";
            console.log(response.data);
            displayComment(response.data); 
        });
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });

    user.reset();
});