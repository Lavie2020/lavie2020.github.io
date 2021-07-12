// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        ('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '❤元气满满每一天❤~';
        clearTimeout(titleTime);
    } else {
        ('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '加油！❤~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});