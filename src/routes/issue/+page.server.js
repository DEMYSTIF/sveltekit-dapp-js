import { signer } from '$lib/ethers';
import { deployer, contract } from '$lib/details';

export const actions = {
    default: async ({ request }) => {
        let form = await request.formData();
        let payload = Object.fromEntries(form)
        console.log(payload);
        console.log(signer)
        console.log(deployer)
        return {
            success: true,
            id: payload.certificate_id
        };
    }
};
