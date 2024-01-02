<script lang="ts">
	import Checkmark from '$lib/assets/svg/Checkmark/Checkmark.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import visaIcon from '$lib/assets/images/CC/visa.png';
</script>

<h1 class="text-white font-bold text-[18px]">Subscription</h1>
<p class="text-[#707281] text-[15px] mt-2">
	This page displays general information about your subscription.
</p>
<div class="infoBox mt-8 flex w-full gap-x-12">
	<div class="w-2/3">
		<p class="text-white text-base font-medium">Current Plan</p>
		<p class="textGradient w-fit text-[32px] mt-4 leading-normal font-medium">Pro Package</p>
		<div class="mt-10 grid grid-cols-4">
			<div>
				<p class="text-[#707281] text-base">Status</p>
				<div class="flex gap-x-2 items-center mt-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<circle cx="6" cy="6" r="6" fill="#49E8ED" />
					</svg>
					<p>Active</p>
				</div>
			</div>
			<div>
				<p class="text-[#707281] text-base">Price/month</p>
				<p class="mt-2">US$99.00</p>
			</div>
			<div>
				<p class="text-[#707281] text-base">Billing Cycle</p>
				<p class="mt-2">4th each month</p>
			</div>
			<div>
				<p class="text-[#707281] text-base">Active Since</p>
				<p class="mt-2">Aug 20, 2023</p>
			</div>
		</div>
		<div class="mt-16">
			<p class="font-medium">Terms & Conditions</p>
		</div>
	</div>
	<div class="w-1/3 flex flex-col gap-y-4">
		<p class="text-[#707281] text-base mb-4">Included in this plan</p>
		<div class="flex items-center gap-x-2">
			<Checkmark />
			<p class="text-white text-base">Lorem ipsum dolor si amet lorem</p>
		</div>
		<div class="flex items-center gap-x-2">
			<Checkmark />
			<p class="text-white text-base">Lorem ipsum dolor si amet lorem</p>
		</div>
		<div class="flex items-center gap-x-2">
			<Checkmark />
			<p class="text-white text-base">Lorem ipsum dolor si amet lorem</p>
		</div>
		<div class="flex items-center gap-x-2">
			<Checkmark />
			<p class="text-white text-base">Lorem ipsum dolor si amet lorem</p>
		</div>
	</div>
</div>
<div class="mt-6 flex gap-x-6">
	<Button
		label="Upgrade"
		variant="variant-app-primary"
		bg="!bg-[#171A1C]"
		classes="!w-[111px] !h-12"
	/>
	<Button label="Change billing cycle" variant="variant-app-secondary" classes="!w-[194px] !h-12" />
	<Button label="Cancel Subscription" variant="variant-app-secondary" classes="!w-[194px] !h-12" />
</div>
<div class="infoBox mt-12">
	<div class="flex justify-between w-full items-start">
		<p class="text-white text-base font-medium">Billing Information</p>
		<Button label="Edit" variant="variant-app-secondary" classes="!w-[77px] !h-12" />
	</div>
	<div class="grid grid-cols-2 w-4/5 mt-7 gap-x-6 gap-y-5">
		<Input
			label="Full Name"
			value="Jacob Jones"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<Input
			label="Email"
			value="jacob@smartproperties.com"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<Input
			label="Phone Number"
			value="+1 628 400-1472"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<Input
			label="Brokerage"
			value="Smart Properties"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<Input
			label="State"
			value="California"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<Input
			label="City"
			value="San Francisco"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
		<div class="col-span-2 mb-8">
			<Input
				label="Full Address"
				value="104, 166 Geary St. 15th Floor, 94108"
				variant="variant-app-primary"
				type="text"
				placeholder="Full Name"
			/>
		</div>
	</div>
</div>
<div class="infoBox mt-12">
	<p class="text-white text-base font-medium">Payment Details</p>
	<div class="flex w-full justify-between mt-6">
		<div>
			<p class="text-[#707281] text-base">Card Number</p>
			<div class="flex gap-x-2 items-center mt-2">
				<img src={visaIcon} alt="" class="w-5 h-5 rounded" />
				<p>Visa •••• 8743</p>
			</div>
		</div>
		<div>
			<p class="text-[#707281] text-base">Expires</p>
			<p class="mt-2">06/2028</p>
		</div>
		<Button label="Edit" variant="variant-app-secondary" classes="!w-[77px] !h-12" />
	</div>
</div>

<style>
	.infoBox {
		@apply bg-[#1E2225] border border-white border-opacity-10 w-full h-full p-6 rounded-[10px];
	}

	.textGradient {
		background: linear-gradient(
			136deg,
			#3d7fff 11.86%,
			#3d85fd 22.23%,
			#3f96fa 36.07%,
			#42b3f6 51.98%,
			#46daef 69.28%,
			#49f9ea 81.04%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
