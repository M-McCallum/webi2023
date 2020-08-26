<template>
  <div id="app" class="container">
    <heading/>
    <router-view/>
    <foot/>
  </div>
</template>
<script>
  import heading from '@/components/heading.vue';
  import foot from '@/components/foot.vue';

  export default {
    name: 'App',
    components: {
      heading,
      foot
    },
    methods: {
      createCards: function() {
        console.log(this);
      }
    },
    // data() {
    //   return {
    //     cards: [
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/501/500',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/502/504',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/500/504',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/507/509',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/511/521',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/540/520',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       },
    //       {
    //         title: 'menu item',
    //         img: 'http://placekitten.com/515/505',
    //         discription: 'Lorem ipsum dolor amet brooklyn tacos drinking vinegar tattooed, adaptogen try-hard sartorial fashion axe everyday carry raw denim neutra.'
    //       }
    //     ]
    //   }
    // }
  }



  //
  // function createCards() {
  //     // let board = document.querySelector('.board');
  //     console.log(this);
  //       // this.cards.forEach(function(card){
  //       // let newCard = document.createElement('div');
  //       // newCard.classList.add('card');
  //       // let newCardImage = document.createElement('div');
  //       // newCardImage.classList.add('card-image');
  //       // newCardImage.style.backgroundImage = 'url('+ card.img + ')';
  //       // let newCardTitle = document.createElement('div');
  //       // newCardTitle.classList.add('card-title');
  //       // newCardTitle.textContent = card.title;
  //       // let newCardDesc = document.createElement('div');
  //       // newCardDesc.classList.add('card-desc');
  //       // newCardDesc.textContent = card.discription;
  //       //
  //       // newCard.appendChild(newCardTitle);
  //       // newCard.appendChild(newCardImage);
  //       // newCard.appendChild(newCardDesc);
  //       // board.appendChild(newCard);
  //     // );
  //
  // }


  // createCards()

</script>
<style>

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;

    /* variables */
    --gap: 2rem;
    --base: 3rem;
 }

 .container {
   min-height: 100vh;
   display: flex;
   flex-flow: column;
 }


</style>
