<script type="text/javascript">
		var incoming = window.location.pathname;
		//console.log(incoming);
		//console.log(incoming.charAt(1));
		if(incoming.charAt(1) === '' || incoming.charAt(1) === '#'){
			// do nothing - proceed
		}
	     else {
	     	incoming = incoming.substr(1); // strip opening slash
	     	console.log(incoming);
	        window.location.replace('http://robthwaites.com/#' + incoming);
	    }

	</script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-51327317-3', 'robthwaites.com');
	  ga('send', 'pageview');

	</script>
	<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>

	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/modernizr.js"></script>
</head>
<body>
