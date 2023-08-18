export default async function saveGameState(url, access_token, grid) {
    try {
        const response = await fetch(url + '/game/sudoku/save-state/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body: JSON.stringify({ 'grid': grid })
        });

        if (response.ok) {
            alert('State saved successfully.');
        } else {
            const errorData = await response.json(); // Parse the response JSON
            console.log('Error response:', errorData);
        }
    } catch (error) {
        console.log('Fetch error:', error);
    }
}
