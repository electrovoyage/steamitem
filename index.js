function redirectToUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');
    if (targetID) {
        window.location.href = 'steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/' + targetID
        document.body.innerHTML = 'Check Steam! The page has been opened!'
        return
    }
    //document.body.innerHTML = 'No URL provided.';
    window.location.href = "https://tpecool.github.io"
}
window.onload = redirectToUrl;