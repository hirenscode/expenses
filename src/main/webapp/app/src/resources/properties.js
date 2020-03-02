export const BACKEND_PROTOCOL_HTTPS = "https";
export const BACKEND_PROTOCOL_HTTP = "http";
export const BACKEND_DOMAIN_HEROKU = "expenses-live.herokuapp.com";
export const BACKEND_DOMAIN_LOCAL = "localhost";
export const BACKEND_PORT_LOCAL = "8080";
export const BACKEND_API_PATH_LOCAL = `${BACKEND_PROTOCOL_HTTP}://${BACKEND_DOMAIN_LOCAL}:${BACKEND_PORT_LOCAL}/api/v1`;
export const BACKEND_API_PATH_HEROKU = `${BACKEND_PROTOCOL_HTTPS}://${BACKEND_DOMAIN_HEROKU}/api/v1`;
export const BACKEND_API_PATH = BACKEND_API_PATH_HEROKU;
const FAKE_BACKEND = true;
export let IS_BACKEND_HEALTHY = () => {
    if (FAKE_BACKEND) return false;
    let isBackendHealthy = false;
    fetch(`${BACKEND_API_PATH}/health`)
        .then(response => {
            isBackendHealthy = (response.status === 200);
        });
    return isBackendHealthy;
}
