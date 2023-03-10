/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


$(document).ready(function() {
	$('#calculate').click(function() {
		var birthday = new Date($('#birthday').val());
		var today = new Date();
		var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
		if (nextBirthday < today) {
			nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
		}
		var daysLeft = Math.round((nextBirthday - today) / (1000 * 60 * 60 * 24));
		$('#days').text(daysLeft);
	});
});