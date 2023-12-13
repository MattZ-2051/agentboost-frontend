<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';

	export let mapSize: string;

	let map: google.maps.Map;
	const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };
	const mapId = import.meta.env?.VITE_GOOGLE_MAP_ID;
	const apiKey = import.meta.env?.VITE_GOOGLE_MAP_KEY;

	async function initMap(): Promise<void> {
		const parser = new DOMParser();

		// A marker with a custom inline SVG.
		const pinSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 25" fill="none">
  <path d="M12.4994 0C7.50693 0 3.44531 4.06162 3.44531 9.054C3.44531 15.2497 11.5478 24.3454 11.8928 24.7295C12.2168 25.0904 12.7825 25.0898 13.106 24.7295C13.4509 24.3454 21.5534 15.2497 21.5534 9.054C21.5533 4.06162 17.4917 0 12.4994 0ZM12.4994 13.6093C9.98755 13.6093 7.94409 11.5658 7.94409 9.054C7.94409 6.54219 9.9876 4.49873 12.4994 4.49873C15.0111 4.49873 17.0546 6.54224 17.0546 9.05405C17.0546 11.5659 15.0111 13.6093 12.4994 13.6093Z" fill="url(#paint0_linear_1213_2160)"/>
  <defs>
    <linearGradient id="paint0_linear_1213_2160" x1="10.6228" y1="7.17104" x2="20.7634" y2="7.54379" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3F8BFD"/>
      <stop offset="1" stop-color="#49F9EA"/>
    </linearGradient>
  </defs>
</svg>`;

		const pinSvg = parser.parseFromString(pinSvgString, 'image/svg+xml').documentElement;
		const position = { lat: 43.651985, lng: -116.30721 };

		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;

		map = new Map(document.getElementById('map') as HTMLElement, {
			zoom: 11,
			center: position,
			clickableIcons: true,
			disableDoubleClickZoom: false,
			draggable: true,
			fullscreenControl: true,
			keyboardShortcuts: true,
			mapId,
			mapTypeId: 'roadmap',
			mapTypeControl: false,
			rotateControl: true,
			scaleControl: true,
			scrollwheel: true,
			streetViewControl: true
		});

		const marker = new AdvancedMarkerElement({
			map: map,
			position: position,
			content: pinSvg,
			title: 'Uluru'
		});
	}

	onMount(() => {
		const loader = new Loader({
			apiKey,
			version: 'weekly'
		});

		loader.importLibrary('maps').then(async () => {
			initMap();
		});
	});
</script>

<div class="w-full h-full rounded-[10px] p-2 border border-white border-opacity-10">
	<div id="map" class={`${mapSize} rounded-[10px]`} />
</div>
