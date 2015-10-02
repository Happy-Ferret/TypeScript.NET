/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require", "exports", '../../Compare', '../../Types'], function (require, exports, Values, Types) {
    var Compare;
    (function (Compare) {
        function validateSize(a, b) {
            if (a && b && a === b || !a && !b)
                return true;
            if (!a || !b)
                return false;
            var len = a.length | 0;
            if (len !== (b.length | 0))
                return false;
            if (len === 0)
                return true;
            return len;
        }
        function areAllEqual(arrays, strict, equalityComparer) {
            if (equalityComparer === void 0) { equalityComparer = Values.areEqual; }
            if (!arrays)
                throw new Error("ArgumentNullException: 'arrays' cannot be null.");
            if (arrays.length < 2)
                throw new Error("Cannot compare a set of arrays less than 2.");
            var first = arrays[0];
            for (var i = 0 | 0, l = arrays.length | 0; i < l; ++i) {
                if (!areEqual(first, arrays[i], strict, equalityComparer))
                    return false;
            }
            return true;
        }
        Compare.areAllEqual = areAllEqual;
        function areEqual(a, b, strict, equalityComparer) {
            if (equalityComparer === void 0) { equalityComparer = Values.areEqual; }
            var len = validateSize(a, b);
            if (Types.isBoolean(len))
                return len;
            for (var i = 0 | 0; i < len; ++i) {
                if (!equalityComparer(a[i], b[i], strict))
                    return false;
            }
            return true;
        }
        Compare.areEqual = areEqual;
        function copyAndSort(a, comparer) {
            if (!a)
                return null;
            if (a instanceof Array)
                return a.slice();
            var len = a.length, b;
            if (len > 65536)
                b = new Array(len);
            else {
                b = [];
                b.length = len;
            }
            for (var i = 0; i < len; i++)
                b[i] = a[i];
            b.sort(comparer);
            return b;
        }
        function areEquivalent(a, b, comparer) {
            if (comparer === void 0) { comparer = Values.compare; }
            var len = validateSize(a, b);
            if (Types.isBoolean(len))
                return len;
            a = copyAndSort(a, comparer);
            b = copyAndSort(b, comparer);
            for (var i = 0 | 0; i < len; ++i) {
                if (comparer(a[i], b[i]) !== 0)
                    return false;
            }
            return true;
        }
        Compare.areEquivalent = areEquivalent;
    })(Compare || (Compare = {}));
    return Compare;
});
//# sourceMappingURL=Compare.js.map