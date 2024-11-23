let gggXX;
       // let graphArr = []; // Main multidimensional array to store percentages and sources
        
        //setTimeout(cccuuu,1500);
        /*
        function cccuuu(){
        
        let graphIn = document.getElementsByClassName("incomeColumn");
        let graphEx = document.getElementsByClassName("exep");
        let graphFr = document.getElementsByClassName("fromm");
        let cx="";
        
        
        for(let x=0;x<graphIn.length;x++){
        if(graphIn[x].parentElement.parentElement.style.display!=='none'){
        
        cx+=graphIn[x].innerHTML;
        
        }
        
        }
        alert(cx);
        
        
        
        }
        
        */
        
        function gra(){
        let graphIn = document.getElementsByClassName("incomeColumn");
        let graphEx = document.getElementsByClassName("exep");
        let graphFr = document.getElementsByClassName("fromm");
        let graphArr = [];
        for (let x = 0; x < graphIn.length; x++) {
        
        if(graphIn[x].parentElement.parentElement.style.display!=='none'){
        let temp = [];
       
        let preI = parseInt(graphIn[x].innerHTML);
        let preE = parseInt(graphEx[x].innerHTML);
        let froF = String(graphFr[x].innerHTML);
        
        let calPre = preE / preI;
        let makePer = (calPre * 100).toFixed(0);
        
        temp.push(makePer, froF+"(In - "+preI+", Ex - "+preE+")");
        
      
        graphArr.push(temp);
        
        } else {
        console.warn(`Invalid income or zero in entry ${x}. Skipping.`);
        }
        
        }
        gggXXX=graphArr;
        //alert(gggXXX);
        }
        
        
        
        
        function graG(){
        let graphIn = document.getElementsByClassName("incomeColumn");
        let graphEx = document.getElementsByClassName("Abal");
        let graphFr = document.getElementsByClassName("fromm");
        let graphArr = [];
        for (let x = 0; x < graphIn.length; x++) {
        
        if(graphIn[x].parentElement.parentElement.style.display!=='none'){
        let temp = [];
        
        let preI = parseInt(graphIn[x].innerHTML);
        let preE = parseInt(graphEx[x].innerHTML);
        let froF = String(graphFr[x].innerHTML);
        
        let calPre = preE / preI;
        let makePer = (calPre * 100).toFixed(0);
        
        temp.push(makePer, froF+"(In - "+preI+", Bal - "+preE+")");
        
        
        graphArr.push(temp);
        
        } else {
        console.warn(`Invalid income or zero in entry ${x}. Skipping.`);
        }
        
        }
        gggXXX=graphArr;
        //alert(gggXXX);
        }
        
        
        
        
        function graGEC(){
        let graphIn = document.getElementsByClassName("incomeColumn");
        let graphBa = document.getElementsByClassName("Abal");
        let graphEx = document.getElementsByClassName("exep");
        let graphFr = document.getElementsByClassName("fromm");
        let graphArr = [];
        for (let x = 0; x < graphIn.length; x++) {
        
        if(graphIn[x].parentElement.parentElement.style.display!=='none'){
        let temp = [];
        
        let preI = parseInt(graphIn[x].innerHTML);
        let preE = parseInt(graphEx[x].innerHTML);
        let preB = parseInt(graphBa[x].innerHTML);
        
        let froF = String(graphFr[x].innerHTML);
        
        let calPre = preE / preI;
        let calPre11= preB / preI;
        let makePer = (calPre * 100).toFixed(0);
        let makePer11= (calPre11 * 100).toFixed(0);
        temp.push(makePer, makePer11,froF+" (In : "+ preI+", Ex : "+preE+", Bal : "+preB+")");
        
        
        graphArr.push(temp);
        
        } else {
        console.warn(`Invalid income or zero in entry ${x}. Skipping.`);
        }
        
        }
        gggXXX=graphArr;
      //  alert(gggXXX);
        //alert(gggXXX);
        }
        
        
        
        
        
        
        
        