async function register(url,credentials) {
    let response = await fetch(url+'/api/register/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    console.log(credentials);
    if (response.status === 201) {
        alert('Successfully created !!! \nnow please login')
    } else {
        alert('Something went wrong! \ntry different username')
    }
}

export default register