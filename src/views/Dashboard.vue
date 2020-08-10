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
				<!-- First Header -->
				<div class="row" id="mainBodyFirstHeader">
					<div class="col-6 d-flex align-items-center" id="employeesText">Employees</div>
					<div class="col-6 d-flex align-items-center justify-content-end">
						<div class="addNewButton">
							<InputButton text="Add New"/>
						</div>
					</div>
				</div>
				<!-- Second Header -->
				<div class="row bg-white" id="mainBodySecondHeader">
					<div class="col-6 col-md-7 d-flex align-items-center pl-3" id="secondHeaderText">Josh Bakery Ventures</div>
					<div class="col-6 col-md-5 d-flex align-items-center" id="secondHeaderAddress">62, Bode Thomas, Surulere, Lagos</div>
				</div>
				<!-- Third header -->
				<div class="row mt-3 mb-5 mb-md-0" id="mainBodyThirdHeader">
					<div class="col-12 col-md-3">
						<div class="row fullHeight">
							<div class="col-6 d-flex justify-content-center align-items-center">
								<div class="row" id="changeRoleBtn">
									<div class="col-9 d-flex justify-content-center align-items-center">Change role</div>
									<div class="col-2 pt-2">
										<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9 5L5 1L1 5" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M1 9L5 13L9 9" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
								</div>
							</div>
							<div class="col-6 d-flex justify-content-center align-items-center">
								<div class="" id="changeBtn">
									<InputButton style="font-size: 14px" text="Change"/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-9">
						<div class="row fullHeight">
							<div class="col-8 d-flex pl-0 align-items-center">
								<input type="text" placeholder="Enter staff name here..." id="staffInputText" name="">
								<span id="staffSearchIcon">
									<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M6.05556 11.6555C8.84766 11.6555 11.1111 9.3921 11.1111 6.59999C11.1111 3.80788 8.84766 1.54443 6.05556 1.54443C3.26345 1.54443 1 3.80788 1 6.59999C1 9.3921 3.26345 11.6555 6.05556 11.6555Z" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M14.2611 15.1167L9.55555 10.3333" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</span>
							</div>
							<div class="col-4 m-0 p-0 d-flex justify-content-end">
								<div class="staffNav d-flex">
									<div class="pageNumber d-flex justify-content-center align-items-center">
										<span id="activePageNumber">1</span>
									</div>
									<div class="pageNumber d-flex justify-content-center align-items-center">of</div>
									<div class="pageNumber d-flex justify-content-center align-items-center">2</div>
								</div>
								<div class="staffNav d-flex justify-content-center">
									<div class="d-flex justify-content-center align-items-center pr-1">
										<span class="pageNavIcon">&lt;</span>
									</div>
									<div class="d-flex align-items-center justify-content-center pl-1">
										<span class="pageNavIcon">&gt;</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Data table -->
				<div class="mt-3 fullWidth" id="dataTable">
					<div class="dataTableRow header row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">FIRST NAME</div>
						<div class="col-2">LAST NAME</div>
						<div class="col-2">EMAIL</div>
						<div class="col-2">PHONE</div>
						<div class="col-2">ROLE</div>
						<div class="col-1"></div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Joshua</div>
						<div class="col-2">Bakare</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Admin</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Jane</div>
						<div class="col-2">Clement</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Staff</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Hannah</div>
						<div class="col-2">Johnmson</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Staff</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Joshua</div>
						<div class="col-2">Bakare</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Admin</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Joshua</div>
						<div class="col-2">Bakare</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Admin</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Jane</div>
						<div class="col-2">Clement</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Staff</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<div class="dataTableRow text row">
						<div class="col-1">
							<label class="dataCheckBox">
								<input type="checkbox" class="" name="">
								<span></span>
							</label>
						</div>
						<div class="col-2">Hannah</div>
						<div class="col-2">Johnmson</div>
						<div class="col-2">josh.bakery@gmail.com</div>
						<div class="col-2">+2348133482456</div>
						<div class="col-2">Staff</div>
						<div class="col-1">
							<span>
								<img src="@/assets/delete.svg" alt="Delete Icon here" />
							</span>
						</div>
					</div>
					<!-- Rows end here -->
				</div>
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

	#mainBodyFirstHeader{
		height: 60px;
		width: 100%;
	}

	#employeesText{
		font-size: 26px;
		font-weight: 500;
	}

	.addNewButton{
		width: 200px;
		height: 44px;
	}

	#mainBodySecondHeader{
		height: 110px;
	}

	#mainBody{
		overflow-y: scroll;
	}

	#secondHeaderText{
		font-size: 36px;
		color: var(--pageBlue);
		font-weight: 500;
	}

	#secondHeaderAddress{
		font-size: 22px;
		font-weight: 400;
		color: var(--pageBlue);
	}

	#mainBodyThirdHeader{
		min-height: 50px;
		width: 100%;
	}

	#changeRoleBtn{
		width: 143px;
		height: 35px;
		background: white !important;
		border-radius: 3px;
		border: 1px solid rgba(106, 126, 138, 0.4);
		color: #6A7E8A;
		font-size: 14px;
		cursor: pointer;
	}

	#changeBtn{
		width: 118px;
		height: 34px;
	}

	#staffInputText{
		height: 34px;
		width: 332px;
		background: white;
		border-radius: 3px;
		border: 1px solid rgba(106, 126, 138, 0.4);
		padding-left: .5rem;
		font-size: 14px;
		transition: .2s linear;
	}

	#staffInputText:focus{
		border: 0px;
		outline: 1px solid rgba(106, 126, 138, 1);
	}

	#staffSearchIcon{
		position: relative;
		right: 30px;
	}

	.staffNav{
		width: 60px;
	}

	.pageNumber{
		width: 33.3%;
	}

	#activePageNumber{
		border-radius: 3px;
		border: 1px solid rgba(1, 60, 97, 0.1);
		width: 21px;
		height: 21px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		background: white;
		cursor: pointer;
	}

	.pageNavIcon{
		width: 16px;
		height: 16px;
		border-radius: 50px;
		background: var(--pageGreen);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: .4s linear;
	}

	.pageNavIcon:hover{
		opacity: 0.5;
	}

	#dataTable{
		min-height: 400px;
	}

	#dataTable .dataTableRow{
		height: 55px;
	}

	#dataTable .dataTableRow.header > div{
		font-size: 14px;
		font-weight: 500;
		color: #013C61;
	}

	#dataTable .dataTableRow.text > div{
		font-size: 16px;
		font-weight: 400;
		color: #6A7E8A;
	}

	#dataTable .dataTableRow > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dataCheckBox{
		display: inline-flex;
	    cursor: pointer;
	    position: relative;
	}

	.dataCheckBox > input{
		height: 13px;
		width: 13px;
		appearance: none;
		border: 1.2px solid rgba(106, 126, 138, 0.4);
		border-radius: 1px;
		outline: none;
	    transition-duration: 0.3s;
	    background-color: white;
	    cursor: pointer;
	}

	.dataCheckBox > input:checked{
		border: 1px solid rgba(106, 126, 138, 0.4);
	    background-color: white;
	}

	.dataCheckBox > input:checked + span::before {
	    content: '\2713';
	    display: block;
	    text-align: center;
	    color: var(--pageGreen);
	    position: absolute;
	    left: 0rem;
	    top: -0.3rem;
	}

	.dataCheckBox > input:active {
	    border: 2px solid #34495E;
	}

	#dataTable > div:nth-child(even){
		background: white;
	}

	#dataTable > div:nth-child(odd){
		background: none;
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
			z-index: 2;
		}

		#sideNav > div {
			margin: 0px !important;
			padding: 0px !important;
		}

		#mainBody{
			width: 100% !important;
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.iconBody.active{
			border-left: 0px !important;
			border-bottom: 6px solid var(--pageGreen) !important;
			width: 200px;
		}

		#secondHeaderText{
			font-size: 28px;
		}

		#secondHeaderAddress{
			font-size: 18px;
		}

		#mainBodyThirdHeader > div {
			height: 50px;
		}

		#dataTable{
			overflow-x: scroll;
		}

		#dataTable .dataTableRow {
			min-width: 300%;
		}
	}
</style>

<script type="text/javascript">
	import InputButton from '@/components/inputButton.vue';
	export default {
		name: 'Dashboard',
		components: {
			InputButton
		}
	}
</script>