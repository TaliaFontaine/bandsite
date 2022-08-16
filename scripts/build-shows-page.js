const buyTicketsSection = document.querySelector(".buy-tickets-section");
const showDatesURL = "https://project-1-api.herokuapp.com/showdates?api_key=b5af2f5b-bb6b-46ac-9cf2-1e9701b06b8b";

(function() {
    let daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    Date.prototype.getDayName = function () {
    return daysOfWeek[this.getDay()];
    };
    Date.prototype.getMonthName = function() {
        return months[ this.getMonth()];
    };
})();


const dateFormat = (date) => {
    console.log(date);
    let currentDate = new Date(date);
    let dayOfWeek = currentDate.getDayName() ;
    let months = currentDate.getMonthName();
    let day = currentDate.getDate() + 1;
    let year = currentDate.getFullYear(); 
    let dateEntered = dayOfWeek + " " + months + " " + day + " " + year;
    return dateEntered;
}

const displayShows = (shows) => {
    buyTicketsSection.innerHTML = "";

    shows.forEach((data) => {
        let showsCard = document.createElement("div");
        showsCard.classList.add("shows-card");
       
        const dateLabel = document.createElement("label");
        dateLabel.classList.add("shows-card__date-label");
        dateLabel.textContent = "DATE";
        showsCard.appendChild(dateLabel);

        const venueLabel = document.createElement("label");
        venueLabel.classList.add("shows-card__venue-label");
        venueLabel.textContent = "VENUE";
        showsCard.appendChild(venueLabel);

        const locationLabel = document.createElement("label");
        locationLabel.classList.add("shows-card__location-label");
        locationLabel.textContent = "LOCATION";
        showsCard.appendChild(locationLabel);

        const showsContainer = document.createElement("div");
        showsContainer.classList.add("shows-card__container");
        showsCard.appendChild(showsContainer);

        const showDate = document.createElement("div");
        showDate.classList.add("shows-card__container__show-date");
        showDate.innerText = dateFormat(data.date);
        showsContainer.appendChild(showDate);

        const showVenue = document.createElement("div");
        showVenue.classList.add("shows-card__container__show-venue");
        showVenue.innerText = data.place;
        showsContainer.appendChild(showVenue);

        const showLocation = document.createElement("div");
        showLocation.classList.add("shows-card__container__show-location");
        showLocation.innerText = data.location;
        showsContainer.appendChild(showLocation);

        const showButton = document.createElement("button");
        showButton.classList.add("shows-card__show-button");
        showButton.textContent = "BUY TICKETS";
        showsCard.appendChild(showButton);

        buyTicketsSection.appendChild(showsCard);
    });
};

axios.get(showDatesURL).then((response) => {
    console.log(response.data)
    displayShows(response.data);
}).catch(error => console.log(error));

