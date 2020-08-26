<template>
  <div class="about">
    <h1>Our Story</h1>
    <img src="http://www.placekitten.com/500/300" alt="big cool image of people">
    <p>Remington.  you remember why I named you Remington? that's good.  I need you to remember something for me Remington.  I'm making this moment stick in your head.  It's much older than you. started from a seed.  seed didnt have a choice where it fell, didn't choose the shadow.  from there, only one way to go, straight up from where it came.  The branches, they had a choice, but most of them stuck to what they knew, stuck to the shadow.  How do they look to you?  They're sick.  Not well.  Only one apple ever grows on that tree.  Now you listen to me boy.  Nobody, nothin can stop you but you.  Now get that knife outta the table and find your brother for me.</p>
  </div>
</template>




<style scoped>

h1 {
  font-family: sans-serif;
  font-size: 3rem;
}

.about {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: var(--gap);
}

.about > * {
  margin-bottom: 3rem;
}

.about img {
  width: 100%;
  height: auto;
  box-shadow: 0 0 0 6px #ff8080;
  border-radius: 10px;
}


p {
  font-size: 1rem;
  font-family: sans-serif;
  margin-bottom: 10vh;
}

</style>
