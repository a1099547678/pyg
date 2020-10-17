window.addEventListener('load', function() {
    var uls = document.querySelector('.box_column').querySelectorAll('ul');
    var as = document.getElementById('xz').querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
        uls[i].setAttribute('index', i);
        as[i].setAttribute('index', i);
        as[i].addEventListener('click', function() {
            for (var i = 0; i < uls.length; i++) {
                uls[i].style.display = 'none';
            }
            uls[this.getAttribute('index')].style.display = 'block';
        })
    }
})