const grid = document.querySelector('.grid')
const wallpaper = document.querySelector('#wallpaper')

const chars = [
    'butcher',
    'gus',
    'hulk',
    'jesse',
    'luffy',
    'mae',
    'tony',
    'vaporeon',
    'walter',
    'yuri'

]

let firstCard = ''
let secondCard = ''

function CheckEndGame(){
    let cardsDisabled = document.querySelectorAll('.disableCard')
    if(cardsDisabled.length === 20){
        alert('PARABENS VC GANHOU O JOGO')
    }
}

const CheckCards = () => {
    let firstChar = firstCard.getAttribute('data-char')
    let secondChar = secondCard.getAttribute('data-char')

    if(firstChar == secondChar){
        setTimeout(()=>{
            firstCard.firstChild.classList.add('disableCard')
            secondCard.firstChild.classList.add('disableCard')
            firstCard = ''
            secondCard = ''
            CheckEndGame()
        }, 300)
        

    }else{
        setTimeout(()=>{
            firstCard.classList.remove('reveal')
            secondCard.classList.remove('reveal')
            firstCard = ''
            secondCard = ''
        }, 500)

        
    }
}

const RevealCard = ({ target }) => {
    if(target.parentNode.className.includes('reveal')){
        return
    }
    if(firstCard == ''){
        target.parentNode.classList.add('reveal')
        firstCard = target.parentNode
    }else if(secondCard == ''){
        target.parentNode.classList.add('reveal')
        secondCard = target.parentNode

        CheckCards()
    }

}


const CreateElement = (tag, classe) => {
    const element = document.createElement(tag)
    element.className = classe
    return element
}

const CreateCard = (char) => {
    const card = CreateElement('div', 'card')
    const front = CreateElement('div', 'face front')


    front.style.backgroundImage = `url('../media/cards/${char}.jpg')`



    const back = CreateElement('div', 'face back')

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', RevealCard)
    card.setAttribute('data-char', char)

    return card
}

const LoadGame = () => {

    const doubles = [...chars, ...chars]
    const shuffle = doubles.sort( () => Math.random() - 0.5)

    shuffle.forEach((char)=>{
        const card = CreateCard(char)
        grid.appendChild(card)
    })
}

function ChangeWallpaper(){
    const wallpapers = ['../media/charWallpaper.jpg', '../media/eeveeWallpaper.jpg', '../media/wallpaper1.jpg', '../media/wallpaper2.jpg', '../media/wallpaper3.jpg', '../media/wallpaper4.jpg']
    let pick = wallpapers[Math.floor(Math.random()* wallpapers.length)]
    wallpaper.src = pick

}
LoadGame()
