<script>
    let { children } = $props();
    import "../app_daisyui.css";   //tailwind_install
</script>

 
<svelte:head>
  <title>About Us</title>
  <meta name="description" content="Learn more about us.">

</svelte:head>
{@render children()}
