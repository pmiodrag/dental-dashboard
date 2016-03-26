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
//# sourceMappingURL=server_list.js.map