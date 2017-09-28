<?php
	if( $_POST ){

		require_once "lib/class.phpmailer.php";
		require_once "lib/class.smtp.php";

		// $result = file_get_contents('php://input');

		$mail = new PHPmailer;


		//Настройки сервера почты

		$mail->IsSMTP();
		$mail->Host = "smtp.gmail.com";//127.0.0.1 for localhost 127.0.0.1
		$mail->Port = 465; //for localhost 25
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "ssl";
		$mail->Priority = 3;
		$mail->CharSet = 'UTF-8';
		$mail->Username = "anxieter@gmail.com";// логин под которым заходим в почту
		$mail->Password ="7a068ae58";// пароль от почты
		$mail->SetFrom('user@sitedev.spb.ru', 'Заявка на сайт'); // От кого отправлено письмо
		$address = "anxieter@yandex.ru";  //кому отправляем
		$mail->AddAddress($address, 'Алексею Исаеву');// можно дублировать


		// Вложение

		$msg = '';
	    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
	        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
	        $filename = $_FILES['userfile']['name'][$ct];
	        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
	            $mail->addAttachment($uploadfile, $filename);
	        } else {
	            $msg .= 'Failed to move file to ' . $uploadfile;
	        }
	    }

		//Тело письма

		$mail->isHTML(true);
		$mail->Subject = "Заявка c сайтa";
		// $mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Тип сайта: {$_POST['type']}<br> Тип верстки: {$_POST['verstka']}<br> Адаптивность: {$_POST['adaptive']}<br> Число страниц: {$_POST['pagn']}<br> Наличие исходников: {$_POST['ishodn']}<br> Сообщение: " . nl2br($_POST['comment']);
		$mail->Body = "Текст письма";

		// Шаблон сообщения

		// $body = file_get_contents('template.php');
		// $mail->MsgHTML($body);ss


		if(!$mail->send()) {
		    echo 'Message could not be sent.';  // если письмо не отправлено
		    echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
		    echo 'Message has been sent'; // если письмо отправлено
		}
	}
?>
