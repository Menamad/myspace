// document.querySelector("form").addEventListener("submit" , (e)=>{
//     e.preventDefault()


// })

let btn = document.getElementById("submit")
let timer = document.querySelector("#timer")
let message = document.querySelector(".message")
let p = document.querySelector(".timer")
message.style.display= "none"
let section = document.querySelector("#birthday")
let dropBTN = document.querySelector(".dropdown-btn")
let started = true;
let topBtn = document.querySelector(".top-btn")
let firstSection = document.getElementById("Home")
let drobdownList = document.querySelector(".dropdown-list")
let alldropItems = document.querySelectorAll(".main-item-drop")
let allSections = document.querySelectorAll("section")
let header = document.querySelector("header")

btn.addEventListener("click" , ()=>{
    
})


function apeearOrDis(){


    //if(window.scrollY >= section.offsetTop && window.scrollY <= section.offsetTop + section.offsetHeight){
        const id =  window.setInterval(()=>{
            if(+timer.textContent<=0){
                window.clearInterval(id)
                message.style.display = ""
                p.style.display = "none"
            }

            else if(window.scrollY < section.offsetTop || window.scrollY >= (section.offsetHeight + section.offsetTop)-100){
                window.clearInterval(id)
                console.log("hhh")
                started = true
                p.style.display = ""
                timer.textContent = 5
                message.style.display = "none"
            }

            else if(+timer.textContent > 0){

                timer.textContent -= 1
            }
        },1000)
    //}
}
window.addEventListener("scroll", ()=>{
    if(started && window.scrollY >= section.offsetTop && window.scrollY <= section.offsetTop + section.offsetHeight){
        apeearOrDis()
        started = false
    }
    else if(window.scrollY >= firstSection.offsetTop + firstSection.offsetHeight){
        topBtn.style.display = "block"
        console.log("yes")
    }
    else if(window.scrollY < firstSection.offsetTop + firstSection.offsetHeight){
        topBtn.style.display = "none"
    }

})


document.querySelector("textarea").addEventListener("input" , (e)=>{
    document.querySelector(".chars").textContent = document.querySelector("textarea").textLength
})

dropBTN.addEventListener("click" , ()=>{
    drobdownList.classList.toggle("dropdown-listclicked")
    alldropItems.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            drobdownList.classList.remove("dropdown-listclicked")
        })

    })
    allSections.forEach((ele)=>{
        ele.addEventListener("click" , (e)=>{
            if(!drobdownList.contains(e.target)){
                drobdownList.classList.remove("dropdown-listclicked")
            }
            
        })

    })
        header.addEventListener("click",(e)=>{
            if(!dropBTN.contains(e.target)){
                drobdownList.classList.remove("dropdown-listclicked")
            }
        })


})

