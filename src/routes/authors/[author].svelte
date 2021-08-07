<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { PostsMeta } from '$lib/interfaces/posts-meta';

  export const load: Load = ({ page }) => {
    const postFiles = import.meta.globEager('../posts/*.md');
    const author = page.params.author;
    const postsMeta: PostsMeta[] = Object.entries(postFiles)
      .filter(([_path, post]) => post.metadata.author === author)
      .map(([path, post]) => {
        const pathSplitted = path.split('/');
        const filename = pathSplitted[pathSplitted.length - 1].replace('.md', '');

        return { ...post.metadata, filename };
      });

    return { props: { author, postsMeta } };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';

  export let author: string;
  export let postsMeta: PostsMeta[];
</script>

<h1>Posts from author {author}</h1>
<ul>
  {#each postsMeta as postMeta}
    <li><a sveltekit:prefetch href="{base}/posts/{postMeta.filename}">{postMeta.title}</a></li>
  {/each}
</ul>
