<template>
	<div class="container-fluid home">
		<div class="row fullHeight">
			<div class="col-12 col-md-5 fullHeight hide-on-small" id="imageSection"></div>
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
			<div class="col-12 col-md-7 fullHeight" id="rightSide">
				<div class="d-flex justify-content-center" id="mainBody">
					<div class="pt-5" id="createAccountBody">
						<div id="createAccountText">Create your free account</div>
						<div class="d-flex pt-2" id="registrationText">
							<div class="pr-2">Already registered?</div>
							<div class="" id="signin">Sign in</div>
						</div>
						<!-- create account form -->
						<div class="shadow mt-4 pb-5" id="createAccountFormBody">
							<div class="row m-0 pt-4">
								<div class="col-12 col-md-6 m-0">
									<InputText type="text" class="m-0" text="First Name"/>
								</div>
								<div class="col-12 col-md-6 m-0">
									<InputText type="text" class="m-0" text="Last Name"/>
								</div>
							</div>
							<div class="row m-0 pl-3 pr-3 pt-2">
								<InputText type="email" class="m-0" text="Email"/>
							</div>
							<div class="row m-0 pl-3 pr-3  pt-2">
								<InputText type="password" class="m-0" text="Password"/>
							</div>
							<div class="row m-0 d-flex justify-content-end">
								<div class="pr-3 mt-4" id="submitButton">
									<router-link :to="{name: 'Dashboard'}">
										<InputButton text="Continue"/>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- The footer -->
				<div class="row" id="footer">
					<div class="col-12 col-md-8 d-flex justify-content-center align-items-center footerText halfHeight">
						By signing up, you agree to our <span> Terms </span> and <span> Privacy Policy </span>
					</div>
					<div class="col-12 col-md-4 footerText d-flex justify-content-center align-items-center halfHeight">
						&copy;2019 Tinylabs. All rights reserved
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.home{
		height: 100%;
	}

	a{
		text-decoration: none!important;
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
		min-height: calc(100% - 60px);
	}

	#footer{
		height: 60px;
	}

	#createAccountBody{
		min-height: 400px;
		width: 70%;
	}

	#createAccountText{
		font-size: 34px;
		font-weight: 500;
		color: var(--pageBlue);
	}

	#registrationText{
		font-size: 18px;
	}

	#signin{
		color: var(--pageGreen);
		cursor: pointer;
		transition: .4s linear;
	}

	#signin:hover{
		opacity: 0.4;
	}

	#createAccountFormBody{
		background: white;
		border-radius: 5px;
		width: 100%;
		min-height: 200px;
	}

	.footerText{
		font-size: 13px;
		color: #6A7E8A;
		font-weight: normal;
	}

	.footerText > span {
		color: var(--pageGreen);
		padding-left: .2rem;
		padding-right: .2rem;
		cursor: pointer;
		transition: .4s linear;
	}

	.footerText > span:hover{
		opacity: 0.4;
	}

	#submitButton{
		height: 44px;
		width: 200px;
	}



	/* Small devices with 600px width and below */

	@media only screen and (max-width: 600px){
		#createAccountBody{
			min-height: 400px;
			width: 95%;
			margin-bottom: 1em;
		}

		#createAccountText{
			font-size: 20px;
			text-align: center;
		}

		#registrationText{
			font-size: 16px;
			display: flex !important;
			justify-content: center;
			color: var(--pageBlue);
		}

		#footer{
			height: 60px;
			background: #f6f8f8;
		}
	}
</style>

<script>
// @ is an alias to /src
import InputText from '@/components/inputText.vue';
import InputButton from '@/components/inputButton.vue';

export default {
	name: "Home",
	components: {
		InputText,
		InputButton
	}
};
</script>
