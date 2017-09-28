<body style="margin: 10px;">
	<h1>Заявка</h1>
	<p>Имя: <?php print_r( $_POST['name']); ?></p>
	<p>Email: <?php print_r($_POST['email']); ?></p>
	<p>Тип сайта: <?php print_r($_POST['type']); ?></p>
	<p>Тип верстки: <?php print_r($_POST['verstka']); ?></p>
	<p>Адаптивность: <?php print_r($_POST['adaptive']); ?></p>
	<p>Число страниц: <?php print_r($_POST['pagn']); ?></p>
	<p>Сообщение: " . <?php print_r(nl2br($_POST['comment'])); ?></p>
</body>
