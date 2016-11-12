/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","./SetBase","../Exceptions/ArgumentNullException","../../extends"],e)}(function(e,t){"use strict";function r(e,t){if(void 0===t&&(t=1),e&&t)for(var o=0,n=Object.keys(e);o<n.length;o++){var i=n[o],s=e[i];delete e[i],r(s,t-1)}}var o=e("../Types"),n=e("./SetBase"),i=e("../Exceptions/ArgumentNullException"),s=e("../../extends"),u=s["default"],p=void 0,a=function(e){function t(t,r){if(e.call(this),o.Type.isFunction(t))this._keyGenerator=t;else{if(!r)throw new i.ArgumentNullException("keyGenerator");this._keyGenerator=r,this._importEntries(t)}}return u(t,e),t.prototype.newUsing=function(e){return new t(e,this._keyGenerator)},t.prototype._addInternal=function(e){var t=this,r=typeof e,o=t._registry,n=o&&o[r],i=t._keyGenerator(e);if(!n||n[i]===p){o||(t._registry=o={}),n||(o[r]=n={});var s={value:e};return t._getSet().addNode(s),n[i]=s,!0}return!1},t.prototype._clearInternal=function(){return r(this._registry,2),e.prototype._clearInternal.call(this)},t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._registry=null,this._keyGenerator=p},t.prototype._getNode=function(e){var t=this._registry,r=t&&t[typeof e];return r&&r[this._keyGenerator(e)]},t.prototype._removeInternal=function(e,t){if(void 0===t&&(t=1/0),0===t)return 0;var r=this._registry,o=r&&r[typeof e],n=o&&o[e];if(n){delete o[e];var i=this._set;if(i&&i.removeNode(n))return 1}return 0},t}(n.SetBase);t.HashSet=a,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a});
//# sourceMappingURL=HashSet.js.map