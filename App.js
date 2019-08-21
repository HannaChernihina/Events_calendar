// const event = [
//     {
//         name: 'event1',
//         startDate: new Date(),
//         endDate: new Date(),
//         id: 0,
//     },
//     {
//         name: 'event2',
//         startDate: new Date(),
//         endDate: new Date(),
//         id: 1,
//     }
// ];


window.onload = function () {

    // if (localStorage.getItem('event') != undefined) {
    //     listEvents = JSON.parse(localStorage.getItem('event'));
    //     outputEvent();  // вызов отрисовки таблицы чтоб сразу отобразилось

    const listEvents = [];
    const events = {};

    const selectButton = document.getElementById('add');

    // ссылка на улку в разметке
    const ulListEvent = document.getElementById('listEventItem');

// ссылка на обертку инпутов
    const wprapItemInput = document.getElementById('wprapItemInput');
    // ссылка на инпут по индификатору
    const inputName = document.getElementById('inName');
    const inputDate = document.getElementById('inDate');
    const inputTimeStart = document.getElementById('inTimeStart');
    const inputTimeEnd = document.getElementById('inTimeEnd');


// обработчик по клику - получаем значение в инпутах , записываем его в обьект -- записываем в эррей обьект.
    selectButton.addEventListener('click', () => {
        const evName = document.getElementById('inName').value;
        const evDate = document.getElementById('inDate').value;
        const evTimeStart = document.getElementById('inTimeStart').value;
        const evTimeEnd = document.getElementById('inTimeEnd').value;



        events.eventName = evName;
        events.eventDate = evDate;
        events.eventTimeStart = evTimeStart;
        events.eventTimeEnd = evTimeEnd;

        const i = listEvents.length;
        listEvents[i] = events;

        // очищаем инпут после записи в обьект
        inputName.value = '';
        inputDate.value = '';
        inputTimeStart.value = '';
        inputTimeEnd.value = '';

        // метод записывает в сторедж значение ("ключ", значение ( в локалсоредж хратится только в строке json))
        // localStorage.setItem('events', JSON.stringify(listEvents));

        console.log(listEvents);
        upgradeViewData();
    });


// обработчик по нажатию клавиши enter + делегирование события для инпутов  ( обработчик вещаем на обертку) чтоб применилось ко всем
// (получаем значение в инпутах , записываем его в обьект -- записываем в эррей обьект.)
    wprapItemInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            const evName = document.getElementById('inName').value;
            const evDate = document.getElementById('inDate').value;
            const evTimeStart = document.getElementById('inTimeStart').value;
            const evTimeEnd = document.getElementById('inTimeEnd').value;



            events.eventName = evName;
            events.eventDate = evDate;
            events.eventTimeStart = evTimeStart;
            events.eventTimeEnd = evTimeEnd;

            const i = listEvents.length;
            listEvents[i] = events;

            // очищаем инпут после записи в обьект
            inputName.value = '';
            inputDate.value = '';
            inputTimeStart.value = '';
            inputTimeEnd.value = '';

            // метод записывает в сторедж значение ("ключ", значение ( в локалсоредж хратится только в строке json))
            // localStorage.setItem('events', JSON.stringify(listEvents));

            console.log(listEvents);
            upgradeViewData();
        }

    });


// отрисовка таблицы
    function upgradeViewData() {

// наверное цикл с шагом нужен
// очищаем весь дом от содержимого при каждой итерациии
//             ulListEvent.innerHTML = '';


//     создаем домелемент
            const liElement = document.createElement('li');
            liElement.className = 'list-group-item';

            // добавили в дом-дерево
            ulListEvent.appendChild(liElement);

            const divElement = document.createElement('div');
            divElement.className = 'wrapOptions';
            liElement.appendChild(divElement);

// отрисовка данных из инпута
            const spanName = document.createElement('span');
            spanName.className = 'informationCeil';
            spanName.innerHTML = 1;
            const spanDate = document.createElement('span');
            spanDate.className = 'informationCeil';
            spanDate.innerText = 'event2';
            const spanTimeStart = document.createElement('span');
            spanTimeStart.className = 'informationCeil';
            spanTimeStart.innerText = 'event3';
            const spanTimeEnd = document.createElement('span');
            spanTimeEnd.className = 'informationCeil';
            spanTimeEnd.innerText = 'event4';


            const buttonEdit = document.createElement('button');
            buttonEdit.className = 'btn btn btn-light btn-sm informationCeil';
            buttonEdit.type = 'button';
            buttonEdit.innerHTML = '<i class="far fa-edit"></i>';
            const buttonClose = document.createElement('button');
            buttonClose.className = 'btn btn btn-light btn-sm informationCeil';
            buttonClose.type = 'button';
            buttonClose.innerHTML = '<i class="fas fa-times"></i>';


            divElement.append(spanName);
            divElement.append(spanDate);
            divElement.append(spanTimeStart);
            divElement.append(spanTimeEnd);

            divElement.appendChild(buttonEdit);
            divElement.appendChild(buttonClose);

        }

};


