<script>
  import '$styles/app.scss'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
</script>

<Header />

<main id="content">
  <slot />
</main>

<Footer />
