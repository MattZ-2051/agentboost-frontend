<script lang="ts">
	import CameraIcon from '$lib/assets/svg/CameraIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import type { User } from '$types/models';
	import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
	import ProfileAvatar from '../Avatars/ProfileAvatar.svelte';
	import { type ModalSettings } from '@skeletonlabs/skeleton';
	import { resetPasswordFx, updateUserProfileFx } from '$store/user';
	import type { UpdateUserData } from '$api/user/types';
	import { errorMessages } from '$lib/constants/toastMessages';
	import { uploadFileToBucket } from '$api/storage';
	import BusinessLogo from '../Avatars/BusinessLogo.svelte';

	export let user: User;

	let profileFile: any;
	let profilePreview: string = user.profileImg;
	let businessLogoPreview: string = user.businessLogo;
	let businessLogo: any;
	let fullName: string = user.fullName;
	let email: string = user.email;
	let brokerage: string = user.brokerage;
	let brandDescription: string = user.brandDescription;
	let phoneNumber: string = user.phoneNumber;
	let currentPassword: string;
	let newPassword: string;

	const toastStore = getToastStore();
	const modalStore = getModalStore();

	const handleProfileFileOnChange = (e: any) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		profileFile = image;

		reader.readAsDataURL(image);
		reader.onload = (e) => {
			profilePreview = e?.target?.result as string;
		};
	};

	const handleBusinessLogoOnChange = (e: any) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		businessLogo = image;
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			businessLogoPreview = e?.target?.result as string;
		};
	};

	const handleProfileImgFileInput = () => {
		document.getElementById('profileFile')?.click();
	};

	const handleBusinessLogoFileInput = () => {
		document.getElementById('businessLogo')?.click();
	};

	$: changes = profileFile
		? true
		: businessLogo
			? true
			: email !== user.email
				? true
				: fullName !== user.fullName
					? true
					: brokerage !== user.fullName && brokerage.length > 0
						? true
						: brandDescription !== user.brandDescription && brandDescription.length > 0
							? true
							: false;

	const handleResetPassword = async () => {
		if (
			!currentPassword ||
			!newPassword ||
			currentPassword?.length === 0 ||
			newPassword?.length === 0
		) {
			toastStore.trigger({
				message: 'Please provide current and new password.',
				background: 'variant-filled-error'
			});
			return;
		} else {
			try {
				await resetPasswordFx({ email: user.email, currentPassword, newPassword });
				toastStore.trigger({
					message: 'Password Reset',
					background: 'variant-filled-success'
				});
			} catch (e: any) {
				toastStore.trigger({
					message:
						e?.response?.status === 400
							? e?.response?.data?.message
							: errorMessages.support.message,
					background: 'variant-filled-error'
				});
			}
		}
	};

	const handleUserUpdate = async (updateMap: UpdateUserData) => {
		try {
			if (updateMap.profileImg) {
				updateMap.profileImg = profileFile;
				const file = profileFile;
				const filePath = `profilePhotos/${user.id}`;
				const data = new FormData();

				data.append('file', file);
				data.append('filePath', filePath);
				const res = await uploadFileToBucket(data);
				updateMap.profileImg = res;
			}
			if (updateMap.businessLogo) {
				updateMap.businessLogo = businessLogo;
				const file = businessLogo;
				const filePath = `businessLogos/${user.id}`;
				const data = new FormData();
				data.append('file', file);
				data.append('filePath', filePath);
				const res = await uploadFileToBucket(data);
				updateMap.businessLogo = res;
			}
			updateUserProfileFx({
				...updateMap
			});
			toastStore.trigger({
				message: 'Info Successfully Updated',
				background: 'variant-filled-success'
			});
			return;
		} catch (err) {
			toastStore.trigger({
				message: errorMessages.support.message,
				background: 'variant-filled-error'
			});
		}
	};
	const handleProfileChanges = async () => {
		let updatedInfo: string = '';
		const updateMap: UpdateUserData = {
			id: user.id
		};

		if (!changes) {
			toastStore.trigger({ message: 'No Changes', background: 'variant-filled-warning' });
			return;
		}

		if (fullName !== user.fullName) {
			updatedInfo += ' full name';
			updateMap.fullName = fullName;
		}

		if (profileFile) {
			updatedInfo += ' profile img';
			updateMap.profileImg = profileFile;
		}

		if (businessLogo?.length > 0 && businessLogo) {
			updatedInfo += ' business logo';
			updateMap.businessLogo = businessLogo;
		}

		if (brandDescription?.length > 0 && brandDescription !== user.brandDescription) {
			updatedInfo += ' brand description';
			updateMap.brandDescription = brandDescription;
		}

		if (brokerage?.length > 0 && brokerage !== user.brokerage) {
			updatedInfo += ' brokerage';
			updateMap.brokerage = brokerage;
		}

		if (updatedInfo === 'Are you sure you want to update') {
			toastStore.trigger({
				message: 'No Changes'
			});
		}

		const modal: ModalSettings = {
			type: 'component',
			component: 'modalConfirm',
			body: updatedInfo,
			title: 'Update Profile',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => r && handleUserUpdate(updateMap)
		};
		modalStore.trigger(modal);
	};
