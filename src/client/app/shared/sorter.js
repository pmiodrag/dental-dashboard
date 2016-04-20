System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sorter;
    return {
        setters:[],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                    this.property = null;
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (collection, prop) {
                    var _this = this;
                    this.property = prop;
                    this.direction = (this.property === prop) ? this.direction * -1 : 1;
                    collection.sort(function (a, b) {
                        var aVal;
                        var bVal;
                        //Handle resolving complex properties such as 'state.name' for prop value
                        if (prop && prop.indexOf('.')) {
                            aVal = _this.resolveProperty(prop, a);
                            bVal = _this.resolveProperty(prop, b);
                        }
                        else {
                            aVal = a[prop];
                            bVal = b[prop];
                        }
                        //Fix issues that spaces before/after string value can cause such as ' San Francisco'
                        if (_this.isString(aVal))
                            aVal = aVal.trim();
                        if (_this.isString(bVal))
                            bVal = bVal.trim();
                        if (aVal === bVal) {
                            return 0;
                        }
                        else if (aVal > bVal) {
                            return _this.direction * -1;
                        }
                        else {
                            return _this.direction * 1;
                        }
                    });
                };
                Sorter.prototype.isString = function (val) {
                    return (val && (typeof val === 'string' || val instanceof String));
                };
                Sorter.prototype.resolveProperty = function (path, obj) {
                    return path.split('.').reduce(function (prev, curr) {
                        return (prev ? prev[curr] : undefined);
                    }, obj || self);
                };
                return Sorter;
            }());
            exports_1("Sorter", Sorter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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YXNzIFNvcnRlciB7XHJcblxyXG5cdHByb3BlcnR5OiBzdHJpbmcgPSBudWxsO1xyXG5cdGRpcmVjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBzb3J0KGNvbGxlY3Rpb246IGFueVtdLCBwcm9wOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICh0aGlzLnByb3BlcnR5ID09PSBwcm9wKSA/IHRoaXMuZGlyZWN0aW9uICogLTEgOiAxO1xyXG5cclxuICAgICAgICBjb2xsZWN0aW9uLnNvcnQoKGE6IGFueSxiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFWYWw6IGFueTtcclxuICAgICAgICAgICAgbGV0IGJWYWw6IGFueTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHJlc29sdmluZyBjb21wbGV4IHByb3BlcnRpZXMgc3VjaCBhcyAnc3RhdGUubmFtZScgZm9yIHByb3AgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuICAgICAgICAgICAgICBhVmFsID0gdGhpcy5yZXNvbHZlUHJvcGVydHkocHJvcCwgYSk7XHJcbiAgICAgICAgICAgICAgYlZhbCA9IHRoaXMucmVzb2x2ZVByb3BlcnR5KHByb3AsIGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGFWYWwgPSBhW3Byb3BdO1xyXG4gICAgICAgICAgICAgIGJWYWwgPSBiW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0ZpeCBpc3N1ZXMgdGhhdCBzcGFjZXMgYmVmb3JlL2FmdGVyIHN0cmluZyB2YWx1ZSBjYW4gY2F1c2Ugc3VjaCBhcyAnIFNhbiBGcmFuY2lzY28nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKGFWYWwpKSBhVmFsID0gYVZhbC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKGJWYWwpKSBiVmFsID0gYlZhbC50cmltKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYVZhbCA9PT0gYlZhbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhVmFsID4gYlZhbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gKiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiAqIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNTdHJpbmcodmFsOiBhbnkpIDogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzb2x2ZVByb3BlcnR5KHBhdGg6IHN0cmluZywgb2JqOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xyXG4gICAgICAgICAgcmV0dXJuIChwcmV2ID8gcHJldltjdXJyXSA6IHVuZGVmaW5lZClcclxuICAgICAgfSwgb2JqIHx8IHNlbGYpXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
