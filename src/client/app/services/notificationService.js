System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService() {
                    this.formActionChange$ = new core_1.EventEmitter();
                }
                NotificationService.prototype.emitFormActionChangeEvent = function (patient) {
                    console.log("emitFormActionChangeEvent", patient);
                    this.formActionChange$.emit(patient);
                };
                NotificationService.prototype.getFormActionChangeEmitter = function () {
                    return this.formActionChange$;
                };
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFQTtnQkFFRTtvQkFEQSxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ2hCLHVEQUF5QixHQUF6QixVQUEwQixPQUFPO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUNELHdEQUEwQixHQUExQjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoQyxDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxxREFVQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gIGZvcm1BY3Rpb25DaGFuZ2UkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChwYXRpZW50KSB7XHJcbiAgICAgY29uc29sZS5sb2coXCJlbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50XCIsIHBhdGllbnQpO1xyXG4gICAgIHRoaXMuZm9ybUFjdGlvbkNoYW5nZSQuZW1pdChwYXRpZW50KTtcclxuICB9XHJcbiAgZ2V0Rm9ybUFjdGlvbkNoYW5nZUVtaXR0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtQWN0aW9uQ2hhbmdlJDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
