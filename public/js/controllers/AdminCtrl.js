
angular.module('AdminCtrl', []).controller('AdminController', function(storeFactory,
                                                                       saleFactory) {
    this.store = {};
    this.saveStore = function (store) {
        this.store = angular.copy(store);
        console.log(this.store.name);
        var store = {'name': this.store.name,'manager': this.store.manager};
        console.log(store);
        storeFactory.save(store);
    };

    this.sale = {};
    this.saveSale = function (sale) {
        this.sale = angular.copy(sale);
        var sale = {'amount': this.sale.amount,'date': this.sale.date, 'store': this.sale.store};
        console.log(sale);
        saleFactory.save(sale);
    };

});