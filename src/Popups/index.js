const gulliesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tint" aria-hidden="true"></i><p class="title">Gullies</p>
  <p></p>
  <i class="fa fa-map-marker" aria-hidden="true"></i><p class="info">Location: ${feature.properties.street}</p>
  <i class="fa fa-tag" aria-hidden="true"></i><p class="info">Number on grid: ${feature.properties.central_asset_id}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  gulliesPopup 
}