function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  }

  return str;
}

function capitalize(str) {
	if (str.length > 0) {
		return str.replace(/\b\w/g, l => l.toUpperCase());
	}

	return str;
}

function camelCase(str) {
	if (str.length > 0) {
		str = capitalize(str);
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    	return letter;
  		}).replace(/\s+/g, '');
	}

	return str;
}

function snake_case(str) {
	if (str.length > 0) {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    	return letter;
  		}).replace(/\s+/g, '_');
	}

	return str;
}

function prop_access(object, str) {
	if (str.length > 0 && object != null) {
		obj = object;
		str = str.split('.');

		str.forEach(function (arrayItem) {
			obj = obj + '.' + arrayItem
		});
    	return obj;
	}
} prop_access({animal: {type: {name: "Test"}}}, 'animal.type.name');

function leet(message) {
	var messageLeet = "";
 
	for (var i = 0; i < message.length; i++) {
  		if (message[i].toLowerCase() === "l") { messageLeet += "1"; }
  		else if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
  		else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
		else if (message[i].toLowerCase() === "t") { messageLeet += "7"; }
		else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
		else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
		else { messageLeet += message[i].toLowerCase(); }
	}

	return messageLeet
}

function verlan(str) {
	if (str.length > 0) {
		return str.split("").reverse().join("").split(" ").reverse().join(" ");
	}

	return str;
}

function yoda(str) {
	if (str.length > 0) {
		var arr = str.split(" ");
		arr.reverse();
		str = arr.join(" ");

		return str;
	}

	return str;
}

function ordA(a) {
  return a.charCodeAt(0) - 65;
}
 
// vigenere
function vig(text, key, decode) {
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}