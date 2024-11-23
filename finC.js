

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
        
        if(xx.value=="lcFE"){
        google.charts.setOnLoadCallback(eeeee);
        }
        
        if(xx.value=="lcGE"){
        google.charts.setOnLoadCallback(ggggg);
        }
        
        if(xx.value=="lcGEC"){
        google.charts.setOnLoadCallback(gggbbbeee);
        }
        
        if(xx.value=="cate"){
        google.charts.setOnLoadCallback(ddcat);
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
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function eeeee() {
        
        
        
        gra();
        
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number','Expense percent ');
        
        
        
        gggXXX.forEach(row => {
        data.addRow([row[1], parseFloat(row[0])]);
        });
        
        
        var options = {
        legend: { position: 'none' },
        hAxis: { title: '', gridlines: { count: 1 }, textPosition: 'none' },
        vAxis: { title: '', gridlines: { count: 1 }, textPosition: 'none' },
        pointSize: 0.8,
        lineWidth: 1.4,
        series: {
        0: { color: 'red' }
        },
        hAxis: {
        textPosition: 'none',     
        baselineColor: 'red', 
        gridlines: { color: 'grey' } 
        },
        
        vAxis: {
        textStyle: { color: 'transparent' }, 
        gridlines: { color: 'transparent' }, 
        baselineColor: 'grey',   
        textPosition: 'none'     
        },
        chartArea:{
        width:'100%',
        height:'65%',
        top:'25%'
        },
        tooltip:{
        triger:'focus'
        },
        backgroundColor: { fill: 'transparent' },
        animation: {
        startup: true,  
        duration: 800,  
        easing: 'out'     
        },
        };
        
        var chart = new google.visualization.LineChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        }
        
        
        
        
        
        
        
        
        
        function ggggg() {
        
        
        
        graG();
        
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number','Balance percent ');
        
        
        
        gggXXX.forEach(row => {
        data.addRow([row[1], parseFloat(row[0])]);
        });
        
        
        var options = {
        legend: { position: 'none' },
        hAxis: { title: '', gridlines: { count: 1 }, textPosition: 'none' },
        vAxis: { title: '', gridlines: { count: 1 }, textPosition: 'none' },
        pointSize: 1,
        lineWidth:2,
        series: {
        0: { color: '#007bff' }
        },
        hAxis: {
        textPosition: 'none',     
        baselineColor: 'red', 
        gridlines: { color: 'grey' } 
        },
        
        vAxis: {
        textStyle: { color: 'transparent' }, 
        gridlines: { color: 'transparent' }, 
        baselineColor: 'grey',   
        textPosition: 'none'     
        },
        chartArea:{
        width:'100%',
        height:'65%',
        top:'25%'
        },
        tooltip:{
        triger:'focus'
        },
        backgroundColor: { fill: 'transparent' },
        animation: {
        startup: true,  
        duration: 800,  
        easing: 'out'     
        },
        };
        
        var chart = new google.visualization.LineChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        }
        
        
        
        
        
        
        
        
        
        function gggbbbeee() {
        graGEC(); // Call to gather data from graGEC
        
        // Create and populate the data table
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number', 'Balance Percent');
        data.addColumn('number', 'Expense Percent');
        
        gggXXX.forEach(row => {
        data.addRow([row[2], parseFloat(row[1]), parseFloat(row[0])]);
        });
        
        // Chart options
        const options = {
        legend: { position: 'none' },
        pointSize: 1,
        lineWidth: 2,
        series: { 0: { color: '#007bff' } },
        hAxis: {
        textPosition: 'none',
        baselineColor: 'grey',
        gridlines: { color: 'grey', count: 1 },
        },
        vAxis: {
        textStyle: { color: 'white' },
        gridlines: { color: 'grey', count: 1 },
        baselineColor: 'red',
        textPosition: 'none'
        },
        chartArea: {
        width: '100%',
        height: '65%',
        top: '25%'
        },
        tooltip: {
        trigger: 'focus'
        },
        backgroundColor: { fill: 'transparent' },
        animation: {
        startup: true,
        duration: 800,
        easing: 'out'
        }
        };
        
        // Draw the chart
        const chart = new google.visualization.LineChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        }
        
        
        
        function ddcat() {
        
        var data = google.visualization.arrayToDataTable([
        ['adapaavi', 'finpulse'],
        ['Food', catData[0]],
        ['Family',catData[1]],
        ['Travel',catData[2]],
        ['Education',catData[3]],
        ['V_Pho',catData[4]],
        ['Hos_Ent',catData[5]],
        ['OTH',catData[6]]
        ]);
        
        var options = {
        title:'jddmdm',
        legend: {
        title:"",
        position: 'right', // Move the legend to the bottom
       alignment: 'center', // Align the legend items in a single line
        textStyle:{ fontSize:10,color:getComputedStyle(rut).getPropertyValue('--inc').trim()}
        },
        scrollArrows: {
        activeColor: 'red', // Sets the active scroll arrow color to white
        inactiveColor: 'red' // Optional: Sets inactive arrow color to gray for better visibility
        },
        pieHole: 0.50,
        animation: {
        startup: true,  
        duration: 800,  
        easing: 'in'     
        },
        backgroundColor: 'transparent',
        pieSliceTextStyle:{ color:'transparent'},
        titleTextStyle: { color:'white' },
        pieSliceBorderColor: 'black',
        chartArea: {
        left:0,
        top:10,
        right:0,
        bottom:10
        },
        
        slices: {
        0: { color:"#FF69B4" },
        1: { color:"#2ECC71" },
        2: { color:"#3498DB" },
        3: { color:"#F1C40F" },
        4: { color:"red" },
        5: { color:"#7F8C8D" },
        6: { color:"#F0F0F0" }
        }
        
        }
        
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        randE();
        }