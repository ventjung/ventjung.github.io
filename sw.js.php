<?php

header('Service-Worker-Allowed: /');
header('Content-Type: application/javascript');

?>

importScripts('sw.js');
