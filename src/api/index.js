import axios from 'axios';

const sendAndReceiveRelatedThoughts = (thought) => {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://thought-bubbles-hop-backend-api.onboarding.dev';

    return axios({
        method: 'post',
        url: `${baseUrl}/findRelatedThoughts`,
        data: {
            thoughtText: thought
        }
    });
};

export { sendAndReceiveRelatedThoughts };