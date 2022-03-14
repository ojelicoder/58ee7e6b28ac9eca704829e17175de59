import axios from 'axios';
const apiURL = 'https://teknasyon.netlify.app/.netlify/functions/products',
accessToken = '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';

export const GET_PRODUCTLIST = () => axios.get(apiURL, {
    headers: {
        'X-Access-Token': accessToken
    }
});