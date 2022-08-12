<script>
  import { slide } from "svelte/transition";
  export let data;

  let opened;
  function accordionClicked() {
    opened = opened ? false : true;
  }
</script>

<style>
  .wrapper {
    margin: 50vh 0 50vh 0;
    text-align: center;
  }
  .active {
    -webkit-transform: rotate(315deg) !important;
    -moz-transform: rotate(315deg) !important;
    -ms-transform: rotate(315deg) !important;
    -o-transform: rotate(315deg) !important;
    transform: rotate(315deg) !important;
  }
  .need {
    cursor: pointer;
  }
  .bullet {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 20px 0 20px;
    transition: transform 0.5s ease-in-out;
    -webkit-transform: rotate(0deg) ;
    -moz-transform: rotate(0deg) ;
    -ms-transform: rotate(0deg) ;
    -o-transform: rotate(0deg) ;
    transform: rotate(0deg) ;
  }
  .answer {
    margin: 0;
    text-align: left;
  }
  h2 {
    margin: 40px 0 40px 0;
  }
  @media screen and (min-width: 1024px) {
    .columned {
      column-count: 2;
      column-gap: 7vw;
      text-align: left;
    }
  }
  @media (max-width: 400px) {
    .wrapper {
      margin: 20vh 0;
    }
    h2 {
      margin: 20px 0 20px 0;
    }
  }
</style>

<div class="wrapper">
  <div class="need" on:click={accordionClicked}>
    <p>{data.title}</p>
    <h2>
      {@html data.need}
    </h2>
    <img
      class="bullet"
      class:active={opened}
      src="assets/arrow-up.svg"
      alt="arrow" />

  </div>
  {#if opened}
    <div class="answer" transition:slide>
      <p class="columned">
        {@html data.answer}
      </p>
    </div>
  {/if}
</div>
