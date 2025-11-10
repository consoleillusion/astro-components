<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  let { latitude
      , longitude
      , zoom
      , height
      , width
      , sensitivity
      } = $props()

  onMount(() => {
    const map = L.map('map',{wheelPxPerZoomLevel: sensitivity}).setView([latitude,longitude], zoom)
    var marker = L.marker([latitude, longitude]).addTo(map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map)
  })

</script>

<div id="map" style={"width:" + width + "; height: " + height + ";"}></div>
