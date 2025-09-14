// download.js

function download(whichElement)
{
    // get the rendered html
    let data = ge(whichElement).innerHTML;

    // insert newlines between tags so the saved file looks more readable
    data = data.replace(/></g, ">\n<");

    // create an anchor element
    let ourElement = ce("a");

    // blob as html
    let theType = new Blob([data],
    {
        type: "text/html"
    });

    let url = window.URL.createObjectURL(theType);

    ourElement.href = url;

    // default filename
    ourElement.download = "download.html";

    // trigger the download
    ourElement.click();

    // clean up
    window.URL.revokeObjectURL(url);
}

//----//

// if we want everything on one line we can use downloadFormatToOneLine function
function downloadFormatToOneLine(whichElement)
{
    // get html content from the element
    let data = ge(whichElement).innerHTML;

    // create an anchor element
    let ourElement = ce("a");

    // create a blob with html type
    let theType = new Blob([data],
    {
        type: "text/html"
    });

    // create a temp url
    let url = window.URL.createObjectURL(theType);
    ourElement.href = url;

    // always use default filename
    ourElement.download = "download.html";

    // trigger download
    ourElement.click();

    // cleanup
    window.URL.revokeObjectURL(url);
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

