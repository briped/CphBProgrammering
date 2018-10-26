//var cinema = []; // Declare global array.

function doCreate() {
    let cinema = [];
    let rows = Number(document.getElementById('rows').value);
    let seats = Number(document.getElementById('seats').value)
    console.log('rows: ' + rows);
    console.log('seats: ' + seats);
    for (let r = 0; r < rows; r++) {
        cinema.push([]); // Create the 'row'.
        for (let c = 0; c < seats; c++) {
            cinema[r].push(true); // Add a seat/column to the current row.
        }
    }
    //console.log(cinema);
    return cinema;
}

function drawRoom(cinema) {
    let tableRows = '';
    for (let r = 0; r < cinema.length; r++) {
        let tableCols = '';
        for (let c = 0; c < cinema[r].length; c++) {
            /*
            if (r === 0) {
                tableCols += (c === 0) ? '<td></td>' : `<td>c${c}</td>`;
            }
            else {
                tableCols += (c === 0) ? `<td>r${r}</td>` : `<td><button id="r${r}c${c}" onclick="doBooking(this); return false;">_</button></td>`;
            }
            */
            tableCols += `<td><button id="r${r}c${c}" style="background-color: green;" onclick="doBooking(this); return false;">${r}.${c}</button></td>`;
        }
        tableRows += '<tr>' + tableCols + '</tr>';
    }
    document.getElementById('room').innerHTML = tableRows;
}

function doBooking(element) {
    element.style.backgroundColor = (element.style.backgroundColor == 'red') ? 'green' : 'red';
}