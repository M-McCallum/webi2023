<template>
  <div class="header-wrap">
    <div v-show="isOpen" class="menu-mobile--overlay">
        <div class="overlay-top header">
          <div class="logo">
            <img class="logo-img" src="@/assets/asset3.png" alt="like a vegan logo">
          </div>

          <div>
            <button class="button" @click='toggle()'>close</button>
          </div>
        </div>
        <div  class="menu-list">
          <router-link class="menu-links" to="/">Home</router-link>
          <router-link class="menu-links" to="/about">About</router-link>
          <router-link class="menu-links" to="/trucks">Where are We</router-link>
          <router-link class="menu-links" to="/menus">Our Menus</router-link>
          <router-link class="menu-links" to="/contact">Contact</router-link>
        </div>
    </div>
    <div class="header">
      <router-link class="logo" to="/"><img src="@/assets/asset3.png" alt="like a vegan logo" class="logo-img"></router-link>
      <div class="menu-mobile">
        <button class="button" @click='toggle()'>menu</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'heading',
  data: function(){
    return {
        isOpen: false
    }
  },
  methods: {
    toggle: function(){
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    }
  }

}

</script>
<style scoped>

.header-wrap {
    /* position: sticky; */
    top: 0;
    background-color: #fff;
    position: sticky;
    top:0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 2px 1px rgba(0,0,0,.2);
}
.header {
   padding: var(--gap);
   height: auto;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   width: 100vw;

   box-shadow: 1px 0px -3px #000;

 }

 .logo {
  width: calc(var(--base) * 3);
  height: auto;
  margin-right: auto
 }

 .logo-img {
   width: 100%;
   display: block;
 }

 button {
   font-family: sans-serif;
   font-weight: bold;
   font-size: calc(var(--base)  * .4);
   letter-spacing: .1rem;
   color: black;
   text-decoration: none;
   background-color: unset;
   border: none;
 }

.menu-mobile--overlay {
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background-color: rgba(42,42,42,0);
  animation: colors 375ms ease;
  animation-fill-mode: forwards;
  z-index: 9999;
  will-change: auto;
}

.menu-mobile--overlay button {
  color: white;
}


@keyframes colors {
  from {
      background-color: rgba(42,42,42,0);
  }
  to {
      background-color: rgba(42,42,42,1);
  }
}

.menu-list {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: scroll;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: var(--gap);
}

 .menu-links {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  margin-bottom: 1.75rem;
  transition: all 375ms ease;
  max-width: 15ch;
}

.menu-links:active {
  transform: translateX(1rem);
}

.menu-links.router-link-exact-active {
  opacity: .5;
  text-decoration: line-through;
  pointer-events: none;
}

</style>
