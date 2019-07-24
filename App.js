const event = [
    {
        name: 'event1',
        startDate: new Date(),
        endDate: new Date(),
        id: 0,
    },
    {
        name: 'event2',
        startDate: new Date(),
        endDate: new Date(),
        id: 1,
    }
];


function app() {
    const app = document.getElementById('app');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const th = document.createElement('th');
    tbody.appendChild(th);
    table.appendChild(tbody);
    app.appendChild(table);

    // eventTh.forEach(({startDate}) =>{
    //     const thDate = startDate.getDay();
    // });

    th.innerText = `test`;
    th.className = 'table-secondary';
    table.className = 'table col-3 table-hover';


    event.forEach(({name, startDate, endDate, id}) => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdStartDate = document.createElement('td');
        const tdEndDate = document.createElement('td');
        const tdIconEdit = document.createElement('td');
        const tdClose = document.createElement('td');

        tdStartDate.innerText = `${startDate.getHours()}:${startDate.getMinutes()}`;
        tdEndDate.innerText = `${startDate.getHours()}:${startDate.getMinutes()}`;
        tdIconEdit.innerHTML = '<i class="far fa-edit"></i>';
        tdClose.innerHTML = '<i class="fas fa-times"></i>';
        tdName.innerText = name;


        tr.appendChild(tdName);
        tr.appendChild(tdStartDate);
        tr.appendChild(tdEndDate);
        tr.appendChild(tdIconEdit);
        tr.appendChild(tdClose);

        tbody.appendChild(tr);

    });

}

app();

