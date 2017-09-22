<?php include 'header.php'; ?>
<title>Mobile Ad Formats - Rob Thwaites - Web &amp; Graphic Design</title>
<link rel="canonical" href="http://robthwaites.com/ad-formats" />
<?php include 'header2.php'; ?>

	<div class="presentation ad-formats">

		<div id="slides" tabindex="-1">

			<nav class="prevnext top">
				<a class="prev" href="wattyl" title="Wattyl: 100 Years Microsite">&lsaquo;</a>
				<a class="close" href="/">✕</a>
				<a class="next" href="diggin" title="Diggin Deeper: Edible Garden Festival">&rsaquo;</a>
			</nav>

			<h1>Mobile Ad Formats</h1>
			<h2 class="client">Playground XYZ</h2>

			<div class="slideshow">
				<div class="royalSlider rsDefault">

					<!-- image and content -->
					<div class="video-slide">
						<video autoplay loop muted playsinline>
							<source src="/video/ads-htdemo.mp4">
							<!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
							<!-- <img src="image.gif"> -->
						</video>
					</div>
					<!-- image and content -->
					<div class="video-slide">
						<video autoplay loop muted playsinline>
							<source src="/video/ads-htgoogle.mp4">
							<!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
							<!-- <img src="image.gif"> -->
						</video>
					</div>

					<div class="video-slide">
						<video autoplay loop muted playsinline>
						  <source src="/video/ads-htpirates.mp4">
						  <!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
						  <!-- <img src="image.gif"> -->
						</video>
					</div>

				</div>

			</div>

			<div class="caption lead">
				<p>Playground XYZ wants to change the way advertisers interact with their customers on mobiles. I and the rest of the design team were tasked with devising, prototyping and testing new canvases and templates that would be user-friendly and appeal to advertisers.</p>
			</div>


			<div class="caption">
				<h3>The Hang Time</h3>
				<p>Based on a concept from our CEO and lead designer, I developed the Hang Time into an inline full-screen vertical ad experience, with a whole range of interactions. </p>
				<p>The ad unit fixes to the top of the page for a 1000-pixel scroll (on average 1-2 seconds). This gave us 'progress' count which we could use to create templated interactions that would used by a number of publishers.</p>
				<video autoplay loop muted playsinline>
				  <source src="video/ads-htdemo.mp4">
				  <!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
				  <!-- <img src="image.gif"> -->
				</video>
				<h4>Animations</h4>
				<p>I wanted to create full-screen animated ads which would momentarily engage the user to 'scrub' the animation timeline back and forth as they scrolled down the article page.</p><p>I wrote a flexible  Javascript plugin for our platform, that would allow us and our clients to easily create customised 'scrubbing' animations.</p>
				<p>I had a lot of fun rolling this out into a number of ad executions for our company</p>
			</div>



			<div class="slide">
				<p>[Carousel]</p>
				<div class="video-columns">
					<video autoplay loop muted playsinline style="width: 300px; height: 533px">
					  <source src="/video/ads-htdemo.mp4">
					  <!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
					  <!-- <img src="image.gif"> -->
					</video>
					<video autoplay loop muted playsinline style="width: 300px; height: 533px">
					  <source src="/video/ads-htgoogle.mp4">
					  <!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
					  <!-- <img src="image.gif"> -->
					</video>
					<video autoplay loop muted playsinline style="width: 300px; height: 533px">
					  <source src="/video/ads-htpirates.mp4">
					  <!-- <source src="image.webm" onerror="fallback(parentNode)"> -->
					  <!-- <img src="image.gif"> -->
					</video>
				</div>
			</div>

		 <div class="caption">

				<h4>Video</h4>

				<p>The Hang Time was a perfect distribution vehicle for vertical video assets (already in use on Snapchat and other platforms). I designed and prototyped the video player for the ad unit, allowing for branding customisations, then created drag-and-drop templates that would resize the video for full viewability on all our publishers.</p>

				<p>[Video template - Wonder Woman]</p>
				<p>[drag and drop in the Playground]</p>

			</div>

			<div class="caption">
				<h4>Store Locator</h4>
				<p>The company needed a Store Locator product, leveraging the Google Maps API, the purpose being to encourage foot traffic into stores. Knowing from our data that users were generally reluctant to share their location in an ad unit, we used Google Geolocation to estimate user location so that the ad unit would have its immediate impact.</p>
				<p>I designed the ad units, plotted the user journey through experience, then prototyped the store locator, integrating Google Maps into our ad units and ad serving platform.</p>
			</div>









			<div class="slide">
				<img src="/images/motherboard/05.jpg" style="display:none"/>
			</div>

			<nav class="prevnext bottom">
				<a class="prev" href="wattyl" title="Wattyl: 100 Years Microsite">&lsaquo;</a>
				<a class="close" href="/">✕</a>

				<a class="next" href="diggin" title="Diggin Deeper: Edible Garden Festival">&rsaquo;</a>
			</nav>

		</div>

	</div>

<?php include 'footer.php'; ?>
