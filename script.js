const topHeader = document.getElementsByClassName("topbar")[0]
const btmHeader = document.getElementById("navbar")
const header = document.getElementById("header")


function handleTopbar() {
    window.addEventListener("scroll", () => {
        const distanceFromTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

        if (distanceFromTop > 80) {
            topHeader.style.top = "-32px"
            btmHeader.style.top = "-32px"
            header.style.height = "50px"
        } else {
            topHeader.style.top = "0"
            header.style.height = "84px"
            btmHeader.style.top = "0"
        }
        
        // if (topHeader.style.top == "-32px") {
        //     topHeader.style.display = "none"
        // } else {
        //     topHeader.style.display = "block"
        // }
    })
}

handleTopbar()