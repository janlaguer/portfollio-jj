<script lang="ts">
  export let logo: ImageMetadata | ImageMetadata[];
  export let title: string;
</script>

<div class="flex flex-col justify-between items-center p-2">
  <div class="flex justify-between items-center">
    {#if Array.isArray(logo)}
      {#each logo as logo}
        <img src={logo.src} alt={title} class="h-7" />
      {/each}
    {:else}
      <img src={logo.src} alt={title} class="h-8" />
    {/if}
  </div>
  <div>
    <p class="text-center">{title}</p>
  </div>
</div>
