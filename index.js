function redirectToUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');

    document.fonts.ready.then(() => {
    
        if (targetID) {
            window.location.href = 'steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/' + targetID
            const content = document.querySelector('.status');
            const buttons = document.querySelectorAll('.button');
            content.innerHTML = 'Check Steam! The page has been opened!'
            //buttons.style.display = 'inherit'

            for (i = 0; i < buttons.length; i++) {
                buttons[i].style.display = 'inherit'
            }

            return
        }
        //document.body.innerHTML = 'No URL provided.';
        window.location.href = "https://electrovoyage.github.io"
    }).catch((error) => {
        console.error(error)
    });
}


/*
document.fonts.ready.then(() => {
    console.log('All fonts are loaded');
    // You can now use the loaded fonts
}).catch((error) => {
    console.error(error);
});
*/

function opensteaminbrowser() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');
    if (targetID) {
        window.location.href = 'https://steamcommunity.com/sharedfiles/filedetails/' + targetID
    }
}

window.onload = redirectToUrl;