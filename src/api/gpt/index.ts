import { get } from '..';

export const testPrompt = async () => {
	await get('/gpt/test');
};
