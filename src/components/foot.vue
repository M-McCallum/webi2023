<template>
    <footer>
      <router-link class="order-text order" to="/menus">order now</router-link>
      <!-- <div class="mmlogo">
        <a href="#">|\|\|\|\</a>
      </div> -->
    </footer>
</template>

<script>
export default {
  name: 'foot'
}

</script>
<style scoped>
footer  {
  position: sticky;
  bottom: 0;
  margin-top: auto;
  min-height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--gap) * .25);
  pointer-events: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  --background-color: #fffa;
  color: white;
}

.mmlogo a {
  text-decoration: none;
  font-size: .8rem;
  font-weight: bold;
  font-family: sans-serif;

}


.mmlogo {
  margin-left: auto;
}

footer a {
  text-decoration: none;
  color: inherit;
  font-family: sans-serif;
}

.order {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 auto;
  color: #fff;
  background: #FF8080;
  background-color: #000;
  padding: calc(var(--gap) * .5) calc(var(--gap) * 1);
  box-shadow: 4px 4px 0 rgba(0,0,0,.2);
  pointer-events: auto;
}

.router-link-exact-active {
  display: none;
}

.order:active {
  box-shadow: -4px -4px 0px rgba(0,0,0,.5);
  transform: translate3d(4px,4px,0);
}

</style>
