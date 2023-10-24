/**

Script to unfollow everyone.

1. Go to your following profile - https://www.facebook.com/YOUR_ID/following
2. Open console with `CTRL + SHIFT + I`
3. Select `Console` tab
4. Copy paste the code.
5. Press enter.
 
 **/

let unfollow = setInterval(function() {
    let manageButtons = document.querySelectorAll('div[aria-label="Manage"]');
    let manageButton = manageButtons[0];
 
    if (manageButton) {

        setTimeout(() => {
            manageButton.click();
        }, 300);
     
        var unfollowButtons = null;
        let unfollowInterval = setInterval(function() {

            setTimeout(() => {

                unfollowButtons = document.querySelector('div[role="menuitem"]');

                if (unfollowButtons) {
                    unfollowButtons.click();
                    window.scrollBy(0, 60);
                }
            }, 300);
            
            clearInterval(unfollowInterval);
        }, 400);
     
        setTimeout(() => {

            manageButton.remove();
         
            if (unfollowButtons) {
                unfollowButtons.click();
            }
        }, 600);

    } else {
      console.log("Empty buttom!")
    }
}, 1800);


/**

Script to unlike everyone.

1. Go to Settings & Privacy > Feed > Unfollow people and groups
2. Open console with `CTRL + SHIFT + I`
3. Select `Console` tab
4. Copy paste the code.
5. Press enter.
 
 **/

let unlike = setInterval(function() {
    let manageButtons = document.querySelectorAll('div[aria-label="Action options"]');
    let manageButton = manageButtons[0];
 
    if (manageButton) {

        setTimeout(() => {
            manageButton.click();
        }, 300);
     
        var unfollowButtons = null;
        let unfollowInterval = setInterval(function() {

            setTimeout(() => {

                unfollowButtons = document.querySelector('div[role="menuitem"]');
                console.log(unfollowButtons);

                if (unfollowButtons) {
                    unfollowButtons.click();
                    window.scrollBy(0, 60);
                }
            }, 600);
            
            clearInterval(unfollowInterval);
        }, 600);

    } else {
      console.log("Empty button!")
    }
}, 1800);


// scroller = setInterval(function() {
//     window.scrollBy(0, 60);
// }, 2100);

// clearInterval(scroller);



