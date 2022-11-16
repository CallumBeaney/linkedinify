// import findAndReplaceDOMText from 'findandreplacedomtext';
// https://github.com/padolsey/findAndReplaceDOMText

const reggie = new RegExp(/\!|\.|\?/, 'g');

function makeDeeper({text}) {
    const abbr = document.createElement('abbr');
    abbr.title = text;
    abbr.innerHTML = text + "<br><br>";
    return abbr;    
}

function Linkedinify() 
{   
    findAndReplaceDOMText(document.body, {
        find: "...",
        replace: "…",
    });

    findAndReplaceDOMText(document.body, {
        find: reggie,
        replace: makeDeeper,
    });
}