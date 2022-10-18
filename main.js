let delay;
let iPlay = false;
document.querySelector('video').addEventListener('pause',()=>{
    if(iPlay){
        setTimeout(()=>document.querySelector('video').play(),19);
    };
});
window.addEventListener('keyup',()=>{
    if(window.event.ctrlKey && !window.event.shiftKey && window.event.keyCode == 73){
        iPlayInp = parseFloat(prompt('不间断播放多少小时：(ex: 1.5 = 1h30m)','3'));
        if(isNaN(iPlayInp)){
            return;
        }else{
            iPlay = true;
            clearTimeout(delay);
            delay = setTimeout(()=>iPlay = false,3600000*iPlayInp);
        };
    };
});
