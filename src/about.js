
const loadAbout = ()=>{
    const contentGrid  = document.querySelector('#content')
    contentGrid.textContent=""


    //Header
    const contactUs = document.createElement('div')
    const contactUsHeaderText = document.createElement('div')
    const contactUsH1 = document.createElement('h1')
    contactUs.classList.add('contactUsHeader')
    contactUsHeaderText.classList.add('contactUsText')
    contentGrid.appendChild(contactUs)
    contactUs.appendChild(contactUsHeaderText)
    contactUsHeaderText.appendChild(contactUsH1)
    contactUsH1.textContent = "Contact Us"

    const contactInfoGrid = document.createElement('div')
    contactInfoGrid.classList.add('contactInfoGrid')
    contentGrid.appendChild(contactInfoGrid)
    

    // const contactInfoGrid = document.createElement('div')
    // const contactInfo = document.createElement('div')
    // const contactInfoTitle = document.createElement('h3')
    // const contactInfoName = document.createElement('p')
    // const contactInfoPhone= document.createElement('p')
    // const contactInfoEmail= document.createElement('p')

    // contactInfoGrid.classList.add('contactInfoGrid')
    // contactInfo.classList.add('contactInfo')
    // contactInfoTitle.classList.add('contactTitle')
    // contactInfoName.classList.add('contactName')
    // contactInfoPhone.classList.add('contactPhone')
    // contactInfoEmail.classList.add('contactEmail')

    




    // const contactMeInfoGrid = document.createElement('div')
    // const contactMeInfo = document.createElement('div')
    // const contactSupport=document.createElement('div')
    // const contactSupportText=document.createElement('div')


    const contactDetails = [
        {
        title: "Owner",
        name: "Luis",
        phone: "117-376-2194",
        email: "luisdaniel@gmail.com"
        },
        {
        title: "Chef",
        name: "Marjorie",
        phone: "317-946-6094",
        email: "marjorie@gmail.com"
        },
        {
        title: "Any Concerns?",
        name: "Support",
        phone: "947-556-6394",
        email: "supportbronx@gmail.com"
        },
]

    contactDetails.forEach(({title, name,phone,email})=>{
        console.log(title, name,phone,email)
        
        const contactInfo = document.createElement('div')
        const contactInfoTitle = document.createElement('h3')
        const contactInfoName = document.createElement('p')
        const contactInfoPhone= document.createElement('p')
        const contactInfoEmail= document.createElement('p')

       
        contactInfo.classList.add('contactInfo')
        contactInfoTitle.classList.add('contactTitle')
        contactInfoName.classList.add('contactName')
        contactInfoPhone.classList.add('contactPhone')
        contactInfoEmail.classList.add('contactEmail')

        contactInfoGrid.appendChild(contactInfo)
        contactInfo.appendChild(contactInfoTitle)
        contactInfo.appendChild(contactInfoName)
        contactInfo.appendChild(contactInfoPhone)
        contactInfo.appendChild(contactInfoEmail)

        contactInfoTitle.textContent=`${title}`
        contactInfoName.textContent=`${name}`
        contactInfoPhone.textContent=`${phone}`
        contactInfoEmail.textContent=`${email}`

        console.log(contactInfoName,contactInfoEmail)

        

    })


}

export default loadAbout