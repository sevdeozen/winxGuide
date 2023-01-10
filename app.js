const winxContainer = document.querySelector(".winxContainer")
const search = document.querySelector(".search")
const searchBtn = document.querySelector(".searchBtn")
const searchInput = document.querySelector(".searchInput")

const winxCount = 12;

searchBtn.addEventListener("click", () => {
    search.classList.toggle('active')
})



const fetchWinx = async () => {
    for (let i = 1; i < winxCount; i++) {
        await getWinx(i)
    }
}

const getWinx = async (id) => {
    const img = `./img/${id}`
    const res = await fetch("winx.json")
    const data = await res.json()
     console.log(data)
    createWinxCard(data)
}

const createWinxCard = (winx) => {
    const winxDiv = document.createElement("div")
    winxDiv.classList.add("winx")

    

    const winxDivInnerHTML = `
    
    <div class="imgContainer">
                <img src= "./img/${winx.id}.png" >
            </div>
            <div class="winxInfo">
                <span class="winxId">#001</span>
                <h3 class="winxName">Aisha</h3>
                <div class="small">
                    <small class="winxExp"><i class="fa-solid fa-flask"></i> 100 exp
                    </small>
                    <small class="winxWeight"><i class="fa-solid fa-flask"></i> 200 kg
                    </small>
                </div>
                <div class="winxType">
                    <i class="fa-solid fa-heart"></i>grass
                </div>
            </div>
    `

    winxDiv.innerHTML = winxDivInnerHTML
    winxContainer.appendChild(winxDiv)

}


fetchWinx();
