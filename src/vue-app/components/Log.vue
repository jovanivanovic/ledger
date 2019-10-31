<template lang="html">
	<div class="log scrollbar">
        <div class="flex-wrapper">
            <p v-bind:class="block.data == null ? '' : block.index == 1 ? 'yellow' : 'blue'" v-for="block in blocks" :key="block.index">#{{ block.index }}: {{ block.hash }}</p>
        </div>
	</div>
</template>

<script>
	export default {
		name: "Log",
		data() {
            return {
			    blocks: []
            }
        },
		components: {},
		mounted() {
			const ipc = require('electron').ipcRenderer;

			ipc.on('notify-block', (event, block) => {
				this.blocks.unshift(block);
			});
		}
	};
</script>

<style lang="scss">
	.log {
        width: 50%;
        position: fixed;
        height: 50%;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 12px;

        .flex-wrapper {
            height: 100%;

            p {
                opacity: .4;

                &.blue {
                    color: #17a2b8;
                    opacity: 1;
                }

                &.yellow {
                    color: #ffb229;
                    opacity: 1;
                }
            }
        }
    }
</style>
