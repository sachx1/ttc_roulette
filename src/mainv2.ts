import './style.css'
//import { roulette } from './randomLogic'
import './places'
import { setupThemeToggle } from './toggleDisplay'
import { initRouter } from './router'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id='toggle'>
    <button type="button" id="theme-toggle">🌙</button>
</div>
<section id="center"></section>
`

//roulette(document.querySelector<HTMLButtonElement>('#ttcroulette')!)
setupThemeToggle(document.querySelector<HTMLButtonElement>('#theme-toggle')!)
initRouter()
