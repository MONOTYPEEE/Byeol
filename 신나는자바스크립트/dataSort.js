starData.sort((a,b)=>{
    return dayjs(a.whenMeridian).diff(b.whenMeridian);
});

starData.forEach(function(element,index,array){
    if(dayjs().isAfter(starData[index].whenMeridian)){
        starData.push(starData.shift());
    }
});