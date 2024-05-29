const newProfilePicUrl = "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-small-url-icon-opened-in-the-browser-image_2291957.jpg";
function replaceProfilePictures() {
    const profilePics = [
        "img.ivm-view-attr__img--centered", // Profile pictures in posts
        ".presence-entity__image--profile", // Profile pictures in other parts of the site
        ".profile-photo", // Another possible class for profile pictures
        ".feed-shared-actor__avatar img", // Profile images in the feed
        ".update-components-actor__avatar img" // Another possible selector in feed
    ];
    // const profilePics = document.querySelectorAll(
    //     ".update-components-actor__avatar img.ivm-view-attr__img--centered," +
    //     ".presence-entity__image--profile"
    // );
    // const profilePics = document.querySelectorAll(
    //     "img.ivm-view-attr__img--centered," +
    //     "img.presence-entity__image--profile"
    // );
    profilePics.forEach(img => {
        console.log("Original image src:", img.src);
        img.src = newProfilePicUrl;
        console.log("New image src set to:", img.src);
        
        img.onerror = function() {
            console.error("Failed to load new image:", newProfilePicUrl);
        };
    });
}

// Run the function when the script loads
replaceProfilePictures();

// Set up a MutationObserver to catch new posts loaded dynamically
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        replaceProfilePictures();
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
