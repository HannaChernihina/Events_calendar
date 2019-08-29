let tasks = [];

window.onload = function () {
    let wprapItemInput = document.getElementById('add');

    wprapItemInput.addEventListener('click', event => {
        let inputName = document.getElementById('inName').value,
            inputDate = document.getElementById('inDate').value,
            inputTimeStart = document.getElementById('inTimeStart').value,
            inputTimeEnd = document.getElementById('inTimeEnd').value;

        //if (inputName.length)

        tasks.push({
            taskName: inputName,
            date: inputDate,
            timeStart: inputTimeStart,
            timeEnd: inputTimeEnd
        });



        let eventsBlock = document.getElementById("events");

        eventsBlock.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];

            let spanName = document.createElement('span');
            spanName.className = 'informationCeil';
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

            divElement.append(spanName);
            divElement.append(spanDate);
            divElement.append(spanTimeStart);
            divElement.append(spanTimeEnd);

            eventsBlock.append(divElement);
        }
    });
}