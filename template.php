<body style="margin: 10px;">
	<h1>Заявка</h1>
	<p>Имя: <?php print_r( $_POST['name']); ?></p>
	<p>Email: <?php print_r($_POST['email']); ?></p>
	<p>Email: <?php print_r($_POST['theme']); ?></p>
	<p>Тип сайта: <?php print_r($_POST['type']); ?></p>
	<p>Сообщение: " . <?php print_r(nl2br($_POST['comment'])); ?></p>
</body>
