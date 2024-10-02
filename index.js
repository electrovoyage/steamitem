function redirectToUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');
    if (targetID) {
        window.location.href = 'steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/' + targetID
        const content = document.querySelector('.status');
        const button = document.querySelector('.button');
        const button1 = document.querySelector('.button1');
        content.innerHTML = 'Check Steam! The page has been opened!'
        button.style.display = 'inherit'
        button1.style.display = 'inherit'
        return
    }
    //document.body.innerHTML = 'No URL provided.';
    window.location.href = "https://electrovoyage.github.io"
}

function opensteaminbrowser() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');
    if (targetID) {
        window.location.href = 'https://steamcommunity.com/sharedfiles/filedetails/' + targetID
    }
}

window.onload = redirectToUrl;