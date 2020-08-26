<template>
  <div class="trucks toggler">
    <div class="truck-title">
      <h2>Truck 1</h2>
      <router-link id="menu1" class="map-menu-link toggler-item" data-menu-anchor="1" to="/menus">Menu</router-link>
    </div>
    <div class="map">
        <iframe width="900" height="1000" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvbt3k5Azs1IRB-56L4TJn5M&key=AIzaSyAh0Mmz1tuBeja1c2_pW7ERjQW6HVZGIrM" allowfullscreen></iframe>
    </div>
      <div class="truck-title">
        <h2>Truck 2</h2>
        <router-link class="map-menu-link toggler-item" data-menu-anchor="2" to="/menus">Menu</router-link>
      </div>
    <div class="map">
        <iframe width="900" height="1000" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvbt3k5Azs1IRB-56L4TJn5M&key=AIzaSyAh0Mmz1tuBeja1c2_pW7ERjQW6HVZGIrM" allowfullscreen></iframe>
    </div>
      <div class="truck-title">
        <h2>Truck 3</h2>
        <router-link class="map-menu-link toggler-item" data-menu-anchor="3" to="/menus">Menu</router-link>
      </div>
    <div class="map">
        <iframe width="900" height="1000" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvbt3k5Azs1IRB-56L4TJn5M&key=AIzaSyAh0Mmz1tuBeja1c2_pW7ERjQW6HVZGIrM" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style scoped>

  .trucks {
    min-height: 100vh;
    font-family: sans-serif;
    padding: var(--gap);
  }

  .truck-title {
    display: flex;
    align-items: flex-end;
      margin-bottom: calc(.5 * var(--gap));
  }

  h2 {
    font-size: 2rem;
  }

  .map {
    height: 0;
    padding-bottom: 50%;
    position: relative;
    margin: 0 calc(-1 * var(--gap)) calc(var(--gap));
  }

  .map-menu-link {
    margin-left: auto;
    padding: .5em .75em;
    margin-bottom: .25em;
    font-size: .75em;
    font-weight: bold;
    text-decoration: none;
    background-color: #ff8080;
    color: white;

  }

  .map iframe  {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 8px;
  }




</style>
