
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
// 	window.addEventListener('load', verificarOrientacion);
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	verificarOrientacion();
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

async function verificarOrientacion() {
		  // Verificar si el ancho de la ventana es menor que un umbral (puedes ajustar este valor)
		  const umbralAncho = 768; // Ejemplo: 768px es un ancho típico de dispositivos móviles
		
		  if (window.innerWidth < umbralAncho && window.innerHeight < window.innerWidth) {
			// El dispositivo es lo suficientemente pequeño y está en orientación vertical
			alert('Por favor, coloca tu dispositivo en posición vertical para una mejor experiencia.');
		  }
		}
window.addEventListener('resize', verificarOrientacion);
		// Verificar la orientación cuando se carga la página y en cada cambio de tamaño de ventana
		// verificarOrientacion();
		