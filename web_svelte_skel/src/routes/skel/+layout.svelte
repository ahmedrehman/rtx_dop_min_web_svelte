<script>
  let { children } = $props();
  import "../../app_skelleton.css";   //tailwind_install
</script>


<svelte:head>
<title>Daisy UI</title>
<meta name="description" content="Learn more about Daisy UI.">
 
</svelte:head>
{@render children()}
