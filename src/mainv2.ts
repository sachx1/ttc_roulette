import './style.css'
import { roulette } from './randomLogic'
import './places'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
    <div>
        <h1>TTC Roulette</h1>
        <p>Press the button below to select a random TTC Station and what is there do to around it</p>
    </div>
    <br>
    <div id="lineNumber"></div>
    <div id="station" style="color:white"></div>
    <button type="button" id="ttcroulette">Lets Play!</button>
    <select id="category-select">
        <option value="restaurants">Restaurants</option>
        <option value="parks">Parks</option>
        <option value="cafes">Cafes</option>
    </select>
    <div id="results"></div>
</section>
`

roulette(document.querySelector<HTMLButtonElement>('#ttcroulette')!)