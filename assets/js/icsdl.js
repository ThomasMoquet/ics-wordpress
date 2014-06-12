function download_ics (title, description, location, begin_date, end_date) {
	var calendar = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"BEGIN:VEVENT",
		"CLASS:PUBLIC",
		"DESCRIPTION:"+description,
		"DTSTART:"+begin_date,
		"DTEND:"+end_date,
		"LOCATION:"+location,
		"SUMMARY:"+title.replace("&apos;", "'"),
		"TRANSP:TRANSPARENT",
		"END:VEVENT",
		"END:VCALENDAR"
	].join('\n');

	var blob = new Blob([calendar], {type: "text/x-vCalendar;charset=utf-8"});

	saveAs(blob, "event.ics");
}