import { createWebHistory, createRouter } from "vue-router";
import PageGallery from "../../components/Page-gallery.vue";
import CharacterDetails from "../../components/Character-details.vue";

const routes = [
	{ path: "/", component: PageGallery },
	{
		path: "/character/:id",
		name: "character",
		component: CharacterDetails,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
