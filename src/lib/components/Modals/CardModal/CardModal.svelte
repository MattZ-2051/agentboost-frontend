<script lang="ts">
  import Card from '../../Card/Card.svelte';
</script>

<Card height="h-[400px]">
  <div class="w-[400px] h-full">
    <header class="" />
    <div class="p-4 space-y-4">
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
      <div class="flex-auto flex justify-between items-center">
        <h6 class="font-bold">(Date Info)</h6>
        <small>On {new Date().toLocaleDateString()}</small>
      </div>
    </footer>
  </div>
</Card>
