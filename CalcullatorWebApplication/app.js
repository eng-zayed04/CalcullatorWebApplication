var App;
(function (App) {
    var Numbers = /** @class */ (function () {
        function Numbers() {
        }
        return Numbers;
    }());
    var CalculatorController = /** @class */ (function () {
        function CalculatorController() {
        }
        CalculatorController.prototype.add = function () {
            this.result = this.numbers.FirstNumber + this.numbers.SecondNumber;
            console.log(this.result);
        };
        CalculatorController.prototype.sub = function () {
            this.result = (this.numbers.FirstNumber - this.numbers.SecondNumber);
            console.log(this.result);
        };
        CalculatorController.prototype.multiply = function () {
            this.result = (this.numbers.FirstNumber * this.numbers.SecondNumber);
            console.log(this.result);
        };
        CalculatorController.prototype.devide = function () {
            this.result = (this.numbers.FirstNumber / this.numbers.SecondNumber); //.toString();
            console.log(this.result);
        };
        return CalculatorController;
    }());
    var app = angular.module("app", []);
    angular.module("app").controller("CalculatorController", CalculatorController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map