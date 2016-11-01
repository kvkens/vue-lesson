var apiURL = 'https://api.github.com/repos/iuap-design/tinper-neoui/commits?per_page=10&sha='
var vm = new Vue({
	el: '#app',
	data: {
		branches: ["master", "release"],
		currentBranch: "release",
		commits: null
	},
	created: function() {
		this.fetchData();
	},
	watch: {
		currentBranch: "fetchData"
	},
	filters: {
		formatDate: function(v) {
			return v.replace(/T|Z/g, ' ');
		}
	},
	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest();
			var self = this;
			xhr.open('GET', apiURL + self.currentBranch);
			xhr.onload = function() {
				self.commits = JSON.parse(xhr.responseText);
				console.log(self.commits[0].html_url);
			}
			xhr.send();
		}
	}
});