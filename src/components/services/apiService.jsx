export const fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=8');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data from API');
    }
};  