// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		ingredients:['meat', 'fruit', 'vegetables'],
		persons: [
			{name: 'Peter', age: 49, color: 'green'},
			{name: 'Fred', age: 41, color: 'blue'}
		]
	}
});
