let catData= [0,200,100,10,900,700];
let fysSUMECP=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
function summ(){

let ccatFood=[0,0,0,0,0,0,0];
    // food, travel, fam, edu, pho & vehi, ent&hos, oth
    let catFood= document.getElementsByClassName("food");
    let catAr=Array.from(catFood);
   catAr.forEach((x)=>{
   ccatFood[0]+=parseInt(x.children[0].innerHTML);
   });
   
   Array.from(document.getElementsByClassName("travel")).forEach((x)=>{ccatFood[1]+=parseInt(x.children[0].innerHTML);});
   
   Array.from(document.getElementsByClassName("dad")).forEach((x)=>{ccatFood[2]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("viji")).forEach((x)=>{ccatFood[2]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("fam")).forEach((x)=>{ccatFood[2]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("tata")).forEach((x)=>{ccatFood[2]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("edu")).forEach((x)=>{ccatFood[3]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("vehi")).forEach((x)=>{ccatFood[4]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("pho")).forEach((x)=>{ccatFood[4]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("hos")).forEach((x)=>{ccatFood[5]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("movie")).forEach((x)=>{ccatFood[5]+=parseInt(x.children[0].innerHTML);});
   Array.from(document.getElementsByClassName("oth")).forEach((x)=>{ccatFood[6]+=parseInt(x.children[0].innerHTML);});
   
   catData[0]=ccatFood[0];
   catData[2]=ccatFood[1];
   catData[1]=ccatFood[2];
   catData[3]=ccatFood[3];
   catData[4]=ccatFood[4];
   catData[5]=ccatFood[5];
   catData[6]=ccatFood[6];
}


setTimeout(summ,5000);



function fysSUM(x){

if(x=="fySum"){
document.getElementById("fysI").style.display="block";
document.getElementById(x).id="fySSS";
}
else{
document.getElementById("fysI").style.display="none";
document.getElementById(x).id="fySum";
}


let fysINA= [0,0,0];
let fysEXPE= [0,0,0];
let fysBALA= [0,0,0];
let fysCL= document.getElementsByClassName("fromm");

fysCL=Array.from(fysCL);

fysCL.forEach((x)=>{

if(x.innerHTML.toLowerCase().includes("dad")){
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu)=>{if(uu.className.includes("food")){fysSUMECP[0][0]+=parseInt(uu.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu1)=>{if(uu1.className.includes("fam")){fysSUMECP[0][1]+=parseInt(uu1.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu2)=>{if(uu2.className.includes("dad")){fysSUMECP[0][1]+=parseInt(uu2.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu3)=>{if(uu3.className.includes("viji")){fysSUMECP[0][1]+=parseInt(uu3.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu4)=>{if(uu4.className.includes("tata")){fysSUMECP[0][1]+=parseInt(uu4.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu5)=>{if(uu5.className.includes("travel")){fysSUMECP[0][2]+=parseInt(uu5.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu6)=>{if(uu6.className.includes("edu")){fysSUMECP[0][3]+=parseInt(uu6.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu7)=>{if(uu7.className.includes("pho")){fysSUMECP[0][4]+=parseInt(uu7.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu8)=>{if(uu8.className.includes("vehi")){fysSUMECP[0][4]+=parseInt(uu8.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu9)=>{if(uu9.className.includes("hos")){fysSUMECP[0][5]+=parseInt(uu9.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu10)=>{if(uu10.className.includes("movie")){fysSUMECP[0][5]+=parseInt(uu10.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uu11)=>{if(uu11.className.includes("oth")){fysSUMECP[1][6]+=parseInt(uu11.children[0].innerHTML);}});

//fysINA[0]+= x.parentElement.children[0].innerHTML;
fysINA[0]+=parseInt(x.parentElement.children[0].innerHTML);
fysEXPE[0]+=parseInt(x.parentElement.children[3].innerHTML);
fysBALA[0]+=parseInt(x.parentElement.children[4].innerHTML);
}

if(x.innerHTML.toLowerCase().includes("security")){
//fysINA[0]+= x.parentElement.children[0].innerHTML;

Array.from(x.parentElement.parentElement.children[1].children).forEach((u)=>{
if(u.className.includes("food")){
fysSUMECP[1][0]+=parseInt(u.children[0].innerHTML);
}
});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu1)=>{if(uuu1.className.includes("fam")){fysSUMECP[1][1]+=parseInt(uuu1.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu2)=>{if(uuu2.className.includes("dad")){fysSUMECP[1][1]+=parseInt(uuu2.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu3)=>{if(uuu3.className.includes("viji")){fysSUMECP[1][1]+=parseInt(uuu3.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu4)=>{if(uuu4.className.includes("tata")){fysSUMECP[1][1]+=parseInt(uuu4.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu5)=>{if(uuu5.className.includes("travel")){fysSUMECP[1][2]+=parseInt(uuu5.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu6)=>{if(uuu6.className.includes("edu")){fysSUMECP[1][3]+=parseInt(uuu6.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu7)=>{if(uuu7.className.includes("pho")){fysSUMECP[1][4]+=parseInt(uuu7.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu8)=>{if(uuu8.className.includes("vehi")){fysSUMECP[1][4]+=parseInt(uuu8.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu9)=>{if(uuu9.className.includes("hos")){fysSUMECP[1][5]+=parseInt(uuu9.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu10)=>{if(uuu10.className.includes("movie")){fysSUMECP[1][5]+=parseInt(uuu10.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu11)=>{if(uuu11.className.includes("oth")){fysSUMECP[1][6]+=parseInt(uuu11.children[0].innerHTML);}});

fysINA[1]+=parseInt(x.parentElement.children[0].innerHTML);
fysEXPE[1]+=parseInt(x.parentElement.children[3].innerHTML);
fysBALA[1]+=parseInt(x.parentElement.children[4].innerHTML);
}

if((x.innerHTML.toLowerCase().includes("dip")) || (x.innerHTML.toLowerCase().includes("mahi")) || (x.innerHTML.toLowerCase().includes("frotu")) ){
//fysINA[0]+= x.parentElement.children[0].innerHTML;

Array.from(x.parentElement.parentElement.children[1].children).forEach((uuu)=>{
if(uuu.className.includes("food")){
fysSUMECP[2][0]+=parseInt(uuu.children[0].innerHTML);
}
});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu1)=>{if(uuuu1.className.includes("fam")){fysSUMECP[2][1]+=parseInt(uuuu1.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu2)=>{if(uuuu2.className.includes("dad")){fysSUMECP[2][1]+=parseInt(uuuu2.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu3)=>{if(uuuu3.className.includes("viji")){fysSUMECP[2][1]+=parseInt(uuuu3.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu4)=>{if(uuuu4.className.includes("tata")){fysSUMECP[2][1]+=parseInt(uuuu4.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu5)=>{if(uuuu5.className.includes("travel")){fysSUMECP[2][2]+=parseInt(uuuu5.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu6)=>{if(uuuu6.className.includes("edu")){fysSUMECP[2][3]+=parseInt(uuuu6.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu7)=>{if(uuuu7.className.includes("pho")){fysSUMECP[2][4]+=parseInt(uuuu7.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu8)=>{if(uuuu8.className.includes("vehi")){fysSUMECP[2][4]+=parseInt(uuuu8.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu9)=>{if(uuuu9.className.includes("hos")){fysSUMECP[2][5]+=parseInt(uuuu9.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu10)=>{if(uuuu10.className.includes("movie")){fysSUMECP[2][5]+=parseInt(uuuu10.children[0].innerHTML);}});
Array.from(x.parentElement.parentElement.children[1].children).forEach((uuuu11)=>{if(uuuu11.className.includes("oth")){fysSUMECP[2][6]+=parseInt(uuuu11.children[0].innerHTML);}});


fysINA[2]+=parseInt(x.parentElement.children[0].innerHTML);
fysEXPE[2]+=parseInt(x.parentElement.children[3].innerHTML);
fysBALA[2]+=parseInt(x.parentElement.children[4].innerHTML);
}

});

document.getElementById("fysdin").innerHTML=fysINA[0];
document.getElementById("fysdin").parentElement.children[2].innerHTML=fysEXPE[0]
document.getElementById("fysdin").parentElement.children[3].innerHTML=fysBALA[0]
document.getElementById("fysdin").parentElement.children[4].innerHTML= ((fysINA[0]/cin)*100).toFixed(2)+ " ) "+ ((fysEXPE[0]/cbala)*100).toFixed(2)+ " ) "+ ((fysBALA[0]/cexp)*100).toFixed(2);

document.getElementById("fyspin").innerHTML=fysINA[1];
document.getElementById("fyspin").parentElement.children[2].innerHTML=fysEXPE[1]
document.getElementById("fyspin").parentElement.children[3].innerHTML=fysBALA[1]
document.getElementById("fyspin").parentElement.children[4].innerHTML= ((fysINA[1]/cin)*100).toFixed(2)+ " ) "+ ((fysEXPE[1]/cbala)*100).toFixed(2)+ " ) "+ ((fysBALA[1]/cexp)*100).toFixed(2);

document.getElementById("mahiDip").innerHTML=fysINA[2];
document.getElementById("mahiDip").parentElement.children[2].innerHTML=fysEXPE[2]
document.getElementById("mahiDip").parentElement.children[3].innerHTML=fysBALA[2]
document.getElementById("mahiDip").parentElement.children[4].innerHTML= ((fysINA[2]/cin)*100).toFixed(2)+ " ) "+ ((fysEXPE[2]/cbala)*100).toFixed(2)+ " ) "+ ((fysBALA[2]/cexp)*100).toFixed(2);

document.getElementById("fysTot").innerHTML=fysINA[0]+fysINA[1]+fysINA[2];
document.getElementById("fysTot").parentElement.children[2].innerHTML=fysEXPE[0]+fysEXPE[1]+fysEXPE[2];
document.getElementById("fysTot").parentElement.children[3].innerHTML=fysBALA[0]+fysBALA[1]+fysBALA[2];
document.getElementById("fysTot").parentElement.children[4].innerHTML= (((fysINA[0]+fysINA[1]+fysINA[2])/cin)*100).toFixed(1)+"_"+(((fysEXPE[0]+fysEXPE[1]+fysEXPE[2])/cbala)*100).toFixed(1)+"_"+(((fysBALA[0]+fysBALA[1]+fysBALA[2])/cexp)*100).toFixed(1)+"_";





document.getElementById("fysEXFO").innerHTML= ((fysSUMECP[0][0])+(fysSUMECP[1][0])+(fysSUMECP[2][0])) +" ("+  (((fysSUMECP[0][0]/cbala)+(fysSUMECP[1][0]/cbala)+(fysSUMECP[2][0]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXFO").parentElement.children[1].innerHTML= ((fysSUMECP[0][0]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXFO").parentElement.children[2].innerHTML= ((fysSUMECP[1][0]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXFO").parentElement.children[3].innerHTML= ((fysSUMECP[2][0]/cbala)*100).toFixed(2)+" %";

document.getElementById("fysEXF").innerHTML= ((fysSUMECP[0][1])+(fysSUMECP[1][1])+(fysSUMECP[2][1])) + " ("+  (((fysSUMECP[0][1]/cbala)+(fysSUMECP[1][1]/cbala)+(fysSUMECP[2][1]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXF").parentElement.children[1].innerHTML= ((fysSUMECP[0][1]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXF").parentElement.children[2].innerHTML= ((fysSUMECP[1][1]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXF").parentElement.children[3].innerHTML= ((fysSUMECP[2][1]/cbala)*100).toFixed(2)+" %";


document.getElementById("fysEXT").innerHTML= ((fysSUMECP[0][2])+(fysSUMECP[1][2])+(fysSUMECP[2][2])) + " ("+  (((fysSUMECP[0][2]/cbala)+(fysSUMECP[1][2]/cbala)+(fysSUMECP[2][2]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXT").parentElement.children[1].innerHTML= ((fysSUMECP[0][2]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXT").parentElement.children[2].innerHTML= ((fysSUMECP[1][2]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXT").parentElement.children[3].innerHTML= ((fysSUMECP[2][2]/cbala)*100).toFixed(2)+" %";

document.getElementById("fysEXE").innerHTML= ((fysSUMECP[0][3])+(fysSUMECP[1][3])+(fysSUMECP[2][3])) + " ("+  (((fysSUMECP[0][3]/cbala)+(fysSUMECP[1][3]/cbala)+(fysSUMECP[2][3]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXE").parentElement.children[1].innerHTML= ((fysSUMECP[0][3]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXE").parentElement.children[2].innerHTML= ((fysSUMECP[1][3]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXE").parentElement.children[3].innerHTML= ((fysSUMECP[2][3]/cbala)*100).toFixed(2)+" %";

document.getElementById("fysEXPV").innerHTML= ((fysSUMECP[0][4])+(fysSUMECP[1][4])+(fysSUMECP[2][4])) + " ("+  (((fysSUMECP[0][4]/cbala)+(fysSUMECP[1][4]/cbala)+(fysSUMECP[2][4]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXPV").parentElement.children[1].innerHTML= ((fysSUMECP[0][4]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXPV").parentElement.children[2].innerHTML= ((fysSUMECP[1][4]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXPV").parentElement.children[3].innerHTML= ((fysSUMECP[2][4]/cbala)*100).toFixed(2)+" %";

document.getElementById("fysEXHE").innerHTML= ((fysSUMECP[0][5])+(fysSUMECP[1][5])+(fysSUMECP[2][5])) + " ("+  (((fysSUMECP[0][5]/cbala)+(fysSUMECP[1][5]/cbala)+(fysSUMECP[2][5]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXHE").parentElement.children[1].innerHTML= ((fysSUMECP[0][5]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXHE").parentElement.children[2].innerHTML= ((fysSUMECP[1][5]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXHE").parentElement.children[3].innerHTML= ((fysSUMECP[2][5]/cbala)*100).toFixed(2)+" %";

document.getElementById("fysEXOTH").innerHTML= ((fysSUMECP[0][6])+(fysSUMECP[1][6])+(fysSUMECP[2][6])) + " ("+  (((fysSUMECP[0][6]/cbala)+(fysSUMECP[1][6]/cbala)+(fysSUMECP[2][6]/cbala))*100).toFixed(2)+")";
document.getElementById("fysEXOTH").parentElement.children[1].innerHTML= ((fysSUMECP[0][6]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXOTH").parentElement.children[2].innerHTML= ((fysSUMECP[1][6]/cbala)*100).toFixed(2)+" %";
document.getElementById("fysEXOTH").parentElement.children[3].innerHTML= ((fysSUMECP[2][6]/cbala)*100).toFixed(2)+" %";


let pertt= (((catData[0]/cbala)*100)+((catData[1]/cbala)*100)+((catData[2]/cbala)*100)+((catData[3]/cbala)*100)+((catData[4]/cbala)*100)+((catData[5]/cbala)*100)+((catData[6]/cbala)*100));

document.getElementById("fysEXTOT").innerHTML= calpriAll(...fysSUMECP[0],...fysSUMECP[1],...fysSUMECP[2])+" ("+((calpriAll(...fysSUMECP[0],...fysSUMECP[1],...fysSUMECP[2])/cbala)*100).toFixed(1)+")";
document.getElementById("fysEXTOT").parentElement.children[1].innerHTML= ((fysEXPE[0]/cbala)*100).toFixed(2);
document.getElementById("fysEXTOT").parentElement.children[2].innerHTML= ((fysEXPE[1]/cbala)*100).toFixed(2);
document.getElementById("fysEXTOT").parentElement.children[3].innerHTML= ((fysEXPE[2]/cbala)*100).toFixed(2);



fysSUMECP=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
/*
((fysSUMECP[0][6]/cbala)+(fysSUMECP[1][6]/cbala)+(fysSUMECP[2][6]))
*/
}


function calpriAll(...x){
let ffysS=0;
x.forEach((t)=>{ffysS+=parseInt(t);});
//x.forEach((g)=>{ffysS+=parseInt(g);});
//x.forEach((k)=>{ffysS+=parseInt(k);});
return ffysS;
}




let daCatSor= [document.getElementsByClassName("food"),
                       document.getElementsByClassName("travel"),
                       document.getElementsByClassName("edu"),
                       document.getElementsByClassName("vehi"),
                       document.getElementsByClassName("pho"),
                       document.getElementsByClassName("hos"),
                       document.getElementsByClassName("movie"),
                       document.getElementsByClassName("oth"),
                       document.getElementsByClassName("tata"),
                       document.getElementsByClassName("dad"),
                       document.getElementsByClassName("viji"),
                       document.getElementsByClassName("fam")
                       ];
        //             food=0,travel=1,edu=2,vehi=3,pho=4,hos=5,movie=6,oth=7,tata=8,dad=9,viji=10,fam=11
            
        function nknCh(){
        document.getElementById("daSortId").style.display="grid";
        for(let mi=0; mi< daCatSor.length;mi++){
        
        let miin= "daSor"+mi;
        let docEl=document.getElementById(miin);
        let tot=0;
        Array.from(daCatSor[mi]).forEach((mx)=>{
        if(mx.parentNode.parentNode.style.display!=='none'){
        tot+= parseInt(mx.children[0].innerHTML);
        }
        });
        docEl.innerHTML=tot;
        tot=0;
        
        
        }
        
        }
        
