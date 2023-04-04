import { defineComponent, withModifiers } from 'vue'

export default defineComponent({
  name: 'TsxMode',
  setup() {
    const click = (event: Event) => {
      event.preventDefault()
      alert(3)
    }

    return () => (
      <div style={{width: '120px', height: '120px', backgroundColor: 'blue'}} onContextmenu={click}>TsxMode</div>
    )
  }
})