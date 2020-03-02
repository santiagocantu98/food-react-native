import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IvsFnfaOrV5BcNcS0da68rI0TxsikFpDLe5w2gmMpbmPMPAkQabn8ycjankpoTspwnEv6dyGwIc1-KtdSmrp4hMf5mTVyueYf2X7j2BqsSZLsD6zulD_BBJQV-dlXXYx'
    }
});