</script>

<div>
	<h1 class="text-[18px] font-semibold text-white">Profile 👋</h1>
	<p class="mt-[6px] text-[15px] font-normal text-[#707281]">
		This page displays general information about your account.
	</p>
</div>
<div class="mt-6 grid w-[90%] grid-cols-2 gap-x-[26px]">
	<div class="flex items-center gap-x-2">
		<ProfileAvatar width="w-20" src={profilePreview} />
		<div>
			<p class="mb-[6px] text-[15px] font-normal text-[#707281]">Profile image</p>
			<div class="imgBtn" on:click={handleProfileImgFileInput}>
				<div>
					<CameraIcon />
				</div>
				<input
					type="file"
					class="hidden h-full w-full"
					id="profileFile"
					name="profileImg"
					accept="image/png, image/jpeg, image/jpg"
					bind:files={profileFile}
					on:change={handleProfileFileOnChange}
				/>
				<p class="whitespace-nowrap text-[15px] font-normal text-[#C6C7CD]">Upload new image</p>
			</div>
		</div>
	</div>
	<div class="flex items-center gap-x-2">
		<BusinessLogo width="w-20" src={businessLogoPreview} />
		<div>
			<p class="mb-[6px] text-[15px] font-normal text-[#707281]">Business Logo</p>
			<div class="imgBtn" on:click={handleBusinessLogoFileInput}>
				<div>
					<CameraIcon />
				</div>
				<input
					type="file"
					class="hidden h-full w-full"
					id="businessLogo"
					name="businesslogo"
					accept="image/png, image/jpeg, image/jpg"
					bind:files={businessLogo}
					on:change={handleBusinessLogoOnChange}
				/>
				<p class="whitespace-nowrap text-[15px] font-normal text-[#C6C7CD]">Upload new image</p>
			</div>
		</div>
	</div>
	<div class="mt-[42px]">
		<Input
			label="Full Name"
			bind:value={fullName}
			variant="variant-app-primary"
			type="text"
			placeholder="Full Name"
		/>
	</div>
	<div class="mt-[42px]">
		<Input
			label="Email"
			disabled
			value={email}
			variant="variant-app-primary"
			type="text"
			placeholder="Email"
		/>
	</div>
	<div class="mt-5">
		<Input
			label="Phone Number"
			bind:value={phoneNumber}
			variant="variant-app-primary"
			type="text"
			placeholder="Phone Number"
		/>
	</div>
	<div class="mt-5">
		<Input
			label="Brokerage"
			bind:value={brokerage}
			variant="variant-app-primary"
			type="text"
			placeholder="Brokerage"
		/>
	</div>
	<div class="col-span-2 mt-5">
		<Input
			label="Brand description"
			bind:value={brandDescription}
			variant="variant-app-primary"
			type="textarea"
			rows={3}
			placeholder="Brand description"
		/>
		<div class="mt-6 flex w-full justify-end">
			<Button
				label="Save"
				onClick={handleProfileChanges}
				variant="variant-app-primary"
				bg="!bg-[#171A1C]"
				classes="!w-[187px] !h-12"
			/>
		</div>
	</div>
</div>
{#if !user.email.includes('@gmail')}
	<h1 class="mt-12 text-[18px] font-semibold text-white">Password Reset</h1>
	<div class="grid w-[90%] grid-cols-2 gap-x-[26px]">
		<div class="mt-5">
			<Input
				label="Current Password"
				bind:value={currentPassword}
				variant="variant-app-primary"
				type="password"
				placeholder="Current Password"
			/>
		</div>
		<div class="mt-5">
			<Input
				label="New password"
				bind:value={newPassword}
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
					onClick={handleResetPassword}
				/>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.imgBtn {
		@apply flex h-[36px] w-[192px] items-center justify-center gap-x-[10px] rounded-[90px] bg-[#2E2F37] px-[16px] py-[6px];
		@apply hover:cursor-pointer hover:bg-opacity-80;
	}
</style>
