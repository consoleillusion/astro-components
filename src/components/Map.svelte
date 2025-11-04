<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'

  let { latitude = 40.730610
      , longitude = -73.935242
      , zoom = 123
      , height = "20rem"
      , width = "100%"
      } = $props()

  onMount(() => {
    const map = L.map('map',{wheelPxPerZoomLevel:500}).setView([latitude,longitude], zoom)
    var marker = L.marker([latitude, longitude]).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
  })

</script>

<div id="map" style={"width:" + width + "; height: " + height + ";"}></div>

<style>
</style>
