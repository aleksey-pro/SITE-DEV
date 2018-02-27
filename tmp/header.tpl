<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<base href="<?=$base?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$title?></title>
		<meta name="description" content="<?=$description?>">
		<meta name="keywords" content="<?=$keywords?>">
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
		<link rel="icon" href="/favicon.ico" type="image/x-icon">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:700,400,300&subset=latin,cyrillic'>
		<link href="catalog/view/theme/ptd/css/vendor.css" rel="stylesheet">
		<link href="catalog/view/theme/ptd/css/style.css" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="catalog/view/theme/ptd/scripts/vendor.js"></script>
		<script src="catalog/view/theme/ptd/scripts/common.js"></script>
		<script src="catalog/view/theme/ptd/scripts/scripts.js"></script>
		<?php foreach($links as $link): ?>
			<link href="<?=$link['href']?>" rel="<?=$link['rel']?>">
		<?php endforeach ?>
		<?php foreach($styles as $style): ?>
			<link href="<?=$style['href']?>" rel="<?=$style['rel']?>">
		<?php endforeach ?>
		<?php foreach($scripts as $script): ?>
			<script src="<?=$script?>"></script>
		<?php endforeach; ?>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
				(function (d, w, c) {
						(w[c] = w[c] || []).push(function() {
								try {
										w.yaCounter47409274 = new Ya.Metrika2({
												id:47409274,
												clickmap:true,
												trackLinks:true,
												accurateTrackBounce:true,
												webvisor:true
										});
								} catch(e) { }
						});

						var n = d.getElementsByTagName("script")[0],
								s = d.createElement("script"),
								f = function () { n.parentNode.insertBefore(s, n); };
						s.type = "text/javascript";
						s.async = true;
						s.src = "https://mc.yandex.ru/metrika/tag.js";

						if (w.opera == "[object Opera]") {
								d.addEventListener("DOMContentLoaded", f, false);
						} else { f(); }
				})(document, window, "yandex_metrika_callbacks2");
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/47409274" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
</head>

	<body>
		<a href="#" class="arrow-up"><i class="icon icon-arr-up"></i>наверх</a>
		<div class="container-fluid header-banner">
			<div class="container header-wrapper">
				<div class="row">
					<div class="col-sm-12 top-header">
						<div class="row">
							<div class="top-header__contacts col-sm-4 col-xs-12">
								<div class="top-header__addr"><i class="icon icon-map-h"></i><?=$comment?></div><!-- Пискаревский пр., 63 -->
								<div class="top-header__email"><i class="icon icon-mail-h"></i><?=$email?></div><!-- ptd@fgr.ru -->
							</div>
							<a href="<?=$home?>" class="top-header__logo col-sm-4  col-xs-12">
								<img src="<?=$logo?>" alt="<?=$name?>">
							</a>
							<div class="top-header__phones col-sm-4"><i class="icon icon-tel-h"></i><?=$telephone?></div><!-- +7 <span class="red-empasis">(812)</span> 575-99-45  -->
						</div>
					</div>
				</div>
				<div class="row header-title">
					<div class="col-sm-10 col-sm-offset-1"><?=$name?></div>
				</div>
			</div>
			<nav class="navbar navbar-custom">
					<!-- <div class="container-fluid"> -->
						<div class="navbar-header">
<!--               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button> -->

								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>

						</div>
						 <div class="collapse navbar-collapse collapse-custom" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav navbar-header">
								<li><a href="<?=$home?>" id="index">главная</a></li>
								<li><a href="<?=$catalog?>" id="catalog">каталог</a></li>
								<li><a href="<?=$price?>" id="price">прайс-лист</a></li>
								<li><a href="<?=$special?>">спецпредложения</a></li>
								<li><a href="<?=$contact?>">контакты</a></li>
							</ul>
						</div><!-- /.navbar-collapse -->
					<!--</div> /.container-fluid -->
			</nav>
		<!--<div class="row navbar-custom">
			</div> -->
		</div><!-- container-fluid -->

