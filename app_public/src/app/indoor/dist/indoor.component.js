"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var game_service_service_1 = require("../game-service.service");
var IndoorComponent = /** @class */ (function () {
    function IndoorComponent(gameDataService) {
        this.gameDataService = gameDataService;
    }
    IndoorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameDataService
            .getGames()
            .then(function (games) {
            _this.games = games.map(function (game) {
                if (game.type == "indoors") {
                    console.log("check:" + game.type);
                    game.type.fontcolor("orange");
                }
                else {
                    console.log("check:" + game.type);
                }
                //  coding logic for filtering gamees of type = indoors
                if (game.type == "indoors") {
                    game.type = game.name;
                    game.type = game.type.toUpperCase();
                }
                else {
                    game.type = ""; // preventing display of non-indoor games
                }
                return game;
            });
        });
    };
    IndoorComponent = __decorate([
        core_1.Component({
            selector: 'app-indoor',
            templateUrl: './indoor.component.html',
            styleUrls: ['./indoor.component.css'],
            providers: [game_service_service_1.GameDataService]
        })
    ], IndoorComponent);
    return IndoorComponent;
}());
exports.IndoorComponent = IndoorComponent;

//# sourceMappingURL=indoor.component.js.map
