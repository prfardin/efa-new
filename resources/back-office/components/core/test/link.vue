<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'pr-link',
    props: {
        tag: {
            type: String,
            default: 'a',
        },
        to: {
            type: String,
            required: true
        },
    },

    setup(props) {
        props.message // type: string | undefined
    },
    render() {
        return h(
            this.tag,
            {
                id: 'foo',
                class: 'bar'
            },
            [
                this.$slots.default()
            ]
        )
    },
    on: {
        click: (e) => {
            alert('hi')
            if (this.to) {
                this.$router.push(this.to)
            } else if (this.href) {
                return true
            }
            this.$emit('click', e)
        }
    }
});
</script>
