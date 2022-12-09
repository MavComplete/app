let calenderShow = 1; // 1 for show 0 for hide

function settingDate(date,day){

    date = new Date(date);
    date.setDate(day);
    date.setHours(23);
    return date;
}

function getDatesBetween(date1,date2){
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    
    date1 = settingDate(date1,31);
    date2 = settingDate(date2,31);

    let temp;
    let dates = [];

    while(date1 <= date2){
        if(date1.getDate() != 31) {
            temp = settingDate(date1,0);
            if(temp >= range1 && temp <= range2) dates.push(temp);
            date1 = settingDate(date1,31);}
            else{     
                temp = new Date(date1);
                if(temp >= range1 && temp <= range2) dates.push(temp);
                date1.setMonth(date1.getMonth() + 1);
            }
    }
    console.log(dates);

    let content1 = "<div class='calenderBtns'><button id = 'calenderPrev' onclick='callprev()' disabled >Prev</button> | <button id = 'calenderNext' onclick='callnext()'>Next</button></div>";
    let weekDays = [{shortDay:"Mon", fullDay:"Monday"},{shortDay:"Tue", fullDay:"Tuesday"},{shortDay:"Wed", fullDay:"Wednesday"},{shortDay:"Thu", fullDay:"Thursday"},{shortDay:"Fri", fullDay:"Friday"},{shortDay:"Sat", fullDay:"Saturday"},{shortDay:"Sun", fullDay:"Sunday" }];
    
    let LastDate,firstDate;
    for(let i=0; i<dates.length; i++){
        LastDate = dates[i];
        firstDate = new Date( dates[i].getFullYear(), dates[i].getMonth(), 1 );
        content1 +="<div id ='calenderTable_"+(i+1) + "' class='calenderDiv'>"; 
        content1 +="<h2>"+firstDate.toString().split(" ")[1] + "-" + firstDate.getFullYear()+ "</h2>";

        content1 += "<table class='calenderTable'>";
        content1 += "<thead>";

        weekDays.map(item=>{
            content1 += "<th>"+item.fullDay+"</th>";
        });
        content1 += "</thead>";
        content1 += "<tbody>";
        let j = 1;
        let displayNum, idmonth;
        while(j<=LastDate.getDate()){
            content1 += "<tr>";
            for(let k=0; k<7; k++){
                displayNum=j<10?"0"+j:j;
                if(j==1){
                    if(firstDate.toString().split(" ")[0] == weekDays[k].shortDay){
                        content1 += "<td>"+displayNum+"</td>";
                        j++;
                    }
                    else{
                        content1 += "<td></td>";
                    }
                }else if(j>LastDate.getDate()){
                    content1 += "<td></td>";
                }else{
                    content1 += "<td>"+displayNum+"</td>";
                    j++;
                }
            }  
            content1 += "</tr>";
        }
        content1 += "</tbody>";
        content1 += "</table>";
        content1 += "</div>"; 
    }
    return content1;
}

function callprev(){
    let alltable = document.getElementsByClassName("calenderDiv");
    document.getElementById("calenderNext").disabled = false;
    calenderShow--;
    if(calenderShow>=1){
        for(let i=0; i<alltable.length; i++){
            alltable[i].style.display = "none";
        }
        document.getElementById("calenderTable_"+calenderShow).style.display = "block"; 
        if(calenderShow == 1){
            document.getElementById("calenderPrev").disabled = true;
        }
    }
}

function callnext(){
    let alltable = document.getElementsByClassName("calenderDiv");
    document.getElementById("calenderPrev").disabled = false;
    calenderShow++;
    if(calenderShow<=alltable.length){
        for(let i=0; i<alltable.length; i++){
            alltable[i].style.display = "none";
        }
        document.getElementById("calenderTable_"+calenderShow).style.display = "block"; 
        if(calenderShow == alltable.length){
            document.getElementById("calenderNext").disabled = true;
        }
    }
    
}

let content = getDatesBetween("2022/01/01","2025/01/01");
document.getElementById("scheduler").innerHTML = content;
