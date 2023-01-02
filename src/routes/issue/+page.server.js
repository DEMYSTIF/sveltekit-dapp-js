import { contractInstance } from '$lib/ethers';

export const actions = {
	default: async ({ request }) => {
		let form = await request.formData();
		let payload = Object.fromEntries(form);
		console.log(payload);
		let trx = await contractInstance.issueCertificate(
			payload.id,
			payload.candidate,
			payload.course,
			payload.grade,
			payload.date
		);
		console.log(trx);
		return {
			success: true,
			id: payload.id
		};
	}
};
