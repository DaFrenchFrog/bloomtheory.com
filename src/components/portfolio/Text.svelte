<script>

</script>

<style>
  @media screen and (min-width: 1280px) {
    .columned {
      column-count: 2;
      column-gap: 40px;
    }
  }

</style>

<section>
  <h3>
    <slot name="title" />
  </h3>
  <div class="columned">
    <slot />
  </div>
</section>
