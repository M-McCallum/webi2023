<template>
  <div class="contact">
    <h1>Lets get in <br>touch </h1>
    <div class="contact-info">
      <h3>Address</h3>
      <p>Some random thing<br>1234 thing thing st<br>Noneya, USA</p>
      <h3>Email</h3>
      <a href="mailto:abc@alphabet.com">suckafart@spambots.com</a>
      <h3>Phone Number</h3>
      <a href="tel:123-456-7890">Please Dont Call Us...</a>
      <h3>Summer Hours</h3>
      <a>M - F 10am to 5pm</a>
      <br>
      <a>S-S 12pm to 7pm</a>
    </div>
  </div>
</template>

<style scoped>

  .contact {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    align-items: flex-start;
    font-family: sans-serif;
    padding: var(--gap);
  }



  h1 {
    margin-bottom: 3rem;
    font-size: 3rem;
    font-weight: normal;
  }

  h3 {
    margin-top: 1.5rem;
  }

  .contact a {
    text-decoration: none;
    color: black;
    opacity: .8;
    margin: .5rem;
  }

  .contact-info :nth-child(2) {
    margin-left: .5rem;
  }

</style>
