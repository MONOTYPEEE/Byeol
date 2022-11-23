starData.sort((a,b)=>{
    return dayjs(a.whenMeridian).diff(b.whenMeridian);
});

starData.forEach(function(element,index,array){
    if(
        dayjs(dayjs().subtract(15,"day")).isAfter(dayjs(element.whenMeridian),'day')
    ){
            starData.push(starData.shift());
    }
});