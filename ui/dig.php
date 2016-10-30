<html>
<body>
<?php
$nu=$_POST['nu'];
$s=0;
while($nu>0)
{
$r=$nu%10;
$s=$s+$r;
$nu=$nu/10;
}
echo 'Sum of Digit is:'.$s;
?>
</body>
</html>
