// import foo from './foo.js';
// export default function () {
//   console.log(foo);
// }
import './style.css'
module.exports=function(){
    import('./foo.js').then(({default:foo})=>console.log(foo))
}
//Which model to split--code splitting
//Plugins=Rollup only convert .js file into bundle.js so for css file and other files we need to use plugins
