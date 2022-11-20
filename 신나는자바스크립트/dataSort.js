starData.sort((a,b)=>{
    return new Date(a.whenMeridian) - new Date(b.whenMeridian);
});

starData.forEach(function(element,index,array){
    if(Date.parse(element.whenMeridian) - new Date()<=0){
        starData.push(starData.shift());
    }
});