System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var RdWidgetBody;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RdWidgetBody = (function () {
                function RdWidgetBody() {
                    this.loading = false;
                    this.classes = '';
                }
                RdWidgetBody = __decorate([
                    core_1.Component({
                        selector: 'rd-widget-body',
                        properties: ['loading', 'classes']
                    }),
                    core_1.View({
                        templateUrl: 'app/components/rd-widget-body/rd-widget-body.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RdWidgetBody);
                return RdWidgetBody;
            }());
            exports_1("RdWidgetBody", RdWidgetBody);
        }
    }
});
//# sourceMappingURL=rd-widget-body.js.map