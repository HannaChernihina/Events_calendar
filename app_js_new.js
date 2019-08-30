let tasks = [];

// получаем значения в инпутах
function pushInfo() {
    // получаем значения в инпутах, записываем в обект в массиве
    let inputName = document.getElementById('inName').value;
    let inputDate = document.getElementById('inDate').value;
    let inputTimeStart = document.getElementById('inTimeStart').value;
    let inputTimeEnd = document.getElementById('inTimeEnd').value;

    //if (inputName.length)

    tasks.push({
        taskName: inputName,
        date: inputDate,
        timeStart: inputTimeStart,
        timeEnd: inputTimeEnd,
    });

// очищаем инпут после записи в обьект
    document.getElementById('inName').value = '';
    document.getElementById('inDate').value = '';
    document.getElementById('inTimeStart').value = '';
    document.getElementById('inTimeEnd').value = '';
}





// отрисовка таблицы
function dataOutput() {
    let eventsBlock = document.getElementById("events");

    eventsBlock.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let spanName = document.createElement('span');
        spanName.className = 'nameCeil informationCeil';
        spanName.innerHTML = task.taskName;

        let spanDate = document.createElement('span');
        spanDate.className = 'informationCeil';
        spanDate.innerText = task.date;

        let spanTimeStart = document.createElement('span');
        spanTimeStart.className = 'informationCeil';
        spanTimeStart.innerText = task.timeStart;

        let spanTimeEnd = document.createElement('span');
        spanTimeEnd.className = 'informationCeil';
        spanTimeEnd.innerText = task.timeEnd;

        let divElement = document.createElement('div');
        divElement.className = "wrappBox";


        let buttonEdit = document.createElement('button');
        buttonEdit.className = 'btn btn btn-light btn-sm informationCeil';
        buttonEdit.type = 'button';
        buttonEdit.innerHTML = '<i class="far fa-edit"></i>';
        let buttonClose = document.createElement('button');
        buttonClose.className = 'btn btn btn-light btn-sm informationCeil';
        buttonClose.type = 'button';
        buttonClose.innerHTML = '<i class="fas fa-times"></i>';



        divElement.append(spanName);
        divElement.append(spanDate);
        divElement.append(spanTimeStart);
        divElement.append(spanTimeEnd);

        divElement.append(buttonEdit);
        divElement.append(buttonClose);

        eventsBlock.append(divElement);
    }
};


window.onload = function () {

    let wprapItemInput = document.getElementById('add');


    // обработчик события по клику
    wprapItemInput.addEventListener('click', event => {
// запись инфы в обьект - обекты в массив
        pushInfo();
        // отрисовка таблицы
        dataOutput();
    });

    // что.то не так . пересмотреть
    wprapItemInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            pushInfo();
            dataOutput();
        }
    });


}