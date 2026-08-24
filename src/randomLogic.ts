import stationsData from './data/stations.json'
import { getRecommendations } from './places'

export function roulette (element: HTMLButtonElement) {
    var stations = stationsData.stations; //This is a variable that maps to the stations object in the json
    var colors = stationsData.lines;
    var stationDiv = document.querySelector<HTMLDivElement>('#station')! //This spits out the station name in the main.ts
    var lineDiv = document.querySelector<HTMLDivElement>('#lineNumber')! //this spits out the station number in the main.ts
    var recDiv = document.querySelector<HTMLDivElement>('#results')! //this spits out information for recommendations

    //this is the logic that picks a random station
    const pickRandomStation = () => {
        const randomIndex = Math.floor(Math.random() * stations.length);
        return stations[randomIndex];
    }

    //function that takes an array and an int for the length of line array
    const colorPicker = (lineArray: number[], lineLength: number) => {
        //this if statement checks if the length of the array is 1 or more.
        if (lineLength == 1){
            var lineNumber = lineArray[0]; //get the only value in the array
            var color = ""; //color is a string so we declare an empty string in advance
            colors.forEach((id) => { //loop through the json data to match the line number, when it matches, we find the corresponding color
                if (id.id == lineNumber){
                    color = id.color; //map the color to color var
                }
            })
            return color; //return color
        } else if (lineLength > 1){
            var colorArr: string[] = []; //declare array and type so typescript knows what kind of array this is
            lineArray.forEach((num) => { 
                colors.forEach((id) => { 
                    if (id.id == num){
                        colorArr.push(id.color);
                    }
                })
            })
            return colorArr;
        } else { //this else statement is needed so typescript knows what to do if both if clauses are false
            return "#ffffff"
        }
    }

    //this is the logic for the button, onclick, this will trigger the random logic, and display a new station
    element.addEventListener('click', async () => {
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
        
        var data = await getRecommendations(station);
        
    })

}