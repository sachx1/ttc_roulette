export function renderSearch(container: HTMLElement) {
  container.innerHTML = `<h1>Search mode</h1>
  <div id='search-bar'>
    <form action="/search" method="GET" role="search">
      <label for="station-search">Search for Station:</label>
      <input type="search" id="station-search" name="stations" placeholder="Search for Stations..." required>
      <button type="submit">Search</button>
    </form>
  </div>`
}