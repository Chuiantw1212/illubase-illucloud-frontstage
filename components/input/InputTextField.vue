<template>
    <div
        class="inputGroup"
        :ref="`inputGroup`"
        :class="{ 'inputGroup--error': message }"
    >
        <div class="inputGroup__titleGroup">
            <span
                class="titleGroup__text"
                :class="{ 'titleGroup__text--required': required }"
                >{{ title }}</span
            >
            <span class="inputGroup__message">{{ message }}</span>
        </div>
        <label class="inputGroup__label">
            <input
                class="label__input"
                v-model="localValue"
                :placeholder="placeholder"
                autocomplete="off"
            />
        </label>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            message: '',
        }
    },
    computed: {
        localValue: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit('input', newValue)
            }
        }
    }
}
</script>