<template>
	<div class="container-fluid home bg-primary">
		<div class="row fullHeight">
			<div class="col-12 col-md-5 bg-info fullHeight hide-on-small" id="imageSection"></div>
			<div class="col-12 col-md-5 fullHeight hide-on-small" id="imageSectionOverlay"></div>
			<div class="col-12 col-md-5 fullHeight hide-on-small" id="imageSectionContent">
				<div id="imageTextSection">
					<div class="p-3" id="hazzleText">No Hazzles</div>
					<div class="p-3" id="loremText">
						Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod
					</div>
					<div class="d-flex justify-content-center">
						<div class="pt-3">
							<span class="p-1 radioSelect">
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="4.5" y="4.5" width="10.5" height="10.5" rx="5.25" fill="#2BDA53"/>
								<rect x="1" y="1" width="17.5" height="17.5" rx="8.75" stroke="#D0E8DF"/>
							</svg>

							</span>
							<span class="p-1 radioSelect">
								<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 5.75C0.5 2.85051 2.85051 0.5 5.75 0.5C8.6495 0.5 11 2.85051 11 5.75C11 8.6495 8.6495 11 5.75 11C2.85051 11 0.5 8.6495 0.5 5.75Z" fill="#D0E8DF"/>
								</svg>

							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-7 bg-danger fullHeight" id="rightSide">
				<div class="bg-primary" id="mainBody">Helllo</div>
				<!-- The footer -->
				<div class="bg-info" id="footer"></div>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	.home{
		height: 100%;
	}

	#imageSection{
		background-image: url('../assets/person.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	#imageSectionOverlay{
		position: absolute;
		background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.4), rgba(0,0,0,0.5));
		opacity: 0.9;
	}

	#imageSectionContent{
		position: absolute;
		opacity: 1;
		padding: 0px!important;
	}

	#imageTextSection{
		position: absolute;
		bottom: 0px;
		/*background: green;*/
		height: 250px;
		width: 100%;
	}

	#hazzleText{
		color: white;
		text-align: center;
		font-size: 24px;
		font-weight: 500;
	}

	#loremText{
		text-align: center;
		color: white;
		font-size: 24px;
		font-weight: normal;
	}

	.radioSelect{
		cursor: pointer;
	}

	#rightSide{
		/*overflow-y: scroll;*/
	}

	#mainBody{
		min-height: calc(100% - 70px);
	}

	#footer{
		height: 70px;
	}
</style>

<script>
// @ is an alias to /src

export default {
	name: "Home",
};
</script>
