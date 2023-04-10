marks=
[{sno :1, Name :'Sai', Score : 95},
{sno :2, Name :'Mahesh', Score : 90},
{sno :3, Name :'Suresh', Score : 91},
{sno :4, Name :'Ramesh', Score : 94}]
mark=marks.reduce((a,b)=>a.Score > b.Score ? a:b)
console.log(mark)