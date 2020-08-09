<template>
	<div class="d-flex justify-content-center align-items-center shadow" id="button">Button</div>
</template>

<style type="text/css" scoped>
	#button{
		background: var(--pageGreen);
		color: white;
		width: 100%;
		height: 100%;
		font-weight: 500;
		font-size: 18px;
		font-size: 'Roboto', sans-serif;
		border-radius: 3px;
		cursor: pointer;
		transition: .4s linear;
	}

	#button:hover{
		opacity: 0.7;
	}
</style>

<script type="text/javascript">
	export default {
		name: 'InputButton',
		data(){
			return {}
		}
	}
</script>