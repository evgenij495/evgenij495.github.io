require.config({
    baseUrl: '../',
    paths: {
        components: 'components',
        widgets: 'scripts/widgets',
        templates: 'scripts/templates',
        mixins: 'scripts/mixins',
        elements: 'scripts/elements'
    }
});

// Start the main app logic.
require(['components/jquery/dist/jquery.min', 'components/bootstrap/dist/js/bootstrap.min.js'], function($) {
	console.log("hello");
});