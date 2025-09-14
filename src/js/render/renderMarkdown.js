// renderMarkdown.js

function renderMarkdown()
{
    let input = ge('mdInput').value;

    //-//

    let output = ge('htmlOutput');

    //-//

    // replacements
    let html = input;

    // heading (#)
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // heading (##)
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");

    // heading (###)
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");

    // heading (####)
    html = html.replace(/^#### (.*$)/gim, "<h4>$1</h4>");

    // heading (#####)
    html = html.replace(/^##### (.*$)/gim, "<h5>$1</h5>");

    // heading (######)
    html = html.replace(/^###### (.*$)/gim, "<h6>$1</h6>");

    // bold **text**
    html = html.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");

    // italic *text*
    html = html.replace(/\*(.*?)\*/gim, "<i>$1</i>");

    // inline code `code`
    html = html.replace(/`([^`]+)`/gim, "<code>$1</code>");

    // blockquote > text
    html = html.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");

    // unordered lists (- item)
    html = html.replace(/(?:^|\n)(- .*(?:\n- .*)*)/g, function(match)
    {
        let items = match.trim().split(/\n/).map(function(line)
        {
            return "<li>" + line.replace(/^- /, '') + "</li>";
        }).join('');
        return "<ul>" + items + "</ul>";
    });

    // ordered lists (1. item, 2. item, etc.)
    html = html.replace(/(?:^|\n)(\d+\. .*(?:\n\d+\. .*)*)/g, function(match)
    {
        let items = match.trim().split(/\n/).map(function(line)
        {
            return "<li>" + line.replace(/^\d+\. /, '') + "</li>";
        }).join('');
        return "<ol>" + items + "</ol>";
    });

    // links [text](url)
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>");

    // images ![alt](url)
    html = html.replace(/\!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' style='max-width:100%;'/>");

    // horizontal rule ---
    html = html.replace(/^---$/gim, "<hr>");

    // line breaks
    html = html.replace(/\n/g, "<br>");

    output.innerHTML = html;
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

