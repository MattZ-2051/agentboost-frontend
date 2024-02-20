<script lang="ts">
	import Checkmark from '$lib/assets/svg/Checkmark/Checkmark.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import visaIcon from '$lib/assets/images/CC/visa.png';
</script>

<h1 class="text-[18px] font-semibold text-white">Subscription</h1>
<p class="mt-[6px] text-[15px] text-[#707281]">
	This page displays general information about your subscription.
</p>
<div class="mt-8">
	<Box width="w-full" height="h-full" bgColor="bg-[#1E2225]" classes="p-6 rounded-[10px]">
		<div class="flex h-full w-full gap-x-12">
			<div class="flex h-full w-2/3 flex-col justify-between">
				<div>
					<p class="text-base font-medium text-white">Current Plan</p>
					<p class="textGradient mt-[21px] w-fit text-[32px] font-medium leading-normal">
						Pro Package
					</p>
				</div>
				<div class="mt-[52px] flex h-full items-start gap-x-[48px]">
					<div>
						<p class="text-base text-[#707281]">Status</p>
						<div class="mt-2 flex items-center gap-x-2">
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
						<p class="text-base text-[#707281]">Price/month</p>
						<p class="mt-2">US$99.00</p>
					</div>
					<div>
						<p class="text-base text-[#707281]">Billing Cycle</p>
						<p class="mt-2">4th each month</p>
					</div>
					<div>
						<p class="text-base text-[#707281]">Active Since</p>
						<p class="mt-2">Aug 20, 2023</p>
					</div>
				</div>
				<div class="mt-[55px]">
					<p class="font-medium">Terms & Conditions</p>
				</div>
			</div>
			<div class="flex w-1/3 flex-col gap-y-4">
				<p class="mb-[21px] text-base text-[#707281]">Included in this plan</p>
				<div class="flex items-center gap-x-2">
					<Checkmark />
					<p class="text-base text-white">Lorem ipsum dolor si amet lorem</p>
				</div>
				<div class="flex items-center gap-x-2">
					<Checkmark />
					<p class="text-base text-white">Lorem ipsum dolor si amet lorem</p>
				</div>
				<div class="flex items-center gap-x-2">
					<Checkmark />
					<p class="text-base text-white">Lorem ipsum dolor si amet lorem</p>
				</div>
				<div class="flex items-center gap-x-2">
					<Checkmark />
					<p class="text-base text-white">Lorem ipsum dolor si amet lorem</p>
				</div>
			</div>
		</div>
	</Box>
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

<div class="mt-12">
	<Box width="w-full" height="h-full" bgColor="bg-[#1E2225]" classes="p-6 rounded-[10px]">
		<div class="flex w-full justify-between">
			<p class="text-base font-medium text-white">Billing Information</p>
			<Button label="Edit" variant="variant-app-secondary" classes="!w-[77px] !h-12" />
		</div>
		<div class="grid w-4/5 grid-cols-2 gap-x-6 gap-y-5">
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
	</Box>
</div>
<div class="mt-12">
	<Box width="w-full" height="h-full" bgColor="bg-[#1E2225]" classes="p-6 rounded-[10px]">
		<p class="text-base font-medium text-white">Payment Details</p>
		<div class="mt-[25px] flex w-full justify-between">
			<div>
				<p class="text-base font-normal text-[#707281]">Card Number</p>
				<div class="mt-4 flex items-center gap-x-2">
					<img src={visaIcon} alt="" class="h-5 w-5 rounded" />
					<p>Visa •••• 8743</p>
				</div>
			</div>
			<div>
				<p class="text-base font-normal text-[#707281]">Expires</p>
				<p class="mt-4">06/2028</p>
			</div>
			<div class="flex h-full w-fit items-end">
				<Button label="Edit" variant="variant-app-secondary" classes="!w-[77px] !h-12" />
			</div>
		</div>
	</Box>
</div>

<style lang="postcss">
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
