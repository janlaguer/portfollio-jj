<script>
  import Card from "./Card.svelte";

  let clientX = 0;
  let clientY = 0;
  let isHovering = false;
  let containerEl;

  const onMouseMove = (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  };

  // todo: create another svelte component for the cards themselves
  // just redo this
  export { clientX, clientY, isHovering };
</script>

<div
  id="card-container"
  class="grid grid-cols-6 grid-rows-4 items-center gap-2"
  role="marquee"
  bind:this={containerEl}
  on:mousemove={onMouseMove}
  on:mouseenter={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}
>
  <slot />
</div>

<style>
  #card-container > :global(div) {
    @apply col-span-2;
  }

  /* Dealing with 2 orphan items */

  #card-container > :global(div):last-child:nth-child(3n - 1) {
    grid-column-end: -2;
  }

  #card-container > :global(div):nth-last-child(2):nth-child(3n + 1) {
    grid-column-end: 4;
  }

  /* Dealing with single orphan */

  #card-container > :global(div):last-child:nth-child(3n - 2) {
    grid-column-end: 5;
  }
</style>
