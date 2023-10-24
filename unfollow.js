/**

Script to unfollow everyone.

1. Go to your following profile - https://www.facebook.com/YOUR_ID/following
2. Open console with `CTRL + SHIFT + I`
3. Select `Console` tab
4. Copy paste the code.
5. Press enter.
 
 **/

let intervalId = setInterval(function() {
    let manageButtons = document.querySelectorAll('div[aria-label="Manage"]');
    let manageButton = manageButtons[0];
 
    if (manageButton) {

        setTimeout(() => {

            manageButton.click();
        }, 800);
     
        var unfollowButtons = null;
        let unfollowInterval = setInterval(function() {

            setTimeout(() => {

                unfollowButtons = document.querySelector('div[role="menuitem"]');
                if (unfollowButtons) {
                    unfollowButtons.click();
                    window.scrollBy(0, 60);
                }
            }, 500);
            clearInterval(unfollowInterval);
        }, 500);
     
        // setTimeout(() => {

        //     manageButton.remove();
         
        //     if (unfollowButtons) {
        //         unfollowButtons.click();
        //     }
        // }, 1000);
    } else {
      console.log("Empty buttom")
    }
}, 500);
