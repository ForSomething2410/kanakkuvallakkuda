

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(dd);
      
       
    document.body.addEventListener("dblclick", () => {
        fls();
    });

    function fls() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    fls();

       // google.charts.load("current", {packages:["corechart"]});
       // google.charts.setOnLoadCallback(dddC);
        
       
        function ddd() {
       
        let chrtDIN = cin;
        let chrtDEXP = cbala;
        let chrtDBAL = cexp;
        let chrtTex= parseInt(document.getElementById("exex").innerHTML);
        //let chrtLend= parseInt(document.getElementById("lenI").value);
        
        //alert(chrtLend);
        /*
        if(document.getElementById("cmode").checked){
        
        chrtDIN=0;
        chrtDBAL=0;
        }
        */
        var data = google.visualization.arrayToDataTable([
        ['Category', 'Income', 'Balance', 'All Expence',"Step"],
        ['',chrtDIN,chrtDBAL,chrtDEXP,chrtTex]
        ]);
        
        var options = {
        backgroundColor: 'transparent', 
        legend: { position: 'none' },   
        hAxis: {
        title: '',
        textStyle: { color: 'white' }, 
        gridlines: { color: 'none' }   
        },
        vAxis: {
        textStyle: { color: 'white' },  
        gridlines: { color: 'none' }, 
        baselineColor: 'black',      
        textPosition: 'none'     
        },
        colors: ['green', '#007bff','red','orange'],  
        chartArea: {
        width: '92%', 
        height: '92%'  
        },
        bar: { groupWidth: "100%" }  
        };
        
        var chart = new google.visualization.ColumnChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        }
        
        function dcc(){
       
        
        
        //alert(chrtTex);
        //alert(555);
        google.charts.load("current", {packages:["corechart"]});
        
        
        
        
        let xx= document.getElementById("dccc");
        //alert(xx.value);
        
       if(xx.value=="dft" || xx.value=="dntc"){
       google.charts.setOnLoadCallback(dd);
       }
       
       
        if(xx.value=="clmc"){
        google.charts.setOnLoadCallback(ddd);
        }
        
        
        if(xx.value=="lc"){
        google.charts.setOnLoadCallback(ddddd);
        }
        
        gleE();
        
        }
        dcc();
        
       // google.charts.load("current", {packages:["corechart"]});
      //  google.charts.setOnLoadCallback(ddddd);
        
        
        function ddddd() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number', 'Amount');
        data.addRows([
        ['Expence', cin],
        ['Balance', cexp],
        ['Income', cbala]
        ]);
        
        var options = {
        legend: { position: 'none' },
        hAxis: { title: '', gridlines: { count: 0 }, textPosition: 'none' },
        vAxis: { title: '', gridlines: { count: 0 }, textPosition: 'none' },
        pointSize: 10,
        series: {
        0: { color: 'red' },
        1: { color: 'green' },
        2: { color: 'blue' }
        },
        hAxis: {
        textPosition: 'none',     
        baselineColor: 'transparent', 
        gridlines: { color: 'none' } 
        },
        vAxis: {
        textStyle: { color: 'white' }, 
        gridlines: { color: 'none' }, 
        baselineColor: 'transparent',   
        textPosition: 'none'     
        },
        backgroundColor: { fill: 'transparent' }
        };
        
        var chart = new google.visualization.LineChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        }
        
        
        