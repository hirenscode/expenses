export const BACKEND_API_PATH = process.env.REACT_APP_ENDPOINT;

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
