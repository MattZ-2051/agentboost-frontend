<script lang="ts">
	import CameraIcon from '$lib/assets/svg/CameraIcon.svelte';
	import DangerIconBlue from '$lib/assets/svg/DangerIconBlue.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
</script>

<div>
	<h1 class="text-white font-semibold text-[18px]">Profile 👋</h1>
	<p class="text-[#707281] text-[15px] mt-[6px] font-normal">
		This page displays general information about your account.
	</p>
</div>
<div class="grid grid-cols-2 gap-x-[26px] w-[90%] mt-6">
	<div class="flex gap-x-2 items-center">
		<img class="w-20 h-20 relative rounded-[60px]" src="https://via.placeholder.com/80x80" alt="" />
		<div>
			<p class="text-[#707281] text-[15px] font-normal mb-[6px]">Profile image</p>
			<div class="imgBtn">
				<div>
					<CameraIcon />
				</div>
				<p class="text-[#C6C7CD] text-[15px] font-normal whitespace-nowrap">Upload new image</p>
			</div>
		</div>
	</div>
	<div class="flex gap-x-2 items-center">
		<img class="w-20 h-20 relative rounded-[60px]" src="https://via.placeholder.com/80x80" alt="" />
		<div>
			<p class="text-[#707281] text-[15px] font-normal mb-[6px]">Profile image</p>
			<div class="imgBtn">
				<div>
					<CameraIcon />
				</div>
				<p class="text-[#C6C7CD] text-[15px] font-normal whitespace-nowrap">Upload new image</p>
			</div>
		</div>
	</div>
	<div class="mt-[42px]">
		<Input
			label="Full Name"
			value="Jacob Jones"
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
	</div>
	<div class="mt-[42px]">
		<Input
			label="Email"
			value="jacob@smartproperties.com"
			variant="variant-app-primary"
			type="text"
			placeholder="Connect Email"
		>
			<span slot="icon">
				<DangerIconBlue />
			</span>
		</Input>
	</div>
	<div class="mt-5">
		<Input
			label="Phone Number"
			value="+1 628 400-1472"
			variant="variant-app-primary"
			type="text"
			placeholder="Phone Number"
		/>
	</div>
	<div class="mt-5">
		<Input
			label="Brokerage"
			value="Smart Properties"
			variant="variant-app-primary"
			type="text"
			placeholder="Brokerage"
		/>
	</div>
	<div class="mt-5 col-span-2">
		<Input
			label="Brand description"
			value=""
			variant="variant-app-primary"
			type="textarea"
			rows={3}
			placeholder="Brand description"
		/>
		<div class="w-full flex justify-end mt-6">
			<Button
				label="Save"
				variant="variant-app-primary"
				bg="!bg-[#171A1C]"
				classes="!w-[187px] !h-12"
			/>
		</div>
	</div>
</div>
<h1 class="text-white mt-10 font-bold text-[18px]">Password Reset</h1>
<div class="grid grid-cols-2 gap-x-[26px] w-[90%]">
	<div class="mt-5">
		<Input
			label="Brokerage"
			value="Smart Properties"
			variant="variant-app-primary"
			type="text"
			placeholder="Brokerage"
		/>
	</div>
	<div class="mt-5">
		<Input
			label="Brokerage"
			value="Smart Properties"
			variant="variant-app-primary"
			type="text"
			placeholder="Brokerage"
		/>
		<div class="w-full flex justify-end mt-6">
			<Button
				label="Reset Password"
				variant="variant-app-primary"
				bg="!bg-[#171A1C]"
				classes="!w-[187px] !h-12"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.imgBtn {
		@apply bg-[#2E2F37] rounded-[90px] py-[6px] px-[16px] flex items-center justify-center h-[36px] w-[192px] gap-x-[10px];
		@apply hover:cursor-pointer hover:bg-opacity-80;
	}
</style>
