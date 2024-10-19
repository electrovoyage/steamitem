function redirectToUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');
    if (targetID) {
        window.location.href = 'steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/' + targetID
        const content = document.querySelector('.status');
        const buttons = document.querySelector('.button');
        content.innerHTML = 'Check Steam! The page has been opened!'
        buttons.style.display = 'inherit'
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