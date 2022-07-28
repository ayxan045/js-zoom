$(".zoomImage").on("mousemove",function(e ){
    // let x,y
    // x=e.offsetX/this.offsetWidth*100
    // x=e.offsetY/this.offsetHeight*100
    // $(".zoomImage").css({
    //     backgroundPosition:" "+x+"%"+","+y+"%"
    // })

    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
})