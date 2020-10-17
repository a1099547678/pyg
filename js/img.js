window.addEventListener('load', function() {
    var imges = document.getElementById('imges');
    var bgi = imges.querySelectorAll('i');
    var num = 0;
    var cs = 0;
    for (var i = 0; i < bgi.length; i++) {
        var left = -17 + (-62 * num);
        var top = -16 + (-72 * cs);
        num++;
        if (num % 4 == 0) {
            left = left - 2;
            num = 0;
            cs++;
        }
        bgi[i].style.backgroundPosition = left + 'px' + ' ' + top + 'px';
    }
})