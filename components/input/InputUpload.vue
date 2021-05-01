<template>
    <div :ref="`inputGroup`" class="inputGroup">
        <span
            class="titleGroup__text"
            :class="{ 'titleGroup__text--required': required }"
            >{{ title }}</span
        >
        <label class="inputGroup__label">
            <input
                class="label__input label__input--upload"
                @keydown="handleArrowUp($event)"
                @input="handleFileInput($event)"
                :ref="`input`"
                :type="'file'"
                :data-required="required"
                :data-title="title"
            />
        </label>
        <img :ref="`input__preview`" class="input__preview" :src="imageSrc" />
    </div>
</template>
<script>
export default {
    data: function () {
        return this.newData()
    },
    props: {
        width: {
            type: [String, Number],
            default: '1'
        },
        name: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    },
    computed: {
        hasFile() {
            return this.name && this.value
        }
    },
    watch: {
        hasFile(hasFile) {
            if (hasFile) {
                this.showPreview()
            } else {
                this.imageSrc = ''
            }
        }
    },
    methods: {
        newData() {
            this.$nextTick(() => {
                this.$forceUpdate()
            })
            return {
                imageSrc: ""
            }
        },
        showPreview() {
            const fileExtension = this.name.split('.')[1]
            const fileSrc = `data:image/${fileExtension};base64,${this.value}`
            this.imageSrc = fileSrc
        },
        handleFileInput(event) {
            const { files, value } = event.target
            if (files.length === 0) {
                return
            }
            const blob = files[0]
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                const { result } = reader
                this.imageSrc = reader.result
                const content = result.split(',')[1]
                const nameCrumbs = value.split("\\")
                const fileName = nameCrumbs[nameCrumbs.length - 1]
                this.$emit('input', content)
                this.$emit('update:name', fileName)
            });
            reader.readAsDataURL(blob);
        }
    }
}
</script>
<style lang="scss" scoped>
.inputGroup {
    .label__input--upload {
        padding: 3px;
    }
}
.input__preview {
    margin: 12px auto auto auto;
}
</style>