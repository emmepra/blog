<script>
  export let capDrop = false;
  export let div = false;
  export let content = undefined;
  let {title, pars} = content;

</script>


<section class="container p-3 mb-3 grid">
  <div class="columns">
    <div class="column content" class:divStart={div}>  
      {#if title.length !== 0}
        <h4>{@html title} </h4>
      {/if}

      {#each pars as p, i}
        <p class:cap={capDrop && i===0}>{@html p}</p>
      {/each}
    </div>
  </div>
</section>



<style lang="scss">

  %pseudo-block {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 1px;
    width: 300px;
    opacity: 100%;
}

div.divStart {
    &:before {
        @extend %pseudo-block;
        margin: 2rem auto 3rem;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
    color: var(--color-gray-dark);
    font-family: var(--sans);
    text-align: left;
    font-size: 1.5rem;
    line-height: 1.65;
}

p {
    margin-bottom: 1rem;
    font-family: var(--serif);
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.65;
}

b {
  color: var(--color-highlight);
}

@media only screen and (min-width: 30em) {
    p {
        font-size: 1rem;
    }
}

.grid {
    display: grid;
    grid-template-columns:
        [xl-start] 1fr 1.5em [md-start] minmax(0, 660px) [md-end] 1.5rem 1fr [xl-end];
}

.grid * {
    grid-column: md;
}

.grid-xl {
    grid-column: xl;
}
  p.cap::first-letter {
    color: var(--color-highlight);
    padding: 0;
    margin: 0 .3rem 0 0;
    font-size: 5rem;
    float: left;
    line-height: 1;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  

</style>