'use strict';

// import foo from './foo.js';
module.exports=function(){
    Promise.resolve().then(function () { return foo$1; }).then(({default:foo})=>console.log(foo));
};
//Which model to split--code splitting
//Plugins=Rollup only convert .js file into bundle.js so for css file and other files we need to use plugins

var foo = 'hello Amrutha!';

var foo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': foo
});
