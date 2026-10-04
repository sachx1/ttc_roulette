import { roulette } from "./randomLogic"
import './places'

export function renderRoulette(container: HTMLElement) {
  container.innerHTML = `<div id="header-box">
        <h1 id="TTCHeading">TTC Roulette Unlimited</h1>
        <p>Press the button below to select a random TTC Station and what is there do to around it</p>
    </div>
    <br>
    <div id="lineNumber"></div>
    <div id="station"></div>
    <button type="button" id="ttcroulette">Lets Play!</button>
    <select id="category-select">
        <option value="restaurants">Restaurants</option>
        <option value="parks">Parks</option>
        <option value="cafes">Cafes</option>
    </select>
    <div id="results"></div>`
  
  roulette(container.querySelector<HTMLButtonElement>('#ttcroulette')!)
}