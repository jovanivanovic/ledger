<template>
    <div class="block" v-bind:class="isNull ? 'null' : ''">
        <div class="header" v-bind:class="isGenesis ? 'genesis' : ''">
            <span>Block # {{ index }}</span>
            <span v-if="isGenesis" class="badge">Genesis</span>
            <span v-if="isNull" class="badge">No data</span>

            <button @click="expand()">{{ expanded ? '-' : '+' }}</button>
        </div>
        <template v-if="expanded">
            <div class="content">
                <div class="item">
                    <span class="label">Timestamp</span>
                    <span class="value">{{ timestamp }} <span class="comment">// {{ readableTimestamp }}</span></span>
                </div>

                <div class="item">
                    <span class="label">Hash</span>
                    <span class="value">{{ hash }}</span>
                </div>

                <div class="item">
                    <span class="label">Previous Hash</span>
                    <span class="value">{{ previousHash }}</span>
                </div>
            </div>

            <div class="data" v-show="!isNull">
                <span class="label">Data</span>
                <pre>{{ dataString }}</pre>
            </div>
        </template>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'Block',
        data() {
            return {
                expanded: false
            }
        },
        methods: {
            expand() {
                this.expanded = !this.expanded;
            }
        },
        computed: {
            dataString() {
                return JSON.stringify(this.data, null, 4);
            },
            isGenesis() {
                return this.index == 1;
            },
            isNull() {
                return this.data == null;
            },
            readableTimestamp() {
                return new Date(this.timestamp).toUTCString();
            }
        },
		components: {},
        mounted() {},
        props: [
            'index', 'timestamp', 'previousHash', 'hash', 'data'
        ]
    }
</script>

<style lang="scss">
    .block {
        border-radius: 5px;
        width: 560px;
        background-color: #333641;
        color: white;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
        
        &:first-of-type {
            margin-top: 20px;
        }
        
        &.null {
            opacity: .25;
            transition: all ease-in-out .2s;

            &:hover {
                opacity: 1;
            }
        }

        &.invalid {
            .header {
                background-color: #C02C44 !important;
            }
        }

        .header {
            font-family: 'Roboto Condensed', sans-serif;
            letter-spacing: 1px;
            padding: 20px 50px;
            text-transform: uppercase;
            font-size: 24px;
            background-color: #17a2b8;
            overflow: hidden;
            
            &.genesis {
                background-color: #ffb229 !important;
            }

            span {
                float: left;
                
                &.badge {
                    display: inline-block;
                    font-size: 11px;
                    background-color: rgba(0, 0, 0, 0.2);
                    padding: 2px 6px;
                    border-radius: 3px;
                    margin-top: 7px;
                    margin-left: 10px;
                }
            }

            button {
                float: right;
                height: 29px;
                width: 29px;
                text-align: center;
                line-height: 29px;
                margin: 0;
                padding: 0;
                font-size: 18px;
                border-radius: 3px;

            }

            button {
                float: right;
                height: 29px;
                width: 29px;
                user-select: none;
                cursor: pointer;
                outline: none;
                border: none;
                background-color: white;
                color: #333641;
                text-transform: uppercase;
                font-family: sans-serif;
                font-weight: 800;
                font-size: 18px;
                margin-top: -5px;
                margin-bottom: 0;
                text-align: center;
                line-height: 29px;
                transition: all 0.05s linear;
                box-shadow: 0px 0px 2px #686868, 
                            0px 1px 1px #ddd, 
                            0px 2px 1px #d6d6d6, 
                            0px 3px 1px #ccc, 
                            0px 4px 1px #777, 
                            0px 5px 3px rgba(100, 100, 100, 0.4), 
                            0px 6px 5px rgba(100, 100, 100, 0.1), 
                            0px 7px 7px rgba(100, 100, 100, 0.15), 
                            0px 8px 9px rgba(100, 100, 100, 0.2), 
                            0px 9px 11px rgba(100, 100, 100, 0.25);

                &:active {
                    box-shadow: 0px 0px 2px #686868;
                    margin-top: 0;
                    margin-bottom: 0;
                }
            }
        }
    
        .content {
            padding: 10px 50px;
            
            .item {
                margin-bottom: 10px;
                
                & > span {
                    display: block;
                    line-height: 18px;
                    
                    &.label {
                        font-size: 10px;
                        text-transform: uppercase;
                        opacity: .3;
                    }
                    
                    &.value {
                        font-family: 'Roboto Mono', monospace;
                        font-size: 11px;
                        
                        .comment {
                            font-size: 10px;
                            opacity: .3;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
        
        .data {
            background-color: white;
            padding: 10px 50px;
            font-family: 'Roboto Mono', monospace;
            color: #1D1E22;
            
            .label {
                display: block;
                line-height: 18px;
                font-size: 10px;
                font-family: "Roboto", sans-serif;
                text-transform: uppercase;
            }
            
            pre {
                background-color: rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(0, 0, 0, 0.1);
                padding: 10px;
                margin: 0;
                margin-bottom: 10px;
                border-radius: 3px;
                font-size: 12px;
            }
        }
    }
</style>