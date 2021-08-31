
function checkmail()
{
txt=document.mail.address.value;
if (txt == "") {
	alert("Введите Адрес электронной почты.");
	return false
	}
if (txt.indexOf(".") == -1) {
	alert("Нет символа\".\"");
	return false
	}
if((txt.indexOf(",")>=0)||(txt.indexOf(";")>=0)||(txt.indexOf(" ")>=0)){
	alert("Адрес электронной почты был введен неправильно.");
	return false
	}
dog = txt.indexOf("@");
	if (dog == -1) {
	alert("Нет символа\"@\".");
	return false
	}
if ((dog < 1) || (dog > txt.length - 5)) {
	alert("Адрес электронной почты был введен неправильно.");
	return false
	}
if ((txt.charAt(dog - 1) == '.') || (txt.charAt(dog + 1) == '.')) {
alert("Адрес электронной почты был введен неправильно.");
	return false
	}
alert("Адрес электронной почты был введен ВЕРНО!");
}