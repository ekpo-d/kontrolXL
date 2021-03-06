(function($, Chart, undefined){
  function drawGraph(){
  var $self = $('#canvas'),
      canvas = $self[0],
      options = {
      scaleFontColor : "white"
          },
      myData = {
  labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets : [
    {
      fillColor : "rgba(26, 198, 216,.5)",
      strokeColor : "rgba(26, 198, 216,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40,32,23,24, 50, 34]
    }
    ,
    {
      fillColor : "rgba(90,190,90,.5)",
      strokeColor : "rgba(90,190,90,1)",
      pointColor : "rgba(90,190,90,1)",
      pointStrokeColor : "#fff",
      data : [40,48,40,40,60,50,60,50,67,90, 80, 90]
    }
  ]
}
  canvas.width = $self.parent().width()
  canvas.height = $self.parent().height() -10

  window.onresize = function() {
  var parent = $self.parent()
  canvas.width = parent.width() - 10 ;
  canvas.height = parent.height() - 10;
  new Chart(canvas.getContext("2d")).Line(myData, options)
}
new Chart(canvas.getContext("2d")).Line(myData, options)
}
setTimeout(drawGraph, 100)
})(jQuery, Chart)
