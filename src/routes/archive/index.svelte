<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => {
    const postFiles = import.meta.globEager('../posts/*.md');
    const postsMeta: PostsMeta[] = Object.entries(postFiles).map(([path, post]) => {
      const pathSplitted = path.split('/');
      const filename = pathSplitted[pathSplitted.length - 1].replace('.md', '');

      return { ...post.metadata, filename };
    });

    return { props: { postsMeta } };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';

  import type { PostsMeta } from '$lib/interfaces/posts-meta';

  export let postsMeta: PostsMeta[];
</script>

<h1>Posts Archive</h1>
<ul>
  {#each postsMeta as postMeta}
    <li><a sveltekit:prefetch href="{base}/posts/{postMeta.filename}">{postMeta.title}</a></li>
  {/each}
</ul>
