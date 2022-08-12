<script>
  export let tags = [];
</script>

<style>
  p {
    font-size: 0.7rem;
    margin: 0;
  }
  span {
    margin-right: 10px;
  }
</style>

<p>
  {#each tags as tag}
    <span>{tag}</span>
  {/each}
</p>
