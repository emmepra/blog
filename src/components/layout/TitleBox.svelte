<script context="module">
  // import Container from "$components/layout/Container.svelte";
</script>

<div class='card'>

  <h1 class="title">Dune di Grano</h1>
  <div class="credits">
    <div class="credits-line">
      <div>Story & Illustrations</div>
      <div><a href=".">Vivianna Zitani</a></div>
    </div>
    <div class="credits-line">
      <div>Code</div>
      <div><a href=".">Matteo Prandi</a></div>
    </div>
  </div>
  
</div>

<style>
  .title {
    max-width: 10em;
    padding: 0 2rem;
    margin: 2rem auto;
    font-family: var(--serif);
    text-align: center;
    font-size: 3rem;
    line-height: 0;
  }
  .credits {
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .credits-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.2rem;
  }
  .credits-line > div {
    width: 50%;
  }
  .credits-line > div:first-of-type {
    margin-right: 0.25rem;
    text-align: right;
  }
  .credits-line > div:last-of-type {
    margin-left: 0.25rem;
    text-align: left;
  }

  /* .hero-image {
    width: 100%;
    padding: 0 1rem;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-image > img {
    max-width: 170px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "i0 i1 i2 i3 i4";
    border-bottom: 3px solid var(--color-highlight);

    max-width: 85em;
    margin: auto;

    padding: 0.2rem;
  } */

  @media only screen and (min-width: 30em) {
    .title {
      font-size: 4rem;
      margin: 4rem auto;
    }
    .title::after {
      width: 250px;
    }
  }

 /* @media only screen and (min-width: 50em) {
    .title {
      font-size: 5rem;
      margin: 7rem auto;
    }
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "i0 i1 i2 i3 i4 i5 i6";
    }
    .hero-image {
      height: 220px;
    }
    .hero-image > img {
      max-width: 220px;
    }
  }
  @media only screen and (min-width: 70em) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "i0 i1 i2 i3 i4 i5 i6 i7 i8 i9";
    }
  } */
</style>