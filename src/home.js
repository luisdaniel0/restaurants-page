

const loadHome = () =>{
    const contentGrid  = document.querySelector('#content')

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
    infoBox.textContent = "Come join us at BB&G for the best nightlife city food and drinks! Affordable and convinient with an execellent staff. Hosting and Catering events are also available"
    infoBox.classList.add('info', 'card')
    contentGrid.appendChild(infoBox)

    //HOURS
    const hoursGrid = document.createElement("div")
    hoursGrid.textContent="Hours"
    contentGrid.appendChild(hoursGrid)
    hoursGrid.classList.add('hours', 'card')
}
export default loadHome;



