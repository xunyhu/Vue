// $.ajax({
// 	type: "GET",
// 	url: "https://cnodejs.org/api/v1/topics?tab="+tab,
// 	dataType: "json",
// 	success: function(data) {
// 		this.items = data.data;
// 		this.load = false;
// 		this.page++;
// 	}.bind(this)
// })

(function(state,type) {
	$.ajax({
		type: 'get',
		url: "https://cnodejs.org/api/v1/topics?tab="+type,
		dataType: "json",
		success: function(data) {
			state.items = data.data;
		}
	})
})(state,val)