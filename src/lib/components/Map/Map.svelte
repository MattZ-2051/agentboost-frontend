<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';

	export let mapSize: string;

	const mapId = import.meta.env?.VITE_GOOGLE_MAP_ID;
	const apiKey = import.meta.env?.VITE_GOOGLE_MAP_KEY;

	async function initMap(): Promise<void> {
		/**
		 * A customized popup on the map.
		 */
		let map: google.maps.Map, popup: Popup;

		class Popup extends google.maps.OverlayView {
			position: google.maps.LatLng;
			containerDiv: HTMLDivElement;

			constructor(position: google.maps.LatLng, content: HTMLElement) {
				super();
				this.position = position;

				content.classList.add('popup-bubble');

				// This zero-height div is positioned at the bottom of the bubble.
				const bubbleAnchor = document.createElement('div');

				bubbleAnchor.classList.add('popup-bubble-anchor');
				bubbleAnchor.appendChild(content);

				// This zero-height div is positioned at the bottom of the tip.
				this.containerDiv = document.createElement('div');
				this.containerDiv.classList.add('popup-container');
				this.containerDiv.appendChild(bubbleAnchor);

				// Optionally stop clicks, etc., from bubbling up to the map.
				Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
			}

			/** Called when the popup is added to the map. */
			onAdd() {
				this.getPanes()!.floatPane.appendChild(this.containerDiv);
			}

			/** Called when the popup is removed from the map. */
			onRemove() {
				if (this.containerDiv.parentElement) {
					this.containerDiv.parentElement.removeChild(this.containerDiv);
				}
			}

			/** Called each frame when the popup needs to draw itself. */
			draw() {
				const divPosition = this.getProjection().fromLatLngToDivPixel(this.position)!;

				// Hide the popup when it is far out of view.
				const display =
					Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? 'block' : 'none';

				if (display === 'block') {
					this.containerDiv.style.left = divPosition.x + 'px';
					this.containerDiv.style.top = divPosition.y + 'px';
				}

				if (this.containerDiv.style.display !== display) {
					this.containerDiv.style.display = display;
				}
			}
		}
		const parser = new DOMParser();

		const center: google.maps.LatLngLiteral = { lat: 43.651985, lng: -116.30721 };

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

		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;

		map = new Map(document.getElementById('map') as HTMLElement, {
			zoom: 11,
			center,
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
			position: center,
			content: pinSvg,
			title: 'Uluru'
		});

		const content = document.getElementById('content');

		popup = new Popup(center, content as HTMLElement);
		popup.setMap(map);
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

	$: showContent = '!flex';
</script>

<div class="w-full h-full rounded-[10px] p-2 border border-white border-opacity-10 relative">
	<div id="map" class={`${mapSize} rounded-[10px]`} />
	<div id="content" class={`popover ${showContent}`} on:mouseenter={() => (showContent = '!flex')}>
		<img class="w-12 h-full rounded-[10px]" src="https://via.placeholder.com/80x64" alt="" />
		<p class="text-white text-sm">McMillan Elementary School</p>
	</div>
</div>

<style lang="postcss">
	.popover {
		@apply w-[222px] flex h-[62px] border-opacity-20 border border-white rounded-[10px] p-2 text-[#fff] bg-[#22272A] items-center gap-x-2 -left-28 absolute top-4;
		box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.2);
	}
</style>
