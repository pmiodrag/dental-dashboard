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
    var Patient, PatientService;
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
            Patient = (function () {
                //    static create(data){
                //        return new Patient(data);
                //    }
                //    
                function Patient(id, firstname, lastname, middlename, gender, address, place, birthdate, email, phone, mobilephone) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.middlename = middlename;
                    this.gender = gender;
                    this.address = address;
                    this.place = place;
                    this.birthdate = birthdate;
                    this.email = email;
                    this.phone = phone;
                    this.mobilephone = mobilephone;
                }
                return Patient;
            }());
            exports_1("Patient", Patient);
            PatientService = (function () {
                function PatientService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                    this.formAction$ = new core_1.EventEmitter();
                    //        this.formAction$ = new EventEmitter();
                }
                PatientService.prototype.getFormActionEmitter = function () {
                    return this.formAction$;
                };
                PatientService.prototype.action = function (agreed) {
                    console.log("action in service", agreed);
                    this.formAction$.emit(agreed);
                    this.formAction$.next(agreed);
                };
                PatientService.prototype.getPacient = function (id) {
                    return this.http.get(this.baseUrl + 'patient/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PatientService.prototype.getPatients = function () {
                    return this.http.get(this.baseUrl + 'patient')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PatientService.prototype.getPatientTreatments = function (patientId, firstname, lastname) {
                    return this.http.get(this.baseUrl + 'patient/' + patientId + '/' + firstname + '/' + lastname + '/treatments')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PatientService.prototype.addPatient = function (patient) {
                    var body = JSON.stringify(patient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.baseUrl + 'patient', body, options)
                        .catch(this.handleError);
                };
                PatientService.prototype.updatePatient = function (patient) {
                    var body = JSON.stringify(patient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'patient' + patient.id), body, options)
                        .catch(this.handleError);
                };
                PatientService.prototype.deletePatient = function (id) {
                    return this.http.delete(this.baseUrl + 'patient/' + id)
                        .catch(this.handleError);
                };
                PatientService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                PatientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PatientService);
                return PatientService;
            }());
            exports_1("PatientService", PatientService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BhdGllbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQ0EsMEJBQTBCO2dCQUMxQixtQ0FBbUM7Z0JBQ25DLE9BQU87Z0JBQ1AsTUFBTTtnQkFDRixpQkFBb0IsRUFBVSxFQUFTLFNBQWlCLEVBQVMsUUFBZ0IsRUFBUyxVQUFrQixFQUN6RixNQUFjLEVBQVMsT0FBZSxFQUFTLEtBQWEsRUFBVSxTQUFpQixFQUFTLEtBQWMsRUFDOUcsS0FBYSxFQUFVLFdBQW1CO29CQUZ6QyxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUN6RixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQzlHLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQzdELENBQUM7Z0JBQ0wsY0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsNkJBU0MsQ0FBQTtZQUdEO2dCQUlJLHdCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBSDlCLFlBQU8sR0FBVyxHQUFHLENBQUM7b0JBQ3RCLGdCQUFXLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUc1RCxnREFBZ0Q7Z0JBQzVDLENBQUM7Z0JBRUQsNkNBQW9CLEdBQXBCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELCtCQUFNLEdBQU4sVUFBTyxNQUFjO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLG1C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LEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQzt5QkFFdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxvQ0FBVyxHQUFYLFVBQVksS0FBVTtvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBakVMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW1FYixxQkFBQztZQUFELENBbEVBLEFBa0VDLElBQUE7WUFsRUQsMkNBa0VDLENBQUEiLCJmaWxlIjoic2VydmljZXMvcGF0aWVudFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbi8vR3JhYiBldmVyeXRoaW5nIHdpdGggaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7IFxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhdGllbnQge1xyXG4gICAgaWQ6IG51bWJlcjsgXHJcbiAgICBmaXJzdG5hbWU6IHN0cmluZztcclxuICAgIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBtaWRkbGVuYW1lOiBzdHJpbmcsXHJcbiAgICBnZW5kZXI6IHN0cmluZyxcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIHBsYWNlOiBzdHJpbmc7ICAgIFxyXG4gICAgYmlydGhkYXRlOiBzdHJpbmc7XHJcbiAgICBlbWFpbCA6IHN0cmluZztcclxuICAgIHBob25lOiBzdHJpbmc7XHJcbiAgICBtb2JpbGVwaG9uZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudCBpbXBsZW1lbnRzIElQYXRpZW50IHtcclxuLy8gICAgc3RhdGljIGNyZWF0ZShkYXRhKXtcclxuLy8gICAgICAgIHJldHVybiBuZXcgUGF0aWVudChkYXRhKTtcclxuLy8gICAgfVxyXG4vLyAgICBcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIGZpcnN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZywgcHVibGljIG1pZGRsZW5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBnZW5kZXI6IHN0cmluZywgcHVibGljIGFkZHJlc3M6IHN0cmluZywgcHVibGljIHBsYWNlOiBzdHJpbmcsICBwdWJsaWMgYmlydGhkYXRlOiBzdHJpbmcsIHB1YmxpYyBlbWFpbCA6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBwaG9uZTogc3RyaW5nLCAgcHVibGljIG1vYmlsZXBob25lOiBzdHJpbmcpIHtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGF0aWVudFNlcnZpY2Uge1xyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJy8nO1xyXG4gICAgZm9ybUFjdGlvbiQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgXHJcbi8vICAgICAgICB0aGlzLmZvcm1BY3Rpb24kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGdldEZvcm1BY3Rpb25FbWl0dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1BY3Rpb24kO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKGFncmVlZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24gaW4gc2VydmljZVwiLCBhZ3JlZWQpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbiQuZW1pdChhZ3JlZWQpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbiQubmV4dChhZ3JlZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQYWNpZW50KGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudC8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIGdldFBhdGllbnRzKCkgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGF0aWVudFRyZWF0bWVudHMocGF0aWVudElkOm51bWJlciwgZmlyc3RuYW1lOiBzdHJpbmcsIGxhc3RuYW1lOiBzdHJpbmcpeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQvJysgcGF0aWVudElkICsgJy8nKyBmaXJzdG5hbWUgKyAnLycrIGxhc3RuYW1lICsgICcvdHJlYXRtZW50cycpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGFkZFBhdGllbnQgKHBhdGllbnQ6IElQYXRpZW50KSA6IE9ic2VydmFibGU8SVBhdGllbnQ+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHBhdGllbnQgKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdwYXRpZW50JywgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAvLyAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlUGF0aWVudCAocGF0aWVudDogSVBhdGllbnQpIDogT2JzZXJ2YWJsZTxJUGF0aWVudD4gIHtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggcGF0aWVudCApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQnICsgcGF0aWVudC5pZCksIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH0gICBcclxuICAgXHJcbiAgICBcclxuICAgIGRlbGV0ZVBhdGllbnQoaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmJhc2VVcmwgKyAncGF0aWVudC8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
