const config = {
    env: {
        apiEndpoin: process.env.NEXT_PUBLIC_APIENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEy!
                }
    }
}
export default config;