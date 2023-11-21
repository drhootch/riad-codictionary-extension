fetch(chrome.runtime.getURL('../app/riadh_main.html'))
    .then(response => response.text())
    .then(data => {
let parser = new DOMParser();
let doc = parser.parseFromString(data, "text/html");
document.body.appendChild(doc.body.firstChild);
    }).catch(err => {
        // handle error
    });
