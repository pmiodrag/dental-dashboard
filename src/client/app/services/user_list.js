System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserListService;
    return {
        setters:[],
        execute: function() {
            UserListService = (function () {
                function UserListService() {
                    this.users = [{
                            id: 1,
                            name: 'Joe Bloggs',
                            role: 'Super Admin',
                            account: 'AZ23045'
                        }, {
                            id: 2,
                            name: 'Timothy Hernandez',
                            role: 'Admin',
                            account: 'AU24783'
                        }, {
                            id: 3,
                            name: 'Joe Bickham',
                            role: 'User',
                            account: 'AM23781'
                        }];
                }
                UserListService.prototype.add = function (value) {
                    this.users.push(value);
                };
                UserListService.prototype.all = function () {
                    return this.users;
                };
                return UserListService;
            }());
            exports_1("UserListService", UserListService);
        }
    }
});
//# sourceMappingURL=user_list.js.map