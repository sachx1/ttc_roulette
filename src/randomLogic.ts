import stationsData from './data/stations.json'

export function roulette (element: HTMLButtonElement) {
    var stations = stationsData.stations;
    var resultDiv = document.querySelector<HTMLDivElement>('#result')!

    const pickRandomStation = () => {
        const randomIndex = Math.floor(Math.random() * stations.length);
        return stations[randomIndex];
    }

    element.addEventListener('click', () => {
        const station = pickRandomStation()
        resultDiv.textContent = station.name;
        console.log(station.name)
    })

}