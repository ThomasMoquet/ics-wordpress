<!DOCTYPE html>
<head>
	<title>Ajouter un évenement</title>
	<script language="javascript" type="text/javascript" src="<?php echo site_url();?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
	<script language="javascript" type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<?php /*	<script language="javascript" type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>*/?>
	<script language="javascript" type="text/javascript" src="<?php echo ICSDL_URL;?>assets/js/jquery.simple-dtpicker.js"></script>	
	<link href="<?php echo ICSDL_URL;?>assets/css/jquery.simple-dtpicker.css" rel="stylesheet" type="text/css" />
<?php /*	<link href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />*/?>
	<link href="<?php echo ICSDL_URL;?>tinymce/css/popup.css" rel="stylesheet" type="text/css" />
	<script language="javascript" type="text/javascript">var icsdl_url = "<?php echo ICSDL_URL;?>";</script>
	<script language="javascript" type="text/javascript" src="<?php echo ICSDL_URL;?>tinymce/js/popup.js"></script>
</head>
<body>
	<form>
		<ul>
			<li>
				<label for="title">Titre : </label>
				<input type="text" id="title" name="title" value=""/>
			</li>
			<li>
				<label for="description">Description : </label>
				<input type="text" id="description" name="description" value=""/>
			</li>
			<li>
				<label for="location">Lieu : </label>
				<input type="text" id="location" name="location" value=""/>
			</li>
			<li>
				<label for="begin_date">Date de début :</label> 
				<input type="text" id="begin_date" name="begin_date" value="" class="date-picker"/>
			</li>
			<li>
				<label for="end_date">Date de fin :</label> 
				<input type="text" id="end_date" name="end_date" value="" class="date-picker"/>
			</li>
		</ul>
		<div class="mceActionPanel">
			<input type="button" id="insert" name="insert" value="Insérer">
			<input type="button" id="cancel" name="cancel" value="Annuler">
		</div>
	</form>
</body>