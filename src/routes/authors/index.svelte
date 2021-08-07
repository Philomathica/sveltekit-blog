<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => {
    const postFiles = import.meta.globEager('../posts/*.md');
    const authors: string[] = Object.values(postFiles).map(post => post.metadata.author);
    const uniqueAuthors: string[] = [...new Set(authors)];

    return { props: { authors: uniqueAuthors } };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';

  export let authors: string[];
</script>

<h1>Authors</h1>
<ul>
  {#each authors as author}
    <li><a sveltekit:prefetch href="{base}/authors/{author}">{author}</a></li>
  {/each}
</ul>
