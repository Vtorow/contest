function whenDOMContentLoaded() {
    return new Promise(function(resolve) {
        if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', resolve);}
        else { resolve(); }
    });
}

whenDOMContentLoaded().then(function() {
    console.log('1234');
});