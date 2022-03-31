import Component from "./Model3d.svelte";
import ExampleComponent from "./Example.svelte";
import { loadAsData } from "../../utils/example_processors";

export default {
	component: Component,
	example: ExampleComponent,
	process_example: loadAsData
};
