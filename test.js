var hellowWorld = "Hello World";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
function getAdminUser(n, i) {
    var name = n;
    var id = i;
    var nathan = new UserAccount(name, id);
    return nathan;
}
var user = new UserAccount("Murphy", 0);
console.log(getAdminUser(7, "test"));
