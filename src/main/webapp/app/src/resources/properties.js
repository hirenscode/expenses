// Log the environment variable to debug
console.log("REACT_APP_ENDPOINT:", process.env.REACT_APP_ENDPOINT);

// Ensure we always have a value
export const BACKEND_API_PATH = process.env.REACT_APP_ENDPOINT || '/api/v1';

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
