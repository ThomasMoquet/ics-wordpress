function download_ics (title, description, location, begin_date, end_date) {
    jQuery("body").append('<form method="post" id="download_ics" action="'+parameters.ICSDL_DOWNLOAD_URL+'">' +
                            '<input type="hidden" name="title" value="'+title.replace("&apos;", "'")+'"/>' +
                            '<input type="hidden" name="description" value="'+description.replace("&apos;", "'")+'"/>' +
                            '<input type="hidden" name="location" value="'+location.replace("&apos;", "'")+'"/>' +
                            '<input type="hidden" name="begin_date" value="'+begin_date.replace("&apos;", "'")+'"/>' +
                            '<input type="hidden" name="end_date" value="'+end_date.replace("&apos;", "'")+'"/>' +
                            '</form>');
    jQuery('#download_ics').submit();
    jQuery('#download_ics').remove();
}