const topHeader = document.getElementsByClassName("topbar")[0]
const btmHeader = document.getElementById("navbar")
const header = document.getElementById("header")
const navbars = document.getElementById("navbar")


function handleTopbar() {
    window.addEventListener("scroll", () => {
        const distanceFromTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        header.style.borderTopColor = "#333333"
        header.style.borderBottomColor = "#2c2e69";
        if (distanceFromTop > 84) {
            topHeader.style.top = "-48px"
            btmHeader.style.zIndex = "9999"
            btmHeader.style.top = "-48px"
            header.style.height = "84px"
            header.style.borderTopStyle= "solid";
            header.style.borderTopWidth= "16px";
            header.style.borderBottomStyle= "solid";
            header.style.borderBottomWidth= "16px";
            navbars.style.transform = "translateY(0px)"

        } else {
            topHeader.style.top = "0"
            btmHeader.style.zIndex = "0"
            header.style.height = "84px"
            header.style.borderTopStyle= "solid";
            header.style.borderTopWidth= "0px";
            header.style.borderBottomStyle= "solid";
            header.style.borderBottomWidth= "0px";
            btmHeader.style.top = "0"
            navbars.style.transform = "translateY(-15px)"
        }
        
        // if (topHeader.style.top == "-32px") {
        //     topHeader.style.display = "none"
        // } else {
        //     topHeader.style.display = "block"
        // }
    })
}

handleTopbar()