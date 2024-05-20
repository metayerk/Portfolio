const name = document.getElementById('name')
const complet_name = name.getAttribute("value")

function motTyping(word, index, lenght){
    if(index < lenght){
        setTimeout(() => {
            console.log(name)
            name.innerHTML += word[index]
            motTyping(word, index + 1, lenght)
        },250)
    }
}

setTimeout(() => {
    motTyping(complet_name, 0, 10)
}, 500)