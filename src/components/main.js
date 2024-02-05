import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const myApp = createApp(configuration);
myApp.mount("#app");

const configuration = {
	data: function () {
		return {
			count: 0,
		};
	},
	template:
		'<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>',
};
