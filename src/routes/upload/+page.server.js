// import { contractInstance } from '$lib/ethers';

export const actions = {
	default: async ({ request }) => {
		let form = await request.formData();
		let payload = Object.fromEntries(form);
		console.log(payload);
		const file = form.get('document');
		console.log(file);
		let ab = await file.arrayBuffer();
		// const client = create('/ip4/127.0.0.1/tcp/5001');
		// let dm = await client.add('gtrhtght')
		// let dm = await ipfs();
		// console.log(dm)
		console.log(ab);
		return {
			success: true
		};
	}
};
