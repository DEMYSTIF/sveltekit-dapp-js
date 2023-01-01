import { contractInstance } from '$lib/ethers'

export const actions = {
    getCert: async ({ request }) => {
        let form = await request.formData()
        let payload = Object.fromEntries(form)
        console.log(payload)
        let result = await contractInstance.Certificates(payload.cert_id);
        console.log(result)
        return {
            response: result,
        }
    }
}
