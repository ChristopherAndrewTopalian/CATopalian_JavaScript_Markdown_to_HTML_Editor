// makeInterface.js

function makeInterface()
{
    // mainDiv
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    // subDiv
    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    // button to load markdown file
    let loadButton = ce('button');
    loadButton.textContent = 'Load .md File';
    loadButton.onmouseover = function()
    {
        hoverSound();
    };
    loadButton.onclick = function()
    {
        clickSound();

        let fileInput = ce('input');
        fileInput.type = 'file';
        fileInput.accept = '.md';
        fileInput.style.display = 'none';

        fileInput.onchange = function(event)
        {
            inputSound();

            let file = event.target.files[0];

            let reader = new FileReader();

            reader.onload = function(e)
            {
                mdInput.value = e.target.result;

                renderMarkdown();
            };
            reader.readAsText(file);
        };

        // simulate a click on the hidden input
        fileInput.click();
    };
    subDiv.append(loadButton);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let inOutContainer = ce('div');
    inOutContainer.style.display = 'flex';
    inOutContainer.style.flexDirection = 'row';
    inOutContainer.style.gap = '10px';
    subDiv.append(inOutContainer);

    //-//

    // textarea for markdown input
    let mdInput = ce('textarea');
    mdInput.id = 'mdInput';
    mdInput.style.width = '49%';
    mdInput.style.height = '83vh';
    mdInput.style.border = '1px solid gray';
    mdInput.style.padding = '4px 4px';
    mdInput.style.overflowY = 'scroll';
    // live update
    mdInput.addEventListener('input', renderMarkdown);
    inOutContainer.append(mdInput);

    //-//

    // htmlOutput area
    let htmlOutput = ce('div');
    htmlOutput.id = 'htmlOutput';
    htmlOutput.style.width = '49%';
    htmlOutput.style.height = '80vh';
    htmlOutput.style.border = '1px solid gray';
    htmlOutput.style.overflowY = 'scroll';
    htmlOutput.style.padding = '4px 4px';
    inOutContainer.append(htmlOutput);

    //-//

    // button container under htmlOutput
    let downloadBtnCont = ce('div');
    downloadBtnCont.style.display = 'flex';
    // place the button to the right side
    downloadBtnCont.style.justifyContent = 'flex-end';
    downloadBtnCont.style.marginTop = '1px';
    subDiv.append(downloadBtnCont);

    //-//

    // download button
    let downloadButton = ce('button');
    downloadButton.textContent = 'Download';
    downloadButton.onmouseover = function()
    {
        hoverSound();
    };
    downloadButton.onclick = function()
    {
        clickSound();

        download('htmlOutput');
    };
    downloadBtnCont.append(downloadButton);
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

