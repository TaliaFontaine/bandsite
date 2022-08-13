const buyTicketsSection = document.querySelector(".buy-tickets-section");
const showDatesURL = "https://project-1-api.herokuapp.com/showdates?api_key=b5af2f5b-bb6b-46ac-9cf2-1e9701b06b8b";

const dateFormat = (date) => {
    console.log(date);
    let currentDate = new Date(date);
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth()+1;
    let yyyy = currentDate.getFullYear(); 
    let dateEntered = dd + "/" + mm + "/" + yyyy;
    return dateEntered;
}

const displayShows = (shows) => {
    buyTicketsSection.innerHTML = "";

    shows.forEach((data) => {
        let showsCard = document.createElement("div");
        showsCard.classList.add("shows-card");
    
        const dateLabel = document.createElement("label");
        dateLabel.classList.add("date-label");
        dateLabel.textContent = "DATE";
        showsCard.appendChild(dateLabel);
        const showDate = document.createElement("div");
        showDate.classList.add("show-date");
        showDate.innerText = dateFormat(data.date);
        showsCard.appendChild(showDate);

        const venueLabel = document.createElement("label");
        venueLabel.classList.add("venue-label");
        venueLabel.textContent = "VENUE";
        showsCard.appendChild(venueLabel);
        const showVenue = document.createElement("div");
        showVenue.classList.add("show-venue");
        showVenue.innerText = data.place;
        showsCard.appendChild(showVenue);

        const locationLabel = document.createElement("label");
        locationLabel.classList.add("location-label");
        locationLabel.textContent = "LOCATION";
        showsCard.appendChild(locationLabel);
        const showLocation = document.createElement("div");
        showLocation.classList.add("show-location");
        showLocation.innerText = data.location;
        showsCard.appendChild(showLocation);

        const showButton = document.createElement("button");
        showButton.classList.add("show-button");
        showButton.textContent = "BUY TICKETS";
        showsCard.appendChild(showButton);


        buyTicketsSection.appendChild(showsCard);
    });
};

axios.get(showDatesURL).then((response) => {
    console.log(response.data)
    /*.catch(error => console.log(error))*/
    displayShows(response.data);
});
