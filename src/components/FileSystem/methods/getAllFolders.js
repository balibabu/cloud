async function getAllFolders(url, authTokens, setFolders) {
    try {
        const response = await fetch(url + `/file/folders/`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + authTokens.access
            }
        });
        if (response.ok) {
            const data = await response.json();
            setFolders(data)
        } else {
            alert('Failed to fetch folders');
            console.log(response);
        }
    } catch (error) {
        alert(error);
        console.log(error);
    }
}

export default getAllFolders