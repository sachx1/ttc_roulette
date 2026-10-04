import { navigate } from "./router"

export function renderHome(container: HTMLElement) {
  container.innerHTML = `
    <div id="header-box">
        <h1 id="TTCHeading">TTC Roulette Unlimited</h1>
        <p>Spin for a random TTC station, or search for one you already have in mind.</p>
    </div>
    <div class="home-buttons">
        <button type="button" id="roulette-mode">Roulette</button>
        <button type="button" id="search-mode">Search</button>
    </div>
  `

  container.querySelector<HTMLButtonElement>('#roulette-mode')!.addEventListener('click', () => {
    navigate('/roulette')
  })

  container.querySelector<HTMLButtonElement>('#search-mode')!.addEventListener('click', () => {
    navigate('/search')
  })
}
