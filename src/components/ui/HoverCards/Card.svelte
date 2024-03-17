<script>
  export let clientX;
  export let clientY;
  export let isHovering;

  let ref;
  let mouseX;
  let mouseY;

  const getRect = () => {
    return ref.getBoundingClientRect();
  };

  $: mouseX = ref ? clientX - getRect().left : 0;
  $: mouseY = ref ? clientY - getRect().top : 0;
</script>

<div
  class={`card ${isHovering ? "hovering" : ""}`}
  bind:this={ref}
  style:--mouse-x={`${mouseX}px`}
  style:--mouse-y={`${mouseY}px`}
>
  <slot />
</div>

<style>
  .card {
    position: relative;
    @apply bg-slate-500/10 rounded min-h-20 h-full min-w-20 z-0 transition-transform;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card::before,
  .card::after {
    border-radius: inherit;
    opacity: 0;
    position: absolute;
    content: "";
    @apply top-0 left-0 transition-opacity w-full h-full;
  }

  .card::before {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }

  .card > :global(div) {
    border-radius: inherit;
    inset: 1px;
    z-index: 2;
    @apply absolute bg-slate-800 p-2;
  }

  .card:hover::before {
    opacity: 1;
  }

  .hovering::after {
    opacity: 1;
  }
</style>
