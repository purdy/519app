exports.definition = {
	
	config: {
		"columns": {
			"title":"string",
			"description":"string",
			"url":"string",
			"guid":"string"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "podcast"
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

