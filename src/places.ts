import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

setOptions({
  key: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
  v: 'weekly',
})

const { Place } = await importLibrary('places')

export async function getRecommendations(station: { lat: number, lng: number }){
    const [restaurants, parks, cafes] = await Promise.all([
    getNearbyPlaces(station, ['restaurant']),
    getNearbyPlaces(station, ['city_park']),
    getNearbyPlaces(station, ['cafe'])
  ])

  return {restaurants, parks, cafes}
}

async function getNearbyPlaces(station: { lat: number, lng: number }, types: string[]) {
  const request = {
    fields: ['displayName', 'formattedAddress', 'rating', 'googleMapsURI'],
    locationRestriction: {
      center: { lat: station.lat, lng: station.lng },
      radius: 1500, //500 METERS
    },
    includedPrimaryTypes: types,
    maxResultCount: 10,
  }

  const { places } = await Place.searchNearby(request)
  return places
  
} 