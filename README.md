# Pasos Babel EC6 => EC5

`mkdir nombre-proyecto` // Se crea la carpeta  
`cd nombre-proyecto` // Entramos dentro de la carpeta creada  
`npm init -y` // Creamos el package.json  
  
// Instalamos las depencias necesarias para trabajar con babel  
`npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill`  
`npm i core-js`  
  
// Creamos el directorio src (los archivos js que trabajemos deben ir dentro de esta carpeta)  
`mkdir src`  
`cd src`  
  
  
// Creamos el archivo de configuraciones de babel: babel.config.json  
`{`  
`	"presets": [`  
`		[`  
`			"@babel/env",`  
`			{`  
`				"targets": {`  
`					"edge": "17",`  
`					"firefox": "60",`  
`					"chrome": "67",`  
`					"safari": "11.1"`  
`					},`  
`				"useBuiltIns": "usage",`  
`				"corejs": "3.6.4",`  
`				"forceAllTransforms": true`  
`			}`  
`		]`  
`	]`  
`}`  
  
// Agregamos el siguiente script a nuestro package.json  
`"scripts": {  
    "babel": "npx babel src/ -d dist/ --config-file ./babel.config.json"  
},`  