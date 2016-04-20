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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXJfbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFTLENBQUM7NEJBQ2IsRUFBRSxFQUFFLENBQUM7NEJBQ0wsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLElBQUksRUFBRSxhQUFhOzRCQUNuQixPQUFPLEVBQUUsU0FBUzt5QkFDbkIsRUFBRTs0QkFDRCxFQUFFLEVBQUUsQ0FBQzs0QkFDTCxJQUFJLEVBQUUsbUJBQW1COzRCQUN6QixJQUFJLEVBQUUsT0FBTzs0QkFDYixPQUFPLEVBQUUsU0FBUzt5QkFDbkIsRUFBRTs0QkFDRCxFQUFFLEVBQUUsQ0FBQzs0QkFDTCxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsSUFBSSxFQUFFLE1BQU07NEJBQ1osT0FBTyxFQUFFLFNBQVM7eUJBQ25CLENBQUMsQ0FBQztnQkFTTCxDQUFDO2dCQVBDLDZCQUFHLEdBQUgsVUFBSSxLQUFTO29CQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELDZCQUFHLEdBQUg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELDZDQXlCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3VzZXJfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTGlzdFNlcnZpY2Uge1xyXG4gIHVzZXJzOmFueVtdID0gW3tcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0pvZSBCbG9nZ3MnLFxyXG4gICAgcm9sZTogJ1N1cGVyIEFkbWluJyxcclxuICAgIGFjY291bnQ6ICdBWjIzMDQ1J1xyXG4gIH0sIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogJ1RpbW90aHkgSGVybmFuZGV6JyxcclxuICAgIHJvbGU6ICdBZG1pbicsXHJcbiAgICBhY2NvdW50OiAnQVUyNDc4MydcclxuICB9LCB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdKb2UgQmlja2hhbScsXHJcbiAgICByb2xlOiAnVXNlcicsXHJcbiAgICBhY2NvdW50OiAnQU0yMzc4MSdcclxuICB9XTtcclxuXHJcbiAgYWRkKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLnVzZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWxsKCk6YW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcnM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
