
namespace App {
    class Numbers {
        public FirstNumber: number;
        public SecondNumber: number;
    }

    class CalculatorController {
        numbers: Numbers;
        result: number;
        
        public add(): void {
            this.result = this.numbers.FirstNumber + this.numbers.SecondNumber;
            console.log(this.result);
        }
        public sub(): void {
            this.result = (this.numbers.FirstNumber - this.numbers.SecondNumber);
            console.log(this.result);
        }
        public multiply(): void {
            this.result = (this.numbers.FirstNumber * this.numbers.SecondNumber);
            console.log(this.result);
        }
        public devide(): void {
            this.result = (this.numbers.FirstNumber / this.numbers.SecondNumber);//.toString();
            console.log(this.result);
        }
    }

    let app = angular.module("app", []);
    angular.module("app").controller("CalculatorController", CalculatorController);
}
