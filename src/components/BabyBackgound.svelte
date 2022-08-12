<script lang="ts">
	import * as BABYLON from 'babylonjs';
	import type { Engine, Scene, AbstractMesh, Camera } from 'babylonjs';
	import { onMount } from 'svelte';
	import 'babylonjs-loaders';
	//component
	let myCanvas: HTMLCanvasElement;
	let clickable = true;
	let showing = false;

	let engine: Engine;
	let scene: Scene;
	const CUBE_COLOR = '#0c0a0a'; //"#000045";
	const LIGHT_COLOR = '#FA8072';
	const STEP_BROWSING = 'browsing';
	let cube1: AbstractMesh;
	let cube2: AbstractMesh;
	let cube3: AbstractMesh;
	let browsingCamera;
	let scrollPos: number;
	let oldPos = 0;
	const SPEED = 0.002;
	let nativeSpeed = SPEED;
	let objLoaded = false;
	let rotCible1: number;
	let rotCible2: number;
	let rotCible3: number;

	function cannonLoaded() {}

	onMount(() => {
		engine = new BABYLON.Engine(myCanvas, true);
		scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

		setupBrowsing();

		var light1 = new BABYLON.DirectionalLight(
			'DirectionalLight1',
			new BABYLON.Vector3(-1, 1, 1),
			scene
		);
		light1.diffuse = BABYLON.Color3.FromHexString(LIGHT_COLOR);
		light1.specular = BABYLON.Color3.FromHexString(LIGHT_COLOR);

		var light2 = new BABYLON.DirectionalLight(
			'DirectionalLight2',
			new BABYLON.Vector3(0, 0, 1),
			scene
		);
		light2.diffuse = BABYLON.Color3.FromHexString(CUBE_COLOR);
		light2.specular = BABYLON.Color3.FromHexString(CUBE_COLOR);

		var light3 = new BABYLON.DirectionalLight(
			'DirectionalLight3',
			new BABYLON.Vector3(1, 1, 1),
			scene
		);
		light3.diffuse = BABYLON.Color3.FromHexString(LIGHT_COLOR);
		light3.specular = BABYLON.Color3.FromHexString(LIGHT_COLOR);
		engine.runRenderLoop(renderScene);

		setTimeout(function () {
			engine.resize();
			showing = true;
		}, 200);
	});
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	function renderScene() {
		var speed = (scrollPos - oldPos) / 500;
		if (speed < 0) {
			nativeSpeed = -SPEED;
		} else if (speed > 0) {
			nativeSpeed = SPEED;
		}
		oldPos = scrollPos;
		rotCible1 += nativeSpeed + speed;
		rotCible2 += nativeSpeed + speed;
		rotCible3 += nativeSpeed + speed;
		if (objLoaded) {
			cube1.rotation.y += (rotCible1 - cube1.rotation.y) * 0.1;
			cube2.rotation.x += (rotCible2 - cube2.rotation.x) * 0.1;
			cube3.rotation.z += (rotCible3 - cube3.rotation.z) * 0.1;
		}
		if (scene) scene.render();
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	function setupBrowsing() {
		// currentStep = STEP_BROWSING;
		browsingCamera = new BABYLON.TargetCamera('brCam', new BABYLON.Vector3(0, 0, -5), scene);
		scene.activeCameras = [browsingCamera];
		BABYLON.SceneLoader.ImportMesh(null, 'assets/3D/', 'cubes.obj', scene, function (meshes) {
			cube1 = meshes[1];
			cube1.material = getStandardMaterial();

			cube2 = meshes[2];
			cube2.material = getStandardMaterial();
			cube3 = meshes[0];
			cube3.material = getStandardMaterial();
			objLoaded = true;
			rotCible1 = cube1.rotation.y;
			rotCible2 = cube2.rotation.x;
			rotCible3 = cube3.rotation.z;
		});
		//     cube1 = BABYLON.Mesh.CreateBox("cube1", 2, scene);
		//     cube1.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);

		// 	cube1.material = getStandardMaterial();

		//     cube2 = BABYLON.Mesh.CreateBox("cube2", 2, scene);
		//     cube2.rotation = new BABYLON.Vector3(Math.PI / 4, 0, 0);

		//         cube2.material = getStandardMaterial();

		//     cube3 = BABYLON.Mesh.CreateBox("cube3", 2, scene);
		//     cube3.rotation = new BABYLON.Vector3(0, 0, Math.PI / 4);

		//         cube3.material = getStandardMaterial();
	}
	function disposeBrowsing() {}

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	function onResize() {
		engine.resize();
	}
	function getStandardMaterial(c = CUBE_COLOR) {
		var mat = new BABYLON.StandardMaterial('mat1', scene);
		mat.diffuseColor = BABYLON.Color3.FromHexString(c);
		mat.ambientColor = BABYLON.Color3.FromHexString(LIGHT_COLOR);
		// mat.bumpTexture = new BABYLON.Texture("assets/bumpmap3.jpg", scene);

		return mat;
	}
</script>

<svelte:head>
	<script src="https://cdn.babylonjs.com/cannon.js" on:load={cannonLoaded}>
	</script>
</svelte:head>
<svelte:window on:resize={onResize} bind:scrollY={scrollPos} />
<canvas
	bind:this={myCanvas}
	style="pointer-events: {clickable ? 'inherit' : 'none'};"
	class:showing
/>

<style>
	canvas {
		width: 100vw;
		height: 100vh;
		/* height: 33vw; */
		outline: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		opacity: 0;
		transition: opacity 1s linear;
		/* background-color: red; */
		/* position: absolute; */
	}
	.showing {
		opacity: 1;
	}
</style>
