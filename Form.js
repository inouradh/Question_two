function firstfocus()

 {

 var uid = document.registration.username.focus();

 return true;

 }

 function username_validation(mw,my)

 {

 var uid = document.registration.username;

 var uid_len = uid.value.length;

 if (uid_len == 0 || uid_len >= my || uid_len < mw)

 {

 alert("Please enter username/minimum character "+mw+" to "+my);

 uid.focus();

 return false;

 }

 document.registration.passwrd.focus();

 return true;

 }


 document.registration.username.focus();

 return true;

 }

 function allLetter()

 {

 var uname = document.registration.username;

 var letters = /^[A-Za-z]+$/;

 if(uname.value.match(letters))

 {

 document.registration.address.focus();

 return true;

 }

 else

 {

 alert('Username only character');

 uname.focus();

 return false;

 }

 }

 function alphanumeric()

 {

 var uadd = document.registration.address;

 var letters = /^[0-9a-zA-Z]+$/;

 if(uadd.value.match(letters))

 {

 document.registration.country.focus();

 return true;

 }

 else

 {

 alert('Address only alphanumeric');

 uadd.focus();

 return false;

 }

 }

 function countryselect()

 {

 var ucountry = document.registration.country;

 if(ucountry.value == "Default")

 {

 alert('Please select your country');

 ucountry.focus();

 return false;

 }

 else

 {

 document.registration.zip.focus();

 return true;

 }

 }

 function allnumeric()

 {

 var uzip = document.registration.zip;

 var numbers = /^[0-9]+$/;

 if(uzip.value.match(numbers))

 {

 document.registration.email.focus();

 return true;

 }

 else

 {

 alert('ZIP Code only numeric');

 uzip.focus();

 return false;

 }

 }

 function ValidateEmail()

 {

 var uemail = document.registration.email;

 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if(uemail.value.match(mailformat))

 {

 document.registration.desc.focus();

 return true;

 }

 else

 {

 alert("Invalid email address!");

 uemail.focus();

 return false;

 }

 }
