<script lang="ts">
	import './arrowAnimate.css';

	export let _class = 'w-6 h-6';
</script>

<div class="arrow">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class={_class}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
		/>
	</svg>
</div>
