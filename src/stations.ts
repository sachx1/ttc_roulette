import stationsData from './data/stations.json'

export type Station = { name: string, lat: number, lng: number, lines: number[] }
export type Line = { id: number, name: string, color: string, stations: string[] }

export const stations: Station[] = stationsData.stations
export const lines: Line[] = stationsData.lines

export function pickRandomStation(): Station {
  const randomIndex = Math.floor(Math.random() * stations.length)
  return stations[randomIndex]
}

export function findStationsByQuery(query: string): Station[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []
  return stations.filter((station) => station.name.toLowerCase().includes(normalized))
}
