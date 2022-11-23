const nsx = document.querySelectorAll('.topBarSt');

switch(urlParam){
    case 'zodiac':{
        nsx[6].classList.add('selected');
        break;
    }

    case 'authmn':{
        nsx[3].classList.add('selected');
        break;
    }

    case 'summer':{
        nsx[2].classList.add('selected');
        break;
    }
    
    case 'winter':{
        nsx[4].classList.add('selected');
        break;
    }
    
    case 'spring':{
        nsx[1].classList.add('selected');
        break;
    }

    case 'northen':{
        nsx[5].classList.add('selected');
        break;
    }
}