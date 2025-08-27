

const loadMenu =() =>{
    const contentGrid = document.querySelector('#content')
    contentGrid.textContent=""

    // MENU HEADER
    const menuHeaderGrid = document.createElement('div')
    const menuHeader = document.createElement('div')
    const menuHeaderText = document.createElement('h1')

    menuHeaderGrid.classList.add('menu-header-grid', 'card')
    contentGrid.appendChild(menuHeaderGrid)
    menuHeader.classList.add('menu-header')
    menuHeaderGrid.appendChild(menuHeader)
    menuHeaderText.textContent = "Today's Menu"
    menuHeader.appendChild(menuHeaderText)

    
    
    
    



    // MENU COURSES

    const menuCourseGrid = document.createElement('div');
    menuCourseGrid.classList.add('menu-course-grid');
    contentGrid.appendChild(menuCourseGrid);
    
    const menuCourses = [
        {
            courseTitle: "Spaghetti Carbonara",
            coursePrice: "$8",
            courseImg: "https://cookingwithwineblog.com/wp-content/uploads/2022/05/Carbonara-with-Asparagus-IG-2.jpg",
            courseText: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"
        },
        {
            courseTitle: "Margherita Pizza",
            coursePrice: "$9",
            courseImg: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
            courseText: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"
        },
        {
            courseTitle: "Chicken Parmesan",
            coursePrice: "$12",
            courseImg: "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2024/08/chicken-parmesan-recipe-07-2.jpg?resize=1024%2C1536&ssl=1",
            courseText: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"
        },
        {
            courseTitle: "Grilled Salmon",
            coursePrice: "$8",
            courseImg: "https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2.jpg",
            courseText: "Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum"
        },
    ]

    menuCourses.forEach(({courseTitle, coursePrice, courseImg, courseText})=>{
        const menuCourse = document.createElement('div')
        const menuCourseTitle = document.createElement('div')
        const menuCoursePrice = document.createElement('div')
        const menuCourseImg = document.createElement('img')
        const menuCourseText =document.createElement('p')
        menuCourse.classList.add('menu')
        menuCourseTitle.classList.add('menu-title')
        menuCoursePrice.classList.add('menu-price')
        menuCourseGrid.appendChild(menuCourse)
        menuCourse.appendChild(menuCourseTitle)
        menuCourse.appendChild(menuCoursePrice)
        menuCourse.appendChild(menuCourseImg)
        menuCourse.appendChild(menuCourseText)
        menuCourseTitle.textContent=`${courseTitle}`
        menuCourseImg.src = `${courseImg}`
        menuCoursePrice.textContent=`${coursePrice}`
        menuCourseText.textContent = `${courseText}`
    })

}


export default loadMenu;