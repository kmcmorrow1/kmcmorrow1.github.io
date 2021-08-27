define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'RSL Members', //Will appear in the data.
			title : {
				media : {word : 'RSL Members'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'annelise'},
    			{word : 'rita'},
    			{word : 'kevin'},
    			{word : 'jonas'},
    			{word : 'anne'},
    			{word : 'connor'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category2 :	{
			name : 'Presidents', //Will appear in the data.
			title : {
				media : {word : 'Presidents'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'obama'},
    			{word : 'biden'},
    			{word : 'trump'},
    			{word : 'lincoln'},
    			{word : 'eisenhower'},
    			{word : 'roosevelt'}
        ],
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		}
	});
});
