let input = +prompt(`Enter a number`);
let stop = +prompt(`Choose a stop line`);
let head = document.querySelector(`#head`);
let body = document.querySelector(`#body`);
let tab = `Table `;

if (input === NaN || stop === NaN) {
    head.innerText = `Please enter a valid number on your next trial`;
} else {
    head.innerText = `${tab + input}`;
}
    for (value = input; value === input; ) {
        row = document.createElement(`tr`);
        for (multiplier = 1; multiplier <= stop; multiplier++){
            cell = document.createElement(`td`);
            cell.innerText = `${input} * ${multiplier} = ${input*multiplier}`
            row.append(cell);
            body.append(row);
    
        }
    
        if (stop == "")  { 
            let stop = 12
            for (multiplier = 1; multiplier <= stop; multiplier++){
                cell = document.createElement(`td`);
                cell.innerText = `${input} * ${multiplier} = ${input*multiplier}`
                row.append(cell);
                body.append(row);
            }
        }
        break
    
    }

