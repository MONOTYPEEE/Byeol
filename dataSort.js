starData.sort((a,b)=>{
    return new Date(a.whenMeridian) - new Date(b.whenMeridian);
})