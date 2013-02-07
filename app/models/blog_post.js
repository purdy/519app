exports.definition = {
	
	config: {
		"columns": {
			"title":"string",
			"body":"text",
			"guid":"string",
			"posted_on":"bigint",
			"read_on":"bigint"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "blog_post"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