// if (localStorage.getItem('event') != undefined) {
//     listEvents = JSON.parse(localStorage.getItem('event'));
//     outputEvent();  // вызов отрисовки таблицы чтоб сразу отобразилось
// }
// ;
//
// document.getElementById('add').onclick = function elClick() {
//     const evName = document.getElementById('inName').value;
//     const evDate = document.getElementById('inDate').value;
//     const evTimeStart = document.getElementById('inTimeStart').value;
//     const evTimeEnd = document.getElementById('inTimeEnd').value;
//     // {eventName:nameEvent, date: dateEvent}
//     const event = {};
//
//     event.eventName = evName;
//     event.eventDate = evDate;
//     event.eventTimeStart = evTimeStart;
//     event.eventTimeEnd = evTimeEnd;
//
//     const i = listEvents.length;
//     listEvents[i] = event;
//     console.log(listEvents);
//     outputEvent();
//     localStorage.setItem('event', JSON.stringify(listEvents));
// };


// function outputEvent() {
//     const listApp = document.getElementById('listElents');
//
//
//
//     listEvents.forEach(renderBox({evName, evDate, evTimeStart, evTimeEnd}) => {
//         const ul = document.createElement('ul');
//
//         const spanName = document.createElement('span');
//         const spanDate = document.createElement('span');
//         const spanTimeStart = document.createElement('span');
//         const spanTimeEnd = document.createElement('span');
//
//         const spanEdit = document.createElement('span');
//         const spanClose = document.createElement('span');
//
//
//         spanName.innerText = evName;
//         spanDate.innerText = evDate.getDay();
//         spanTimeStart.innerText = `${evTimeStart.getHours()}:${evTimeStart.getMinutes()}`;
//         spanTimeEnd.innerText = `${evTimeEnd.getHours()}:${evTimeEnd.getMinutes()}`;
//
//         spanEdit.innerHTML = '<i class="far fa-edit"></i>';
//         spanClose.innerHTML = '<i class="fas fa-times"></i>';
//
//
//         li.appendChild(spanName);
//         li.appendChild(spanDate);
//         li.appendChild(spanTimeStart);
//         li.appendChild(spanTimeEnd);
//
//         li.appendChild(spanEdit);
//         li.appendChild(spanClose);
//
//         ul.appendChild(li);
//         listApp.appendChild(ul);
//
//     });
// };


// let outName = '';
// let outDate = '';
// let outTimeStart = '';
// let outTimeEnd = '';
//
// for (let key in listEvents) {
//
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//
//     ul.appendChild('li')
//     li.appendChild('span')
//     span.appendChild(outName)


// outName = outName + listEvents[key].eventName + '\n';
// outDate = outDate + listEvents[key].eventDate + '\n';
// outTimeStart = outTimeStart + listEvents[key].eventTimeStart + '\n';
// outTimeEnd = outTimeEnd + listEvents[key].eventTimeEnd + '\n';

// }

// document.getElementById('boxName').innerText = outName;
// document.getElementById('boxDate').innerText = outDate;
// document.getElementById('boxTimeStart').innerText = outTimeStart;
// document.getElementById('boxTimeEnd').innerText = outTimeEnd;

//     };
//
//
// };


// function app() {
//     const app = document.getElementById('app');
//     const table = document.createElement('table');
//     const tbody = document.createElement('tbody');
//     const th = document.createElement('th');
//     tbody.appendChild(th);
//     table.appendChild(tbody);
//     app.appendChild(table);
//
//     // eventTh.forEach(({startDate}) =>{
//     //     const thDate = startDate.getDay();
//     // });
//
//     th.innerText = `test`;
//     th.className = 'table-secondary';
//     table.className = 'table col-3 table-hover';
//
//
//     event.forEach(({name, startDate, endDate, id}) => {
//         const tr = document.createElement('tr');
//         const tdName = document.createElement('td');
//         const tdStartDate = document.createElement('td');
//         const tdEndDate = document.createElement('td');
//         const tdIconEdit = document.createElement('td');
//         const tdClose = document.createElement('td');
//
//         tdStartDate.innerText = `${startDate.getHours()}:${startDate.getMinutes()}`;
//         tdEndDate.innerText = `${startDate.getHours()}:${startDate.getMinutes()}`;
//         tdIconEdit.innerHTML = '<i class="far fa-edit"></i>';
//         tdClose.innerHTML = '<i class="fas fa-times"></i>';
//         tdName.innerText = name;
//
//
//         tr.appendChild(tdName);
//         tr.appendChild(tdStartDate);
//         tr.appendChild(tdEndDate);
//         tr.appendChild(tdIconEdit);
//         tr.appendChild(tdClose);
//
//         tbody.appendChild(tr);
//
//     });
//
// }
//
// app();

