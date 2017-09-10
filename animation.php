<?php include 'header.php'; ?>
<title>HTML5 Banner Animation - Rob Thwaites - Web &amp; Graphic Design</title>
<link rel="canonical" href="http://robthwaites.com/animation" />
<?php include 'header2.php'; ?>

	<div class="presentation">

		<div id="slides" tabindex="-1">

			<nav class="prevnext top">
				<a class="prev" href="cgu" title="HTML Email Templates">&lsaquo;</a>
				<a class="close" href="/">✕</a>
				<a class="next" href="disruption" title="The Great Disruption - Illustration">&rsaquo;</a>
			</nav>

			<div class="title banner">
				<div class="box-container">
					<div class="box">
							<span>Banner Animation</span>
							<span>Illustration &amp; HTML5 Animation</span>
							<span class="client">Student Work</span>
					</div>
				</div>
			</div>

			<div class="caption lead">
				<p>Move over Flash – amazing things are possible with Javascript and the high-performing GreenSock Animation Platform <a href="http://greensock.com" target="_blank">GSAP</a>, fast becoming a new industry standard for HTML5  animation.</p>
				<br />
				<p>The animation is crafted purely with SVG, Javascript and the GSAP – no jQuery, Flash or images. This makes it incredibly fast to load, and playable on all platforms (even those finicky Apple iOS devices).</p>
			</div>


			<div class="slide svg-wrap">
				    <?php
                        include('images/banner/svg-background.svg');
                    ?>

                    <?php
                        include('images/banner/svg-clouds.svg');
                    ?>
                    <?php
                        include('images/banner/svg-balloons.svg');
                    ?>
                    <?php
                        include('images/banner/svg-clouds2.svg');
                    ?>

                    <?php
                        include('images/banner/svg-neon.svg');
                    ?>

                    <?php
                        include('images/banner/svg-dust.svg');
                    ?>

                    <?php
                        include('images/banner/svg-arm.svg');
                    ?>
                    <?php
                        include('images/banner/svg-you.svg');
                    ?>
                    <?php
                        include('images/banner/svg-thanks.svg');
                    ?>
                    <?php
                        include('images/banner/svg-grain.svg');
                    ?>
                    <?php
                        include('images/banner/svg-replay.svg');
                    ?>

			</div>


			<div class="slide" style="display: none">
				<img src="/images/pantone/01.jpg" />
			</div>


			<nav class="prevnext bottom">
			    <a class="prev" href="cgu" title="HTML Email Templates">&lsaquo;</a>
				<a class="close" href="/">✕</a>
				<a class="next" href="disruption" title="The Great Disruption - Illustration">&rsaquo;</a>
			</nav>
        <script src="js/TweenMax.js"></script>
        <script src="js/MorphSVGPlugin.min.js"></script>
        <script src="js/gsap-banner.js"></script>

		</div>


	</div>


<?php include 'footer.php'; ?>
