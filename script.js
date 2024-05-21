const name = document.getElementById('name')
const complet_name = name.getAttribute("value")

function motTyping(word, index, lenght){
    if(index < lenght){
        setTimeout(() => {
            name.innerHTML += word[index]
            motTyping(word, index + 1, lenght)
        },350)
    }
}

setTimeout(() => {
    console.log(name)
    motTyping(complet_name, 0, 10)
})

const boutonNav = document.getElementById('onOff')
const nav = document.getElementById('nav')
const navReduit = document.getElementById('off')
const navAgrandit = document.getElementById('on')
let switchNav = 0;

boutonNav.onclick = (() => {
    console.log(switchNav)
    if (switchNav == 1){
        switchNav = 0
    }
    else{
        switchNav = 1
    }
    reactNav(switchNav)
})


function reactNav(flag){
    if(flag === 1){
        console.log('on')
        navReduit.style.display = "none"
        navAgrandit.style.display = "block"
        nav.style.width = "500px"
    }
    else{
        console.log('off')
        navReduit.style.display = "block"
        navAgrandit.style.display = "none"
        nav.style.width = "100px"
    }

}
