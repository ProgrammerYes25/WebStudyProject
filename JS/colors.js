function nightDayHandler(self){
    if(self.value === 'night'){
        navtext1.chsatcolor("#F8CACC");
        navtext2.satcolor("#DEE9FD");
        navtext2.chsatcolor("#ADC6F6");
        self.value = 'day';
    }else{
        navtext1.chsatcolor("#ADC6F6");
        navtext2.satcolor("#FFEFF0");
        navtext2.chsatcolor("#F8CACC");
        self.value = 'night';
    }
}

var navtext1 = {
    satcolor:function (color){
        var narlist= document.querySelectorAll('.navtext1');
        for(var nar of narlist){
            nar.style.backgroundColor = color;
        }
    },
    chsatcolor:function (color){
        var nar= document.querySelector('.navch1');
        nar.style.backgroundColor = color;
    }
}
var navtext2 = {
    satcolor:function (color){
        var narlist= document.querySelectorAll('.navtext2');
        for(var nar of narlist){
            nar.style.backgroundColor = color;
        }
    },
    chsatcolor:function (color){
        var nar= document.querySelector('.navch2');
        nar.style.backgroundColor = color;
    }
}
