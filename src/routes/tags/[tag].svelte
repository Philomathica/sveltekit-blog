<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { PostsMeta } from '$lib/interfaces/posts-meta';

  export const load: Load = ({ page }) => {
    const postFiles = import.meta.globEager('../posts/*.md');
    const tag = page.params.tag;
    const postsMeta: PostsMeta[] = Object.entries(postFiles)
      .filter(([_path, post]) => post.metadata.tags.includes(tag))
      .map(([path, post]) => {
        const pathSplitted = path.split('/');
        const filename = pathSplitted[pathSplitted.length - 1].replace('.md', '');

        return { ...post.metadata, filename };
      });

    return { props: { tag, postsMeta } };
  };
</script>

<script lang="ts">
  import { base } from '$app/paths';

  export let tag: string;
  export let postsMeta: PostsMeta[];
</script>

<h1>Posts with tag {tag}</h1>
<ul>
  {#each postsMeta as postMeta}
    <li><a sveltekit:prefetch href="{base}/posts/{postMeta.filename}">{postMeta.title}</a></li>
  {/each}
</ul>
