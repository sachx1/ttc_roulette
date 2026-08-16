import './style.css'
import { roulette } from './randomLogic'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
    <div>
        <h1>TTC Roulette</h1>
        <p>Press the button below to select a random TTC Station and what is there do to around it</p>
    </div>
    <br>
    <div id="result" style="color:white"></div>
    <button type="button" id="ttcroulette">Lets Play!</button>
</section>
`

roulette(document.querySelector<HTMLButtonElement>('#ttcroulette')!)