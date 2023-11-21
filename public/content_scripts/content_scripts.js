fetch(chrome.runtime.getURL('../index.html'))
        .then(response => response.text())
        .then(data => {
            console.log("data: ", data)
            //append body with data
            document.body.innerHTML += data;
            // other code
            // eg update injected elements,
            // add event listeners or logic to connect to other parts of the app
        }).catch(err => {
            // handle error
        });
