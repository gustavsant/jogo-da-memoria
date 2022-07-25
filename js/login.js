const wallpaper = document.querySelector('#wallpaper')
const inputTxt = document.querySelector('#loginUser')
const buttonInput = document.querySelector('#loginButton')
const form = document.querySelector('.loginForm')

const Validar = ({target}) => {
    if(target.value.length > 3){
        buttonInput.removeAttribute('disabled')
    }else{
        buttonInput.setAttribute('disabled', '')
    }
}

const Submitar = (event) => {
    event.preventDefault()
    localStorage.setItem('Jogador', inputTxt.value)
    window.location = 'pages/game.html'
}

inputTxt.addEventListener('input', Validar)
form.addEventListener('submit', Submitar)

function ChangeWallpaper(){
    const wallpapers = ['media/charWallpaper.jpg', 'media/eeveeWallpaper.jpg', 'media/wallpaper1.jpg', 'media/wallpaper2.jpg', 'media/wallpaper3.jpg', 'media/wallpaper4.jpg']
    let pick = wallpapers[Math.floor(Math.random()* wallpapers.length)]
    wallpaper.src = pick

}