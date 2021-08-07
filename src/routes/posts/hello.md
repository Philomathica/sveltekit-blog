---
title: Hello
author: Sveltekit blogger
tags:
  - intro
  - amazing
---

<script>
  import Counter from '$lib/components/Counter.svelte';
</script>

# {title} by {author}

Some amazing content.

Svelte component in markdown:

<div>
  <Counter />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
  }
</style>
