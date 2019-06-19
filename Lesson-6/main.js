//Задание 2
function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}
var barsik = new Cat('Барсик');

console.log(barsik.feed());

//Задание 3

function Cat(name) {
    this.name = name;

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.DailyNorm = function (amount) {

        if (!arguments.length) return foodAmount;

        if (amount < 50) {
            alert('Насыпьте больше корма, котик голодный!')
        }

        if (amount > 500) {
            alert('Слишком много, котик будет перекормлен')
        }

        foodAmount = amount;
    };


    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.DailyNorm(25));

console.log(barsik.DailyNorm(600));

console.log(barsik.DailyNorm(300));

console.log(barsik.feed());

console.log(barsik.DailyNorm());












