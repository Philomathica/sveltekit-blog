<script>
  import { base } from '$app/paths';
</script>

<nav>
  <a href="{base}/">Homes</a> |
  <a href="{base}/archive">Archive</a> |
  <a href="{base}/tags">Tags</a> |
  <a href="{base}/authors">Authors</a>
</nav>

<div>
  <slot />
</div>

<style>
  :global(body) {
    min-height: 100vh;
    margin: 0;
    background-color: var(--primary-color);
    background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 10.45%, var(--tertiary-color) 41.35%);
  }

  :global(body::before) {
    content: '';
    width: 80vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 10vw;
    z-index: -1;
    background: radial-gradient(50% 50% at 50% 50%, var(--pure-white) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 0.05;
  }
</style>
