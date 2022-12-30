export async function load() {
    let user = {
        name: 'Mobin'
    };
    return { user };
}

export const actions = {
    default: async ({ request }) => {
        let form = await request.formData();
        console.log(form);
        return {
            success: true,
            name: 'Mobin'
        };
    }
};
