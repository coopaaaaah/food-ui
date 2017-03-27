"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var food_service_1 = require("../../../service/foods.service");
var MainContentComponent = (function () {
    function MainContentComponent(foodService) {
        this.errorEmitter = new core_1.EventEmitter();
        this.foods = [];
        this.foodService = foodService;
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getFoodByDescription().subscribe(function (data) {
            _this.foods = data;
        }, function (error) {
            _this.errorEmitter.emit('There was an error contacting the server.');
        });
    };
    __decorate([
        core_1.Output(),
        __metadata('design:type', core_1.EventEmitter)
    ], MainContentComponent.prototype, "errorEmitter", void 0);
    MainContentComponent = __decorate([
        core_1.Component({
            selector: 'main-content',
            templateUrl: require('./main-content.html'),
            providers: [food_service_1.FoodService]
        }),
        __metadata('design:paramtypes', [food_service_1.FoodService])
    ], MainContentComponent);
    return MainContentComponent;
}());
exports.MainContentComponent = MainContentComponent;
//# sourceMappingURL=main-content.js.map
