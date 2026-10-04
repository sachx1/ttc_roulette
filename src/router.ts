import { renderHome } from "./home";
import { renderRoulette } from "./roulette";
import { renderSearch } from "./search";

const routes: Record<string, (container: HTMLElement) => void> = {
    '/': renderHome, 
    '/roulette': renderRoulette,
    '/search': renderSearch
}

function render() {
    const container = document.querySelector<HTMLElement>('#center')!
    const renderPage = routes[location.pathname] ?? renderHome
    renderPage(container)
}

export function navigate(path: string){
    history.pushState({}, '', path)
    render()
}

export function initRouter(){
    window.addEventListener('popstate', render)
    render()
}