<template lang="html">
	<div class="form-container">
        <div class="form">
            <label>Data</label>
            <textarea v-model="data">

            </textarea>
            <button @click="push()">Push</button>
        </div>
	</div>
</template>

<script>
	export default {
		name: "Form",
		data() {
            return {
                data: null
            }
        },
		components: {},
        methods: {
            push() {
                const ipc = require('electron').ipcRenderer;
                
                ipc.send('push-block', JSON.parse(this.data));
                this.data = null;
            }
        },
		mounted() {}
	};
</script>

<style lang="scss">
    .form-container {
        width: 50%;
        position: fixed;
        height: 50%;
        left: 0;
        top: 0;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        .form {
            width: 560px;
            padding: 20px 50px;
            background-color: #333641;
            border-radius: 5px;

            label {
                color: white;
                line-height: 18px;
                font-size: 12px;
                text-transform: uppercase;
                opacity: .3;
                margin-bottom: 5px;
                display: block;
            }

            textarea {
                width: 100%;
                display: block;
                border-radius: 3px;
                background-color: white;
                font-family: 'Roboto Mono', monospace;
                color: white;
                background-color: rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(0, 0, 0, 0.05);
                margin-bottom: 20px;
                min-height: 150px;
            }

            button {
                background: transparent;
                border: 2px solid #28a745;
                float: right;
                color: #28a745;
                border-radius: 3px;
                text-transform: uppercase;
                padding: 5px 20px;
                cursor: pointer;
                transition: all ease-in-out .3s;

                &:hover {
                    background-color: #28a745;
                    color: white;
                }
            }
        }
    }
</style>
