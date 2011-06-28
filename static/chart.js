Highcharts.setOptions({
   global: {
      useUTC: false
   }
});
   
var mem;
$(document).ready(function() {
   mem = new Highcharts.Chart({
      chart: {
         renderTo: 'mem',
         defaultSeriesType: 'spline',
         marginRight: 10,
         events: {
            load: function() {
   				var socket = io.connect();
               // set up the updating of the chart each second
               var series = this.series[0];

			  socket.on('freemem',function(data) {
               var x = (new Date()).getTime(), // current time
                  y1 = data.freemem/1024/1024/1024;
				
               series.addPoint([x, y1], true, true);
				
		   		});
            }
         }
      },
      legend: {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 150,
         y: 100,
         floating: true,
         borderWidth: 1,
         backgroundColor: '#FFFFFF'
      },
      title: {
         text: 'Free Memory'
      },
      xAxis: {
         type: 'datetime',
         tickPixelInterval: 150
      },
      yAxis: {
         title: {
            text: 'Value'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      tooltip: {
         formatter: function() {
                   return '<b>'+ this.series.name +'</b><br/>'+
               Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
               Highcharts.numberFormat(this.y, 2);
         }
      },
      legend: {
         enabled: false
      },
      exporting: {
         enabled: false
      },
      series: [{
         name: 'Free Mem',
         data: [{x:1,y:1},{x:2,y:5},{x:3,y:1},{x:5,y:2},{x:7,y:1},{x:9,y:12},{x:13,y:2},{x:16,y:1},{x:20,y:12}]
      }]
   });
   

   loadavg = new Highcharts.Chart({
      chart: {
         renderTo: 'loadavg',
         defaultSeriesType: 'spline',
         marginRight: 10,
         events: {
            load: function() {
   				var socket = io.connect();
               // set up the updating of the chart each second
               var series = this.series[0];


			  socket.on('loadavg',function(data) {
               var x = (new Date()).getTime(), // current time
                  y1 = data.loadavg[0];
				
               series.addPoint([x, y1], true, true);
				
		   		});
            }
         }
      },
      legend: {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 150,
         y: 100,
         floating: true,
         borderWidth: 1,
         backgroundColor: '#FFFFFF'
      },
      title: {
         text: 'Load Average'
      },
      xAxis: {
         type: 'datetime',
         tickPixelInterval: 150
      },
      yAxis: {
         title: {
            text: 'Value'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      tooltip: {
         formatter: function() {
                   return '<b>'+ this.series.name +'</b><br/>'+
               Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
               Highcharts.numberFormat(this.y, 2);
         }
      },
      legend: {
         enabled: false
      },
      exporting: {
         enabled: false
      },
      series: [{
         name: 'Free Mem',
         data: [{x:1,y:1},{x:2,y:5},{x:3,y:1},{x:5,y:2},{x:7,y:1},{x:9,y:12},{x:13,y:2},{x:16,y:1},{x:20,y:12}]
      }]
   });
   
});
