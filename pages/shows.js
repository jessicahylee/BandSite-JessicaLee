// const showsArray = [
//   {
//     date: 'Mon Sept 06 2021',
//     venue: ' Ronald Lane',
//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Tue Sept 21 2021',
//     venue: 'Pier 3 East',
//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Fri Oct 15 2021',
//     venue: ' View Lounge',
//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Sat Nov 06 2021',
//     venue: 'Hyatt Agency',
//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Fri Nov 26 2021',
//     venue: ' Moscow Center',
//     location: 'San Francisco, CA',
//   },
//   {
//     date: 'Wed Dec 15 2021',
//     venue: 'Press Club',
//     location: 'San Francisco, CA',
//   },
// ]

const parent = document.querySelector('.container__tickets--ss')


const elementsTickets = (showsArray) => {
  console.log(showsArray)


  for (let i = 0; i <= showsArray.length - 1; i++) {
    
    let containerTicketsDiv = document.createElement('div') // container__tickets--1
    containerTicketsDiv.classList.add('container__tickets')



    let ticketDate = document.createElement('h3')
    ticketDate.classList.add('container__tickets-date')
    ticketDate.innerText = 'DATE'
    containerTicketsDiv.appendChild(ticketDate)

    let ticketsDate = document.createElement('p')
    ticketsDate.classList.add('container__tickets--date')
    let date1 = new Date(showsArray[i].date);
    let finaldate = date1.toDateString()
    ticketsDate.innerText = finaldate 
    containerTicketsDiv.appendChild(ticketsDate)


    //Append h3 to class container__tickets-venue:

    let showVenue = document.createElement('h3')
    showVenue.classList.add('container__tickets-venue')
    showVenue.innerText = 'VENUE'
    containerTicketsDiv.appendChild(showVenue)

    let showVenues = document.createElement('p')
    showVenues.classList.add('container__tickets--venue')
    showVenues.innerText = showsArray[i].place
    containerTicketsDiv.appendChild(showVenues)

    //Append h3 to class container__tickets-location

    let showLocation = document.createElement('h3')
    showLocation.classList.add('container__tickets-location')
    showLocation.innerText = 'LOCATION'
    containerTicketsDiv.appendChild(showLocation)

    let showsLocation = document.createElement('p')
    showsLocation.classList.add('container__tickets--location')
    showsLocation.innerText = showsArray[i].location
    containerTicketsDiv.appendChild(showsLocation)

    let buttonTickets = document.createElement('button')
    buttonTickets.classList.add('buttonTickets')
    buttonTickets.innerText = 'BUY TICKETS'
    containerTicketsDiv.appendChild(buttonTickets)

     parent.appendChild(containerTicketsDiv)
  }

 
}

const getData = () => {
  console.log('getData')
  axios
    .get(
      'https://project-1-api.herokuapp.com/showdates?api_key=73698041-868b-44dd-b05e-02564d21a37c',
    )
    .then((result) => {
      console.log(result)
      elementsTickets(result.data)
    })
    .catch((error) => {
      console.log('Error fetching data:', error)
    })
}
getData()
