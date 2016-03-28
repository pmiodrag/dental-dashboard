System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SortByDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SortByDirective = (function () {
                function SortByDirective(el) {
                    var _this = this;
                    this.sorted = new core_1.EventEmitter();
                    this.sortProperty = el.nativeElement.getAttribute('sort-by');
                    el.nativeElement.addEventListener('click', function (event) { return _this.elementClicked(event); });
                    this.sorted = new core_1.EventEmitter();
                }
                SortByDirective.prototype.elementClicked = function (event) {
                    event.preventDefault();
                    this.sorted.next(this.sortProperty); //Raise clicked event
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SortByDirective.prototype, "sorted", void 0);
                SortByDirective = __decorate([
                    core_1.Directive({
                        selector: '[sort-by]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SortByDirective);
                return SortByDirective;
            }());
            exports_1("SortByDirective", SortByDirective);
        }
    }
});
//# sourceMappingURL=sortby.directive.js.map