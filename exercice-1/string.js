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

function pro_access(object, str) {
	obj = '';
	if (str.length > 0 && object != null) {
		str = str.split('.');

		for (type in object) {
			if (object.type != undefined) {
				obj = obj + '.' + obj
				console.log(obj);
			}
		}
	}

	return str;
} pro_access({animal: {type: {name: "Test"}}}, 'animal.type.name');

function leet(str) {

}

function verlan(str) {

}

function yoda(str) {

}

function vig(str) {

}