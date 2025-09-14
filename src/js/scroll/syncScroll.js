// syncScroll.js

function syncScroll()
{
    // grab the markdown input (left side)
    let mdInput = ge('mdInput');

    // grab the html output (right side)
    let htmlOutput = ge('htmlOutput');

    // these two flags prevent an infinite loop (scroll left triggers right, then right triggers left, forever)
    let isSyncingFromMd = false;
    let isSyncingFromHtml = false;

    // when user scrolls inside the markdown input
    mdInput.addEventListener('scroll', function()
    {
        // only run if the scroll did not come from the html side
        if (!isSyncingFromHtml)
        {
            // mark that we are syncing from markdown
            isSyncingFromMd = true;

            // find scroll position as a ratio (0 = top, 1 = bottom)
            let ratio = mdInput.scrollTop / (mdInput.scrollHeight - mdInput.clientHeight);

            // set the html output scrollTop based on that ratio
            htmlOutput.scrollTop = ratio * (htmlOutput.scrollHeight - htmlOutput.clientHeight);

            // finished syncing, release the flag
            isSyncingFromMd = false;
        }
    });

    // when user scrolls inside the html output
    htmlOutput.addEventListener('scroll', function()
    {
        // only run if the scroll did not come from the markdown side
        if (!isSyncingFromMd)
        {
            // mark that we are syncing from html
            isSyncingFromHtml = true;

            // find scroll position as a ratio (0 = top, 1 = bottom)
            let ratio = htmlOutput.scrollTop / (htmlOutput.scrollHeight - htmlOutput.clientHeight);

            // set the markdown input scrollTop based on that ratio
            mdInput.scrollTop = ratio * (mdInput.scrollHeight - mdInput.clientHeight);

            // finished syncing, release the flag
            isSyncingFromHtml = false;
        }
    });
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

