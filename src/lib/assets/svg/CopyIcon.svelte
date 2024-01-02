<script lang="ts">
	export let showBorder: boolean = true;
	export let iconSize: number = 40;
</script>

<svg
	width={iconSize}
	height={iconSize}
	viewBox="0 0 40 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class="hover:cursor-pointer hover:scale-110"
>
	{#if showBorder}
		<rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="url(#paint0_linear_833_1822)" />
	{/if}
	<path
		d="M22.5013 20.7917H16.668C16.3263 20.7917 16.043 20.5083 16.043 20.1667C16.043 19.825 16.3263 19.5417 16.668 19.5417H22.5013C22.843 19.5417 23.1263 19.825 23.1263 20.1667C23.1263 20.5083 22.843 20.7917 22.5013 20.7917Z"
		fill="url(#paint1_linear_833_1822)"
	/>
	<path
		d="M20.318 24.125H16.668C16.3263 24.125 16.043 23.8417 16.043 23.5C16.043 23.1583 16.3263 22.875 16.668 22.875H20.318C20.6596 22.875 20.943 23.1583 20.943 23.5C20.943 23.8417 20.6596 24.125 20.318 24.125Z"
		fill="url(#paint2_linear_833_1822)"
	/>
	<path
		d="M21.668 15.625H18.3346C17.5346 15.625 16.043 15.625 16.043 13.3333C16.043 11.0417 17.5346 11.0417 18.3346 11.0417H21.668C22.468 11.0417 23.9596 11.0417 23.9596 13.3333C23.9596 14.1333 23.9596 15.625 21.668 15.625ZM18.3346 12.2917C17.5096 12.2917 17.293 12.2917 17.293 13.3333C17.293 14.375 17.5096 14.375 18.3346 14.375H21.668C22.7096 14.375 22.7096 14.1583 22.7096 13.3333C22.7096 12.2917 22.493 12.2917 21.668 12.2917H18.3346Z"
		fill="url(#paint3_linear_833_1822)"
	/>
	<path
		d="M22.5 28.9583H17.5C12.8167 28.9583 11.875 26.8083 11.875 23.3333V18.3333C11.875 14.5333 13.25 12.9083 16.6333 12.7333C16.9667 12.7167 17.275 12.975 17.2917 13.325C17.3083 13.675 17.0417 13.9583 16.7 13.975C14.3333 14.1083 13.125 14.8167 13.125 18.3333V23.3333C13.125 26.4167 13.7333 27.7083 17.5 27.7083H22.5C26.2667 27.7083 26.875 26.4167 26.875 23.3333V18.3333C26.875 14.8167 25.6667 14.1083 23.3 13.975C22.9583 13.9583 22.6917 13.6583 22.7083 13.3167C22.725 12.975 23.025 12.7083 23.3667 12.725C26.75 12.9083 28.125 14.5333 28.125 18.325V23.325C28.125 26.8083 27.1833 28.9583 22.5 28.9583Z"
		fill="url(#paint4_linear_833_1822)"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_833_1822"
			x1="0"
			y1="0"
			x2="40.8231"
			y2="0.858485"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3E80FF" />
			<stop offset="1" stop-color="#49F9EA" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_833_1822"
			x1="16.043"
			y1="19.5417"
			x2="23.174"
			y2="20.3914"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3E80FF" />
			<stop offset="1" stop-color="#49F9EA" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_833_1822"
			x1="16.043"
			y1="22.875"
			x2="21.0122"
			y2="23.2846"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3E80FF" />
			<stop offset="1" stop-color="#49F9EA" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_833_1822"
			x1="16.043"
			y1="11.0417"
			x2="24.1155"
			y2="11.3349"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3E80FF" />
			<stop offset="1" stop-color="#49F9EA" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_833_1822"
			x1="11.875"
			y1="12.7243"
			x2="28.4594"
			y2="13.0734"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3E80FF" />
			<stop offset="1" stop-color="#49F9EA" />
		</linearGradient>
	</defs>
</svg>
