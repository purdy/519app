exports.definition = {
	
	config: {
		"columns": {
			"title":"String",
			"description":"String",
			"duration":"smallint",
			"posted_on":"bigint",
			"downloaded_on":"bigint",
			"cursor":"smallint",
			"remote_url":"String",
			"local_path":"String"
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

