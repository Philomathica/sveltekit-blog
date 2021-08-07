<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => {
    const postFiles = import.meta.globEager('../posts/*.md');
    const tags: string[] = Object.values(postFiles)
      .map(post => post.metadata.tags)
      .flat();
    const uniqueTags: string[] = [...new Set(tags)];

    return { props: { tags: uniqueTags } };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';

  export let tags: string[];
</script>

<h1>Tags</h1>
<ul>
  {#each tags as tag}
    <li><a sveltekit:prefetch href="{base}/tags/{tag}">{tag}</a></li>
  {/each}
</ul>
