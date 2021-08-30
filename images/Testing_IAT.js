define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'RSL Member', //Will appear in the data.
			title : {
				media : {word : 'RSL Member'}, //Name of the category presented in the task.
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
			name : 'US President', //Will appear in the data.
			title : {
				media : {word : 'US President'}, //Name of the category presented in the task.
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
			attribute1 :
			{
				name : 'Bad words',
				title : {
					media : {word : 'Bad words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'awful'},
					{word: 'failure'},
					{word: 'agony'},
					{word: 'hurt'},
					{word: 'horrible'},
					{word: 'terrible'},
					{word: 'nasty'},
					{word: 'evil'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Good words',
				title : {
					media : {word : 'Good words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'laughter'},
					{word: 'happy'},
					{word: 'glorious'},
					{word: 'joy'},
					{word: 'wonderful'},
					{word: 'peace'},
					{word: 'pleasure'},
					{word: 'love'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
    		showDebriefing:true
	});
});
