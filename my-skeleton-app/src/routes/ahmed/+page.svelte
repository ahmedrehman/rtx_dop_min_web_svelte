<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton-svelte';
    import ArrowLeft from '@lucide/svelte/icons/arrow-left';
    import Paperclip from '@lucide/svelte/icons/paperclip';
    import Calendar from '@lucide/svelte/icons/calendar';
    import CircleUser from '@lucide/svelte/icons/circle-user';
  </script>
  
  <AppBar>
    {#snippet lead()}
      <ArrowLeft size={24} />
    {/snippet}
    {#snippet trail()}
      <Paperclip size={20} />
      <Calendar size={20} />
      <CircleUser size={20} />
    {/snippet}
    {#snippet headline()}
      <h2 class="h2">Headline</h2>
    {/snippet}
  </AppBar>


  <div class="space-y-4">
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-primary-500">Button</button>
      <button type="button" class="btn preset-tonal-primary">Button</button>
      <button type="button" class="btn preset-outlined-primary-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-secondary-500">Button</button>
      <button type="button" class="btn preset-tonal-secondary">Button</button>
      <button type="button" class="btn preset-outlined-secondary-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-tertiary-500">Button</button>
      <button type="button" class="btn preset-tonal-tertiary">Button</button>
      <button type="button" class="btn preset-outlined-tertiary-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-success-500">Button</button>
      <button type="button" class="btn preset-tonal-success">Button</button>
      <button type="button" class="btn preset-outlined-success-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-warning-500">Button</button>
      <button type="button" class="btn preset-tonal-warning">Button</button>
      <button type="button" class="btn preset-outlined-warning-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-error-500">Button</button>
      <button type="button" class="btn preset-tonal-error">Button</button>
      <button type="button" class="btn preset-outlined-error-500">Button</button>
    </div>
    <div class="flex gap-4">
      <button type="button" class="btn preset-filled-surface-500">Button</button>
      <button type="button" class="btn preset-tonal-surface">Button</button>
      <button type="button" class="btn preset-outlined-surface-500">Button</button>
    </div>
  </div>