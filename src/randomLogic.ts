import stationsData from './data/stations.json'

export function roulette (element: HTMLButtonElement) {
    var stations = stationsData.stations; //This is a variable that maps to the stations object in the json
    var colors = stationsData.lines;
    var stationDiv = document.querySelector<HTMLDivElement>('#station')! //This spits out the station name in the main.ts
    var lineDiv = document.querySelector<HTMLDivElement>('#lineNumber')!

    //this is the logic that picks a random station
    const pickRandomStation = () => {
        const randomIndex = Math.floor(Math.random() * stations.length);
        return stations[randomIndex];
    }

    const colorPicker = (lineArray: number[], lineLength: number) => {
        if (lineLength == 1){
            var lineNumber = lineArray[0];
            var color = "";
            colors.forEach((id) => {
                if (id.id == lineNumber){
                    color = id.color;
                }
            })
            return color;
        } else if (lineLength > 1){
            var colorArr: string[] = [];
            lineArray.forEach((num) => {
                colors.forEach((id) => {
                    if (id.id == num){
                        colorArr.push(id.color);
                    }
                })
            })
            return colorArr;
        } else {
            return "#ffffff"
        }
    }

    //this is the logic for the button, onclick, this will trigger the random logic, and display a new station
    element.addEventListener('click', () => {
        const station = pickRandomStation()
        stationDiv.textContent = station.name;
        var lineLength = station.lines.length;
        if (lineLength == 1){
            var lineNumber = []
            lineNumber.push(station.lines[0]);
            var lineColor = colorPicker(lineNumber, lineLength);
            lineDiv.innerHTML = `<span style="background-color:${lineColor};border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:#000000;">${lineNumber[0]}</span>`;
            
        } else if (lineLength > 1){
            var lineNumberArr = station.lines;
            var colorArr = colorPicker(lineNumberArr, lineLength);
            if (Array.isArray(colorArr)){
                lineDiv.innerHTML = `<span style="background-color:${colorArr[0]};border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:#000000;">${lineNumberArr[0]}</span>
                    <span style="background-color:${colorArr[1]};border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:#000000;">${lineNumberArr[1]}</span>`
            }
        }
    })

}