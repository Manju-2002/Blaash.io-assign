import axios from 'axios';

const PLAYLIST_API_URL = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
const FEEDS_API_URL = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

export const getAllPlaylists = () => {
    return axios.post(PLAYLIST_API_URL, 
    { "Content_Type": 2 }, 
    {
        headers: {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'TYKE070323'
        }
    });
};

export const getFeeds = () => {
    return axios.post(FEEDS_API_URL, 
    { "Index": 1, "ContentType": [2], "IsTagged": false, "URL": "" },
    {
        headers: {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'TYKE070323'
        }
    });
};
