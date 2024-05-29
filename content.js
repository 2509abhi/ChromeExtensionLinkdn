const newProfilePicUrl = "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-small-url-icon-opened-in-the-browser-image_2291957.jpg";
function replaceProfilePictures() {
    
    const profilePics = document.querySelectorAll(
        ".update-components-actor__avatar img.ivm-view-attr__img--centered," +
        ".presence-entity__image--profile"
    );
    profilePics.forEach(img => {
        console.log("Original image src:", img.src);
        img.src = newProfilePicUrl;
        console.log("New image src set to:", img.src);
        
        img.onerror = function() {
            console.error("Failed to load new image:", newProfilePicUrl);
        };
    });
}

replaceProfilePictures();

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        replaceProfilePictures();
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
