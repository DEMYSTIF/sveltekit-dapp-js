export const GET = () => {
    return new Response(JSON.stringify({ message: "Fetched" }), { status: 200 })
}

export const POST = async ({ request }) => {
    const body = await request.json()
    console.log(body)
    return new Response(JSON.stringify({ message: "Success", result }), { status: 201 })
}