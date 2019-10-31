<template lang="html">
	<div id="app">
		<Form />
		<Log />
		<Explorer />
	</div>
</template>

<script>
	import Form from './components/Form';
	import Log from './components/Log';
	import Explorer from './components/Explorer';

	export default {
		name: "App",
		data() {
            return {
				
            }
        },
		components: {
			Form,
			Log,
			Explorer
		},
		mounted() {
			const ipc = require('electron').ipcRenderer;

			ipc.on('verification', (event, verify) => {
				console.log(verify);
			});
		}
	};
</script>

<style lang="scss">
	html, body {
		background-color: #1D1E22;
		font-family: 'Roboto', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	body,
	#app {
		width: 100%;
		height: 100%;
		position: fixed;
		padding: 0;
		margin: 0;
	}
	
	.scrollbar {
		&::-webkit-scrollbar {
			width: 14px; 
			height: 18px;
		}

		&::-webkit-scrollbar-button,
		&::-webkit-scrollbar-corner,
		&::-webkit-resizer {
			display: none;
		}

		&::-webkit-scrollbar-thumb { 
			background: rgba(186, 24, 42, 0); 
			background-clip: padding-box; 
			height: 6px; 
			border: 4px solid rgba(0, 0, 0, 0); 
			-webkit-border-radius: 7px; 
			opacity: 0.5; 
			transition: all ease-in-out .3s; 

			&:hover { 
				opacity: 1; 
			}
		}

		&:hover {
			&::-webkit-scrollbar-thumb { 
				background: rgba(186, 24, 42, 0.5); 
				background-clip: padding-box; 
				height: 6px; 
				border: 4px solid rgba(0, 0, 0, 0); 
				-webkit-border-radius: 7px; 
				opacity: 0.5;
			}
		}

		&::-webkit-scrollbar-track,
		&::-webkit-scrollbar-track-piece { 
			background: transparent; 
		}
	}
</style>
