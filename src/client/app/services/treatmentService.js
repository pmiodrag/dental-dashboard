System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var Treatment, TreatmentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            Treatment = (function () {
                function Treatment(id, patientId, date, therapy, diagnose, price) {
                    this.id = id;
                    this.patientId = patientId;
                    this.date = date;
                    this.therapy = therapy;
                    this.diagnose = diagnose;
                    this.price = price;
                }
                return Treatment;
            }());
            exports_1("Treatment", Treatment);
            TreatmentService = (function () {
                function TreatmentService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                TreatmentService.prototype.getTreatments = function () {
                    return this.http.get(this.baseUrl + '/treatments')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TreatmentService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TreatmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TreatmentService);
                return TreatmentService;
            }());
            exports_1("TreatmentService", TreatmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFDSSxtQkFBb0IsRUFBVSxFQUFTLFNBQWtCLEVBQVMsSUFBWSxFQUFTLE9BQWUsRUFDM0YsUUFBZ0IsRUFBUyxLQUFhO29CQUQ3QixPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUMzRixhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQ2pELENBQUM7Z0JBQ0wsZ0JBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELGlDQUlDLENBQUE7WUFJRDtnQkFFSSwwQkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUQ5QixZQUFPLEdBQVcsR0FBRyxDQUFDO2dCQUNZLENBQUM7Z0JBR25DLHdDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO3lCQUNuQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELHNDQUFXLEdBQVgsVUFBWSxLQUFVO29CQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFmTDtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFpQmIsdUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELCtDQWdCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG4vL0dyYWIgZXZlcnl0aGluZyB3aXRoIGltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnOyBcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlYXRtZW50IHtcclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgcGF0aWVudElkIDogbnVtYmVyOyBcclxuICAgIGRhdGU6IHN0cmluZztcclxuICAgIHRoZXJhcHk6IHN0cmluZztcclxuICAgIGRpYWdub3NlOiBzdHJpbmc7XHJcbiAgICBwcmljZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50IGltcGxlbWVudHMgSVRyZWF0bWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBwYXRpZW50SWQgOiBudW1iZXIsIHB1YmxpYyBkYXRlOiBzdHJpbmcsIHB1YmxpYyB0aGVyYXB5OiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyBkaWFnbm9zZTogc3RyaW5nLCBwdWJsaWMgcHJpY2U6IHN0cmluZykge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50U2VydmljZSB7XHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnLyc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGdldFRyZWF0bWVudHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnL3RyZWF0bWVudHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
