<?php

$file = 'feedback.txt';

$current = file_get_contents($file);

$current .= (new DateTime())->format('Y-m-d H:i:s') . ' - ' . $_GET['email'] . "\n";

file_put_contents($file, $current);

return true;