System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServerListService;
    return {
        setters:[],
        execute: function() {
            ServerListService = (function () {
                function ServerListService() {
                    this.servers = [{
                            name: 'RDVMPC001',
                            ip: '238.103.133.37',
                            'tooltip': '',
                            'tooltipcls': 'text-success',
                            'icon': 'fa-check'
                        },
                        { name: 'RDVMPC002', ip: '68.66.63.170', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'RDVMPC003', ip: '76.117.212.33', 'tooltip': '', 'tooltipcls': 'text-danger', 'icon': 'fa-warning' },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        {
                            name: 'RDESX003',
                            ip: '209.25.191.61',
                            'tooltip': 'Could not connect!',
                            'tooltipcls': 'text-warning',
                            'icon': 'fa-flash'
                        },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
                        { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' }
                    ];
                }
                ServerListService.prototype.add = function (value) {
                    this.servers.push(value);
                };
                ServerListService.prototype.all = function () {
                    return this.servers;
                };
                return ServerListService;
            }());
            exports_1("ServerListService", ServerListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZlcl9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFBQTtvQkFDRSxZQUFPLEdBQVMsQ0FBQzs0QkFDZixJQUFJLEVBQUUsV0FBVzs0QkFDakIsRUFBRSxFQUFFLGdCQUFnQjs0QkFDcEIsU0FBUyxFQUFFLEVBQUU7NEJBQ2IsWUFBWSxFQUFFLGNBQWM7NEJBQzVCLE1BQU0sRUFBRSxVQUFVO3lCQUNuQjt3QkFDQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQzt3QkFDeEcsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7d0JBQ3hHLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO3dCQUMxRyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQzt3QkFDeEc7NEJBQ0UsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLEVBQUUsRUFBRSxlQUFlOzRCQUNuQixTQUFTLEVBQUUsb0JBQW9COzRCQUMvQixZQUFZLEVBQUUsY0FBYzs0QkFDNUIsTUFBTSxFQUFFLFVBQVU7eUJBQ25CO3dCQUNELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO3dCQUN4RyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQzt3QkFDeEcsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7d0JBQ3hHLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO3FCQUN6RyxDQUFDO2dCQVNKLENBQUM7Z0JBUEMsK0JBQUcsR0FBSCxVQUFJLEtBQVM7b0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsK0JBQUcsR0FBSDtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdEIsQ0FBQztnQkFDSCx3QkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsaURBZ0NDLENBQUEiLCJmaWxlIjoic2VydmljZXMvc2VydmVyX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VydmVyTGlzdFNlcnZpY2Uge1xyXG4gIHNlcnZlcnM6YW55W10gPSBbe1xyXG4gICAgbmFtZTogJ1JEVk1QQzAwMScsXHJcbiAgICBpcDogJzIzOC4xMDMuMTMzLjM3JyxcclxuICAgICd0b29sdGlwJzogJycsXHJcbiAgICAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLFxyXG4gICAgJ2ljb24nOiAnZmEtY2hlY2snXHJcbiAgfSxcclxuICAgIHtuYW1lOiAnUkRWTVBDMDAyJywgaXA6ICc2OC42Ni42My4xNzAnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxyXG4gICAge25hbWU6ICdSREVTWDAwMycsIGlwOiAnMjA5LjI1LjE5MS42MScsICd0b29sdGlwJzogJycsICd0b29sdGlwY2xzJzogJ3RleHQtc3VjY2VzcycsICdpY29uJzogJ2ZhLWNoZWNrJ30sXHJcbiAgICB7bmFtZTogJ1JEVk1QQzAwMycsIGlwOiAnNzYuMTE3LjIxMi4zMycsICd0b29sdGlwJzogJycsICd0b29sdGlwY2xzJzogJ3RleHQtZGFuZ2VyJywgJ2ljb24nOiAnZmEtd2FybmluZyd9LFxyXG4gICAge25hbWU6ICdSREVTWDAwMycsIGlwOiAnMjA5LjI1LjE5MS42MScsICd0b29sdGlwJzogJycsICd0b29sdGlwY2xzJzogJ3RleHQtc3VjY2VzcycsICdpY29uJzogJ2ZhLWNoZWNrJ30sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdSREVTWDAwMycsXHJcbiAgICAgIGlwOiAnMjA5LjI1LjE5MS42MScsXHJcbiAgICAgICd0b29sdGlwJzogJ0NvdWxkIG5vdCBjb25uZWN0IScsXHJcbiAgICAgICd0b29sdGlwY2xzJzogJ3RleHQtd2FybmluZycsXHJcbiAgICAgICdpY29uJzogJ2ZhLWZsYXNoJ1xyXG4gICAgfSxcclxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxyXG4gICAge25hbWU6ICdSREVTWDAwMycsIGlwOiAnMjA5LjI1LjE5MS42MScsICd0b29sdGlwJzogJycsICd0b29sdGlwY2xzJzogJ3RleHQtc3VjY2VzcycsICdpY29uJzogJ2ZhLWNoZWNrJ30sXHJcbiAgICB7bmFtZTogJ1JERVNYMDAzJywgaXA6ICcyMDkuMjUuMTkxLjYxJywgJ3Rvb2x0aXAnOiAnJywgJ3Rvb2x0aXBjbHMnOiAndGV4dC1zdWNjZXNzJywgJ2ljb24nOiAnZmEtY2hlY2snfSxcclxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9XHJcbiAgXTtcclxuXHJcbiAgYWRkKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLnNlcnZlcnMucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBhbGwoKSA6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZlcnM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
