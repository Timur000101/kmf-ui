import KButton from './KButton.vue'

export default {
	title: 'Button',
	component: KButton,
	argTypes: {
		variant: { control: 'primary' }
	}
}

const Template = (args) => ({
	components: { KButton },
	setup() {
		return { args }
	},
	template: '<button v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: 'Button'
}
