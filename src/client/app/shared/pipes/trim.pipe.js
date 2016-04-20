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
    var TrimPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TrimPipe = (function () {
                function TrimPipe() {
                }
                TrimPipe.prototype.transform = function (value) {
                    if (!value) {
                        return '';
                    }
                    return value.trim();
                };
                TrimPipe = __decorate([
                    core_1.Pipe({ name: 'trim' }), 
                    __metadata('design:paramtypes', [])
                ], TrimPipe);
                return TrimPipe;
            }());
            exports_1("TrimPipe", TrimPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy90cmltLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFPQSxDQUFDO2dCQU5DLDRCQUFTLEdBQVQsVUFBVSxLQUFVO29CQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1gsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBUEg7b0JBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzs0QkFBQTtnQkFRckIsZUFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsK0JBT0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcGlwZXMvdHJpbS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBQaXBlKHtuYW1lOiAndHJpbSd9KVxyXG5leHBvcnQgY2xhc3MgVHJpbVBpcGUge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
