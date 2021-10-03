const API_BASE = 'https://www.breakingbadapi.com/api';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getCharactersList: async (query) => {
        return (
            await basicFetch(`/characters?name=${query}`)
        )
    }
}