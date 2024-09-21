const conf = {
    authDomainUrl: String(import.meta.env.VITE_DOMAIN_API),
    authClientId: String(import.meta.env.VITE_CLIENT_ID),
    viteBaseUrl: String(import.meta.env.VITE_BASE_URL)
}

export default conf;