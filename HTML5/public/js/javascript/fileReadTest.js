function readFile()
{
  var filePath = "file:///E:Development/HTML5/textfiles/text.txt";

  $.get(filePath, function(data) {
    console.log(data);
  }, "text" );

  filePath = "file:///E:Development/HTML5/textfiles/input.json"

  $.get(filePath, function(data) {
    console.log(data);
  }, "json" );

  $.getJSON(filePath, function(data){
    console.log(data);
  });
}


/*var rawFile = new XMLHttpRequest();
rawFile.open("GET", "file:///E:Development/HTML5/textfiles/text.txt", false);
rawFile.onreadystatechange = function ()
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            var allText = rawFile.responseText;
            alert(allText);
        }
    }
}
rawFile.send(null);*/
