// alert("Hello");


var mlist =[

 {name: 'Ramya', mark: 80},
 {name: 'Rakshitha', mark: 40},
 {name: 'Sree', mark: 50},

]


document.getElementById("ddlViewBy").addEventListener('change', drop);

function drop(){

    var e = document.getElementById("ddlViewBy");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    
    console.log(value);
    console.log(text);
    console.log(mlist[0].mark)
    console.log(Math.max(mlist.mark))
    console.log((mlist[0].mark));



}


