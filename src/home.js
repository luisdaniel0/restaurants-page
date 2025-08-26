

const loadHome = () =>{
    const contentGrid  = document.querySelector('#content')
    contentGrid.textContent=""

    //HEADER
    const headline = document.createElement('div')
    const headerTextDiv = document.createElement('div')
    headline.classList.add("header", "card")
    contentGrid.appendChild(headline)
    headline.appendChild(headerTextDiv)
    headerTextDiv.classList.add("header-text")
    const heading = document.createElement("h1")
    heading.textContent = "Welcome to Bronx Bar & Grill!"
    headerTextDiv.appendChild(heading)

    //INFO
    const infoBox  = document.createElement('div')
    const infoText = document.createElement('div')
    const infoParagraph=document.createElement('p')
    infoBox.classList.add('info', 'card')
    infoText.classList.add('info-text')
    contentGrid.appendChild(infoBox)
    infoBox.appendChild(infoText)
    infoParagraph.textContent = "Come join us at BB&G for the best nightlife city food and drinks! Affordable and convinient with an execellent staff. Hosting and Catering events are also available"
    infoText.appendChild(infoParagraph)

    //HOURS
    const hoursGrid = document.createElement("div")
    const hoursText = document.createElement('div')
    const hoursListHeading = document.createElement('h3')
    const days = [{
        day: "Sunday",
        hours: "5pm - 2am"
    },
    {   day: "Monday",
        hours: "5pm - 2am"
    },
    {
        day: "Tuesday",
        hours: "5pm - 2am"
    },
    {   day: "Wednesday",
        hours: "5pm - 2am"
    },
    {   day: "Thursday",
        hours: "5pm - 2am"
    },
    {
        day: "Friday",
        hours: "6pm - 3am"
    },
    {  day: "Saturday",
        hours: "6pm - 3am"
    },
    
]


    hoursGrid.classList.add('hours', 'card')
    hoursText.classList.add('hours-text')
    hoursListHeading.classList.add('hours')
    contentGrid.appendChild(hoursGrid)
    hoursGrid.appendChild(hoursText)
    hoursText.appendChild(hoursListHeading)
    hoursListHeading.textContent = "Hours"

    days.forEach(({day, hours})=>{
    const p = document.createElement('p')
    p.classList.add(day.toLowerCase())
    p.textContent = `${day}: ${hours}`
    hoursText.appendChild(p)
    })

    
}
export default loadHome;



