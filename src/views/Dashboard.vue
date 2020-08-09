<template>
	<div class="container-fluid p-0" id="dashboard">
		<header class="row p-0 m-0">
			<div class="col-6 col-md-9 d-flex align-items-center">
				<img src="@/assets/logo.png" class="pl-1" alt="Logo is here">
			</div>
			<div class="col-6 col-md-3 d-flex justify-content-center">
				<div class="d-flex justify-content-center align-items-center">
					<div id="profileImage"></div>
				</div>
				<div class="full d-flex justify-content-center align-items-center pr-2 pl-2" id="profileName">Hi, Joshua</div>
				<div class="d-flex justify-content-center align-items-center pr-2 pl-2">
					<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z" fill="#013C61"/>
					</svg>
				</div>
			</div>
		</header>
		<div class="body row">
			<div class="fullHeight" id="sideNav">
				<div class="iconBody mb-4 d-flex justify-content-center align-items-center">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.24963 1.37544H1.37444V8.25062H8.24963V1.37544ZM8.24963 9.62506H1.37444C0.615301 9.62506 0 9.00976 0 8.25062V1.37544C0 0.6163 0.615301 0 1.37444 0H8.24963C9.00876 0 9.62506 0.6163 9.62506 1.37544V8.25062C9.62506 9.00976 9.00876 9.62506 8.24963 9.62506ZM8.24963 13.7504H1.37444V20.6256H8.24963V13.7504ZM8.24963 22H1.37444C0.615301 22 0 21.3847 0 20.6256V13.7504C0 12.9902 0.615301 12.3749 1.37444 12.3749H8.24963C9.00876 12.3749 9.62506 12.9902 9.62506 13.7504V20.6256C9.62506 21.3847 9.00876 22 8.24963 22ZM20.6246 1.37544H13.7494V8.25062H20.6246V1.37544ZM20.6246 9.62506H13.7494C12.9902 9.62506 12.3749 9.00976 12.3749 8.25062V1.37544C12.3749 0.6163 12.9902 0 13.7494 0H20.6246C21.3837 0 22 0.6163 22 1.37544V8.25062C22 9.00976 21.3837 9.62506 20.6246 9.62506ZM20.6246 13.7504H13.7494V20.6256H20.6246V13.7504ZM20.6246 22H13.7494C12.9902 22 12.3749 21.3847 12.3749 20.6256V13.7504C12.3749 12.9902 12.9902 12.3749 13.7494 12.3749H20.6246C21.3837 12.3749 22 12.9902 22 13.7504V20.6256C22 21.3847 21.3837 22 20.6246 22Z" fill="#013C61"/>
					</svg>
				</div>
				<div class="iconBody mb-4 d-flex justify-content-center align-items-center active">
					<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 19.3333V17.2963C17 15.0463 15.2091 13.2222 13 13.2222H5C2.79086 13.2222 1 15.0463 1 17.2963V19.3333" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.14815C11.2091 9.14815 13 7.32412 13 5.07407C13 2.82403 11.2091 1 9 1C6.79086 1 5 2.82403 5 5.07407C5 7.32412 6.79086 9.14815 9 9.14815Z" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M23 19.3333V17.2963C22.9986 15.4397 21.765 13.8188 20 13.3546" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M16 1.1324C17.7699 1.59396 19.0078 3.21832 19.0078 5.07916C19.0078 6.94 17.7699 8.56436 16 9.02592" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="iconBody mb-4 d-flex justify-content-center align-items-center">
					<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.5">
						<rect x="1" y="1" width="22" height="16" rx="2" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M1 7H23" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
					</svg>
				</div>
			</div>
			<div class="fullHeight p-3 p-md-5" id="mainBody">
				<!-- <div class="row bg-primary"></div> -->
			</div>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	#dashboard{
		width: 100%;
		height: 100%;
	}
	header {
		height: 70px;
		background: white;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.05);
	}

	#profileImage{
		height: 35px;
		width: 35px;
		background: #6A7E8A;
		border-radius: 100px;
	}

	#profileName{
		font-weight: 500;
		font-size: 16px;
		color: #013C61;
	}

	.body{
		height: calc(100% - 70px);
		margin: 0px;
	}

	#sideNav {
		width: 80px;
		padding-top: 70px;
		background: white;
		box-shadow: 3px 0 2px -1px rgba(0, 0, 0, 0.05);
	}

	#mainBody{
		width: calc(100% - 80px);
	}

	.iconBody{
		height: 53px;
		width: 100%;
	}

	.iconBody.active{
		border-left: 6px solid var(--pageGreen);
	}

	@media only screen and (max-width: 600px){
		#sideNav{
			position: fixed !important;
			bottom: 0px;
			width: 100%;
			height: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0px !important;
			padding: 0px !important;
			box-shadow: 0px -3px 2px -1px rgba(0, 0, 0, 0.05);
		}

		#sideNav > div {
			margin: 0px !important;
			padding: 0px !important;
		}

		.iconBody.active{
			border-left: 0px !important;
			border-bottom: 6px solid var(--pageGreen) !important;
			width: 200px;
		}
	}
</style>
