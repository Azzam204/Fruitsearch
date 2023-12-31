const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter( v => v.toLowerCase().includes(str.toLowerCase()));
	return results;
}

function searchHandler(e) {
	let searchVal = e.target.value;
	let searchArr = search(searchVal);
	return input.value !== '' ?  showSuggestions(searchArr) : suggestions.innerHTML = '';
}

function showSuggestions(results) {
	suggestions.innerHTML = '' ;
	return results.forEach(v => {
		let sugg = document.createElement('li');
		// below is my not so elegant attempt at making the letters that match the input have bold text.
		sugg.innerHTML = v.toLowerCase().replaceAll(input.value.toLowerCase(),`<b>${input.value.toLowerCase()}</b>`);
		
		suggestions.append(sugg);
	})
}

function useSuggestion(e) {
	let sug = e.target.innerText;
	input.value = sug;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);