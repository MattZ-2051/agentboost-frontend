<script lang="ts">
	import CameraIcon from '$lib/assets/svg/CameraIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
</script>

<div>
	<h1 class="text-[18px] font-semibold text-white">Profile 👋</h1>
	<p class="mt-[6px] text-[15px] font-normal text-[#707281]">
		This page displays general information about your account.
	</p>
</div>
<div class="mt-6 grid w-[90%] grid-cols-2 gap-x-[26px]">
	<div class="flex items-center gap-x-2">
		<img class="relative h-20 w-20 rounded-[60px]" src="https://via.placeholder.com/80x80" alt="" />
		<div>
			<p class="mb-[6px] text-[15px] font-normal text-[#707281]">Profile image</p>
			<div class="imgBtn">
				<div>
					<CameraIcon />
				</div>
				<p class="whitespace-nowrap text-[15px] font-normal text-[#C6C7CD]">Upload new image</p>
			</div>
		</div>
	</div>
	<div class="flex items-center gap-x-2">
		<img class="relative h-20 w-20 rounded-[60px]" src="https://via.placeholder.com/80x80" alt="" />
		<div>
			<p class="mb-[6px] text-[15px] font-normal text-[#707281]">Profile image</p>
			<div class="imgBtn">
				<div>
					<CameraIcon />
				</div>
				<p class="whitespace-nowrap text-[15px] font-normal text-[#C6C7CD]">Upload new image</p>
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
			placeholder="Email"
		/>
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
	<div class="col-span-2 mt-5">
		<Input
			label="Brand description"
			value=""
			variant="variant-app-primary"
			type="textarea"
			rows={3}
			placeholder="Brand description"
		/>
		<div class="mt-6 flex w-full justify-end">
			<Button
				label="Save"
				variant="variant-app-primary"
				bg="!bg-[#171A1C]"
				classes="!w-[187px] !h-12"
			/>
		</div>
	</div>
</div>
<h1 class="mt-12 text-[18px] font-semibold text-white">Password Reset</h1>
<div class="grid w-[90%] grid-cols-2 gap-x-[26px]">
	<div class="mt-5">
		<Input
			label="Current Password"
			value="pass@123"
			variant="variant-app-primary"
			type="password"
			placeholder="Current Password"
		/>
	</div>
	<div class="mt-5">
		<Input
			label="New password"
			value=""
			variant="variant-app-primary"
			type="password"
			placeholder="New Password"
		/>
		<div class="mt-6 flex w-full justify-end">
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
		@apply flex h-[36px] w-[192px] items-center justify-center gap-x-[10px] rounded-[90px] bg-[#2E2F37] px-[16px] py-[6px];
		@apply hover:cursor-pointer hover:bg-opacity-80;
	}
</style>
