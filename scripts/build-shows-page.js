const shows = [
    {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    },
    {
    date: "Tues Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    },
    {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    },
    {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    },
    {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    },
    {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    },
];

const buyTicketsSection = document.querySelector(".buy-tickets-section");

const showTitle = document.createElement("h2");
showTitle.classList.add("show-title");
showTitle.textContent = "Shows";
buyTicketsSection.appendChild(showTitle);

//create the array for each item with labels

function displayShows(data) {
    let showsCard = document.createElement("div");
    showsCard.classList.add("shows-card");
    
    const dateLabel = document.createElement("label");
    dateLabel.classList.add("date-label");
    dateLabel.textContent = "DATE";
    showsCard.appendChild(dateLabel);
    const showDate = document.createElement("div");
    showDate.classList.add("show-date");
    showDate.innerText = data.date;
    showsCard.appendChild(showDate);

    const venueLabel = document.createElement("label");
    venueLabel.classList.add("venue-label");
    venueLabel.textContent = "VENUE";
    showsCard.appendChild(venueLabel);
    const showVenue = document.createElement("div");
    showVenue.classList.add("show-venue");
    showVenue.innerText = data.venue;
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
}

shows.forEach((event) => {
    displayShows(event);
});
