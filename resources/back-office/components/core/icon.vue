<script>
import { defineComponent, h } from 'vue'
import { icon } from '@bs/scripts/util/util'

export default defineComponent({
    name: 'pr-icon',
    props: {
        tag: {
            type: String,
            default: 'span',
        },
        icon: {
            type: String,
            required: true
        },
        ratio: Number,
    },
    methods: {
        setIcon() {
            return icon(this.$el, this.icon, this.ratio)
        }
    },
    watch: {
        icon() {
            this.setIcon()
        },
        ratio() {
            this.setIcon()
        },
    },
    mounted() {
        this.setIcon()
    },
    render() {
        return h(
            this.tag,
            {},
            []
        )
    }
});
</script>
