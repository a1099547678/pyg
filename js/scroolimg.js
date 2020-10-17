window.addEventListener('load', function() {
    var al = document.querySelector('.al');
    var ar = document.querySelector('.ar');
    var scroolimg = document.querySelector('.scroolimg')
    var scroolimgWidth = scroolimg.offsetWidth;
    var xyd = 0;
    var flag = true;
    var num = 0;
    //显示
    scroolimg.addEventListener('mouseenter', function() {
        al.style.display = 'block';
        ar.style.display = 'block';
        clearInterval(times);
        times = null;
    })
    scroolimg.addEventListener('mouseleave', function() {
            al.style.display = 'none';
            ar.style.display = 'none';
            times = setInterval(function() {
                ar.click();
            }, 2500);
        })
        //创建小li圆点
    var ul = scroolimg.querySelector('ul');
    var ol = scroolimg.querySelector('ol');

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        ol.children[0].className = 'bgcol';
        //ol li的点击事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'bgcol';
            var index = this.getAttribute('index');
            console.log(index);
            num = index;
            xyd = index;
            animate(ul, -index * scroolimgWidth);
        })
    }
    //克隆第一张图片放到最后
    var oneli = ul.children[0].cloneNode(true);
    ul.appendChild(oneli);

    //右移动
    ar.addEventListener('click', function() {
        if (flag) {
            //节流阀
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * scroolimgWidth, function() {
                flag = true;
            });
            //小圆点跟随箭头一起走动
            xyd++;
            if (xyd == ol.children.length) {
                xyd = 0
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[xyd].className = 'bgcol';
        }
    })


    //左移动
    al.addEventListener('click', function() {
            if (flag) {
                //节流阀
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * scroolimgWidth + 'px';
                }
                num--;
                animate(ul, -num * scroolimgWidth, function() {
                    flag = true;
                });
                //小圆点跟随箭头一起走动
                xyd--;
                if (xyd < 0) {
                    xyd = ol.children.length - 1;
                }
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                ol.children[xyd].className = 'bgcol';
            }
        })
        //制动播放
    var times = setInterval(function() {
        ar.click();
    }, 2500);
})