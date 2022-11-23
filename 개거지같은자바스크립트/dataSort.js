starData.sort((a,b)=>{
    return dayjs(a.whenMeridian).diff(b.whenMeridian);
});

console.log(starData);

starData.forEach(function(element,index,array){
    if(
        dayjs(dayjs().subtract(15,"day")).isAfter(dayjs(element.whenMeridian),'day')
    ){
        console.log(`${element.nameKo} shifted`);
        starData.push(starData.shift());
    }
    else{
        console.log("nah")
    }
});

starData.unshift(starData.pop());