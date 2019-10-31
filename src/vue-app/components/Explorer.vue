<template lang="html">
	<div class="explorer scrollbar">
        <div class="flex-wrapper">
            <Block v-for="block in blocks"
                :index="block.index"
                :timestamp="block.timestamp"
                :previousHash="block.previousHash"
                :hash="block.hash"
                :data="block.data"
                :key="block.index"
            />
        </div>
	</div>
</template>

<script>
	import Block from './Block';

	export default {
		name: "Explorer",
		data() {
            return {
			    blocks: []
            }
        },
		components: {
			Block
		},
		mounted() {
			const ipc = require('electron').ipcRenderer;

			ipc.on('new-block', (event, block) => {
				this.blocks.unshift(block);
			});
		}
	};
</script>

<style lang="scss">
	.explorer {
        width: 50%;
        position: fixed;
        height: 100%;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        border-left: 1px solid rgba(255, 255, 255, 0.1);

        .flex-wrapper {
            height: 100%;
        }
    }
</style>
