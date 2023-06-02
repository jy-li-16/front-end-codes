
(function() {
    let JY = {};



    JY.q = function(selector) {
        return document.querySelector(selector);
    };

    JY.qs = function(selector) {
        return document.querySelectorAll(selector);
    };

    window.JY = JY;
})();
