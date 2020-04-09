function sortTable(n) {
    let table, rows, switched, i, x, y, shouldSwitch, direction, count = 0;
    table = document.getElementById("myTable");
    switched = true;
    direction = "asc";

    while (switched) {
        switched = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            let xValue, yValue;
            if (n === 0){
                xValue = x.innerHTML.toLowerCase();
                yValue = y.innerHTML.toLowerCase()
            } else {
                xValue = parseInt(x.innerHTML);
                yValue = parseInt(y.innerHTML);
            }

            if (direction === "asc") {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === "desc") {
                if (xValue < yValue) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switched = true;
            count ++;
        } else {
            if (count === 0 && direction === "asc") {
                direction = "desc";
                switched = true;
            }
        }
    }
}