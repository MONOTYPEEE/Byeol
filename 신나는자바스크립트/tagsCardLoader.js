const urlParam = new URL(location).searchParams.get('tagname');
let a = 0;

switch(urlParam){
    case 'zodiac':{
        document.title = '별::황도 12궁'
        starData.forEach(function(element,index,array){
            if(element.emoji!=undefined){
                loadList(element,a++,array);
            }
        });
        break;
    }

    case 'authmn':{
        document.title = '별::가을철 밤하늘 별자리'
        starData.forEach(function(element,index,array){
            if(element.tags[0]==='가을철 밤하늘 별자리'){
                loadList(element,a++,array);
            }
        });
        break;
    }

    case 'summer':{
        document.title = '별::여름철 밤하늘 별자리'
        starData.forEach(function(element,index,array){
            if(element.tags[0]==='여름철 밤하늘 별자리'){
                loadList(element,a++,array);
            }
        });
        break;
    }
    
    case 'winter':{
        document.title = '별::겨울철 밤하늘 별자리'
        starData.forEach(function(element,index,array){
            if(element.tags[0]==='겨울철 밤하늘 별자리'){
                loadList(element,a++,array);
            }
        });
        break;
    }
    
    case 'spring':{
        document.title = '별::봄철 밤하늘 별자리'
        starData.forEach(function(element,index,array){
            if(element.tags[0]==='봄철 밤하늘 별자리'){
                loadList(element,a++,array);
            }
        });
        break;
    }

    case 'northen':{
        document.title = '별::북쪽 밤하늘 별자리'
        starData.forEach(function(element,index,array){
            if(element.tags[0]==='북쪽 밤하늘 별자리'){
                loadList(element,a++,array);
            }
        });
        break;
    }
}