import css from 'rollup-plugin-css-only'
export default {
    input: 'src/main.js',
    output: {
      file: 'build/bundle.js',
      format: 'cjs',// We cange this format like es or iife or cjs)commonb js)
      //cjs=common js module
      //es=ecma script
      //iife=immediately invoke function expression
      inlineDynamicImports:true
    },
    plugins:[
        css({output:'bundle.css'})
    ]
  };
  
  
  //--config will store all the inpit and output files and plugins if any
 //--watch or -w is for we need not evry time use npm start it will directly update the bundle.js file with any changes in js files