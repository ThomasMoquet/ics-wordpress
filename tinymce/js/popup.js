$(function(){
	var addIcsdl = {
		e: '',
		init: function(e) {
			addIcsdl.e = e;
			tinyMCEPopup.resizeToInnerSize();
		},
		insert: function add_link_to_mce(e) {
			var title = $('#title').val();
			var description = $('#description').val();
			var location = $(document).find('#location').val();
			
			var start = $('#begin_date').val();
			var startArray = start.match('([0-9]+)-([0-9]+)-([0-9]+) ([0-9]+):([0-9]+)');
			var startDate = startArray[3] + startArray[2] + startArray[1] + "T" + startArray[4] + startArray[5] + '00';
			var end = $('#end_date').val();
			var endArray = end.match('([0-9]+)-([0-9]+)-([0-9]+) ([0-9]+):([0-9]+)');
			var endDate = endArray[3] + endArray[2] + endArray[1] + "T" + endArray[4] + endArray[5] + '00';
			
			if(title == '' || description == '' || location == '' || start == '' || end == ''){
				alert("Vous devez remplir tout les champs.");
				return;
			}	
			
			var output = '<a class="download_ics" href="javascript:download_ics(\''+title.replace(/'/g, "&amp;apos;")+'\', \''+description.replace(/'/g, "&amp;apos;")+'\', \''+location.replace(/'/g, "&amp;apos;")+'\', \''+startDate.replace(/'/g, "&amp;apos;")+'\', \''+endDate.replace(/'/g, "&amp;apos;")+'\')">';
			output += '<img src="'+icsdl_url+'assets/images/calendar.png" alt="Ajouter au calendrier"/></a>';
		
			tinyMCEPopup.execCommand('mceInsertContent', false, output);
		
			tinyMCEPopup.close();
		}
	}
	tinyMCEPopup.onInit.add(addIcsdl.init, addIcsdl);
	$('.date-picker').appendDtpicker({
		'locale' : 'fr', 
		'closeOnSelected' : true,
		'autodateOnStart' : false
	});
	$('#begin_date').change( function(){
		var date = $(this).val();
		$('#end_date').val(date);
	});
	$('#insert').click(function(){
		addIcsdl.insert(addIcsdl.e);
	});
	$('#cancel').click(function(){
		tinyMCEPopup.close();
	});
});