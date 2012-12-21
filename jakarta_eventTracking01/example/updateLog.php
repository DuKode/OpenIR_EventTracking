<html>

<?php
  // add these headers to make sure this page is not cached by the browser
  header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
  header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past..

  function update_log(){ 

    $logFileHandle = fopen("logFile.csv", "a"); 

    $ip=$_SERVER['REMOTE_ADDR']; // access remote IP address

    // Depending on the page, one of the following events will be sent by the browser
    $mapClicked = $_GET['mapClicked']; // which layer was clicked
    $shapeDrawn = $_GET['shapeDrawn']; // which drawing tool was selected

    $date = date("Y/m/d H:i:s"); // current date & time
    if ($shapeDrawn != null)
    {
      // construct the string. The part column contains the keyword DRAW to distinguish this from the layeradd 
      $logString = "DRAW" . "," . $ip . "," . $date . "," . $shapeDrawn . "\n";
      fwrite($logFileHandle, $logString);
    }
    elseif ($mapClicked != null)
    {
      // construct the string to be logged
      $logString = "LAYERADD" . "," . $ip . "," . $date . "," . $mapClicked . "\n";
      fwrite($logFileHandle, $logString);
    }
    
    fclose($logFileHandle); 
    }
 ?>	 

<head>
<title>Log updated</title>
 </head>
 <body>
    <?php update_log() ?>
</body>
</html>
 
