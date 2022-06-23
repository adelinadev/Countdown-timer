let deadline = '2022-12-25';
let id = document.querySelector('.id');


const timer = (x, y) => {

    const getTimeRemaining = (endtime) => {

        const addZero = () => {
            if (num <= 9){
                return '0' + num;
            } else {
                return num;
            }
        };

        const t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000 * 60 * 60)) % 24),
        days = Math.floor((t/(1000 * 60 * 60 * 24)));


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }; 
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector('.container'),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0){
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
    
                clearInterval(timeInterval)
            }
        }

    };

    setClock( id, deadline);
};

timer(id, deadline);

// Функция принимает два аргумента. Первый говорит нам в какую область(в какой элемент)
// мы этот таймер будем рендерить(id) а также нам понадобится дедлайн (deadline) до какого момента 
// у нас будет идти таймер. Разбиваем наш код на отдельные функции.
// Время в JS измеряется милисекундами.
// Объект Date метод parse().Этот метод принимает в себя стороку с датой, записанной в определённом формате
//  Date.parse(new Date() - количество времени сейчас


