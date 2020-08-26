<template>
  <div class="landingwrap">
    <h2>Featured Menu Items</h2>
    <section class="swiper">
      <div class="swiper-wrap">
        <div class="board">
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        <div class="card">
          <div class="card-title">menu item</div>
          <div class="card-image" style="background-image: url(&quot;http://placekitten.com/515/505&quot;);"></div>
          <div class="card-desc">Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.</div>
        </div>
        </div>
      </div>
    </section>
    <h2>Find Us Here</h2>
    <div class="map">
        <iframe width="900" height="1000" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvbt3k5Azs1IRB-56L4TJn5M&key=AIzaSyAh0Mmz1tuBeja1c2_pW7ERjQW6HVZGIrM" allowfullscreen></iframe>
    </div>
  </div>


</template>

<script>
export default {
  name: 'landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;
  font-family: sans-serif;
  font-size: 1.75rem;
}

.swiper {
  margin: 0 auto;
  padding: 2rem;
  max-width: 50rem;
}

.swiper-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 1%;
  --box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.1);
  background-color: #fff;
}

.board {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.card {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 1%;
    --box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.1);
    background-color: #FF8080;
    transform: translateX(-50%) translateY(-50%) scale(0.95);
    padding: var(--gap);
    color: white;
    text-shadow: 1px 1px 0 RGBA(0, 0, 0, .25);
  }

  .card:last-child {
    transform: translateX(-50%) translateY(-50%) scale(1);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.3);
  }

  .card:nth-last-child(2) {
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);
  }

  .card > * {
    margin-bottom: var(--gap);
  }

  .card:nth-last-of-type(n) {
     animation: jiggle 1s ease infinite;
  }

.card-title {
  font-family: sans-serif;
  font-size: 3rem;

}

.card-image{
  width: 100%;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.card-desc {
  font-family: sans-serif;
  max-width: 30ch;
  min-width: 10ch;
}


.map {
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  margin: calc(var(--gap));

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
