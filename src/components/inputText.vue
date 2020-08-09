<template>
    <div class="form-input">
        <label>
            <input
            v-bind="$attrs"
            v-on="inputListeners"
            :type="textType" 
            required>
            <span class="placeholder">{{ this.text }}</span>
        </label>
        <span v-if="this.type == 'text'" class="userIcon">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 16.75V15C15 13.067 13.433 11.5 11.5 11.5H4.5C2.567 11.5 1 13.067 1 15V16.75" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8Z" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <span v-else-if="this.type == 'email'" class="userIcon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14328 11.0002C9.72123 11.0002 11.0004 9.72105 11.0004 8.14309C11.0004 6.56514 9.72123 5.28595 8.14328 5.28595C6.56532 5.28595 5.28613 6.56514 5.28613 8.14309C5.28613 9.72105 6.56532 11.0002 8.14328 11.0002Z" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.0004 5.28596V8.85739C11.0004 10.0409 11.9598 11.0003 13.1433 11.0003C14.3267 11.0003 15.2861 10.0409 15.2861 8.85739V8.14311C15.2859 4.82375 12.9991 1.94198 9.76659 1.18761C6.5341 0.433237 3.20791 2.0051 1.73846 4.98148C0.269016 7.95786 1.0436 11.5543 3.60801 13.6619C6.17243 15.7695 9.85078 15.8327 12.4861 13.8145" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <span v-if="this.type == 'password'" class="userIcon">
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.54545C1 7.54545 4.27273 1 10 1C15.7273 1 19 7.54545 19 7.54545C19 7.54545 15.7273 14.0909 10 14.0909C4.27273 14.0909 1 7.54545 1 7.54545Z" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C11.3556 10 12.4546 8.9011 12.4546 7.54549C12.4546 6.18988 11.3556 5.09094 10 5.09094C8.64441 5.09094 7.54547 6.18988 7.54547 7.54549C7.54547 8.9011 8.64441 10 10 10Z" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .form-input {
        margin: 40px 0;
        width: 100%;
    }
    .form-input label {
        position: relative;
        display: block;
        width: 100%;
        min-height: 45px;
    }
    .form-input .placeholder {
        position: absolute;
        display: block;
        top: 23px;
        z-index: 2;
        font-size: 16px;
        transition: all 200ms ease-in-out;
        width: 100%;
        cursor: text;
    }
    .form-input input{
        position: absolute;
        top: 15px;
        z-index: 1;
        width: 100%;
        font-size: 16px;
        border: 0;
        border-bottom: 1px solid grey;
        transition: border-color 200ms ease-in-out;
        outline: none;
        padding: 0;
        margin: 0;
    }
    .form-input input {
        height: 45px;
        color: #013C61;;
        font-size: 20px;
        font-weight: 400;
    }
    .form-input input:focus,
    .form-input input:valid{
        border-bottom: 1.45px solid var(--pageBlue);
    }
    .form-input input:focus + .placeholder,
    .form-input input:valid + .placeholder{
        top: 0;
        cursor: inherit;
        font-size: 16px;
        color: #6A7E8A;
        font-family: 'Roboto', sans-serif;
    }

    .userIcon{
        position: relative;
        right: -93%;
        bottom: 30px;
        animation: grow .3s ease-in;
        z-index: 1;
    }


    @media only screen and (max-width: 600px){
        .userIcon{
            position: relative;
            right: -92%;
            bottom: 30px;
            animation: grow .3s ease-in;
        }
    }
</style>

<script>
export default {
    name: "InputText",
    props: {
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        text: {
            type: String,
            required: true
        }
    },
    data(){
        return {}
    },
    computed: {
        textType(){
            if(this.type == 'password'){
                return 'password';
            } else{
                return 'text';
            }
        },
        inputListeners: function () {
            let vm = this;
            // `Object.assign` merges objects together to form a new object
            return Object.assign({},
            // We add all the listeners from the parent
            this.$listeners,
            // Then we can add custom listeners or override the
            // behavior of some listeners.
            {
                // This ensures that the component works with v-model
                input: function (event) {
                    vm.$emit('input', event.target.value)
                }
            }
        )}
    }
};
</script>
