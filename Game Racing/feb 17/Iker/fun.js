var game = {
    nums: [[0]],
    price:[[1]],
    cash: 1,
    counter: [],
}

var check = 0;

function init() {
    setInterval(loop, 50);
    updateTable();
}

function loop() {
    check++;
    
    var nums = game.nums;  
    var cps;
    for (var i = 0; i < nums.length; i++) {
       if(i == 0) for (var j = 0; j < nums[0].length; j++) j === 0 ? cps = nums[0][j] : cps *= nums[0][j] + 1;
        for (var j = 0; j < nums[i].length; j++)if(i > 0) nums[i - 1][j] += nums[i][j];
        if (nums[i][nums[i].length - 1] >= 1) {
            nums[i].push(0);
            game.price[i].push(i + 1 * nums[i].length);
        }
        if (nums[nums.length-1][i] >= 10) {
            nums.push([0]);
            game.price.push([i + 1 * nums[i].length]);
        }
    }
    document.getElementById("count").innerHTML = "Cash: " + game.cash.toFixed(2)+ "<br>" + "+" + cps + "/s";
    cps /= 20;
    game.cash += cps;
    game.nums = nums;
    if(check%10 === 0)updateTable();
}

function updateTable() {
    var table = document.getElementById("main");
    for (var i = 0; i < game.nums.length; i++) {
        if (i+1 > table.rows.length) table.insertRow(i);
        var row = table.rows[i];
        for (var j = 0; j < game.nums[i].length; j++) {
            if (j+1 > row.cells.length) row.insertCell(j);
            var cell = row.cells[j];
            cell.innerHTML ="<div><b> Number: " + game.nums[i][j] + "</b><br><button onclick='buy(" + i + "," + j + ")' style='width:100%'>Buy 1 <br> cost: " + game.price[i][j] + "</button></div>";
        }
    }
}

function buy(n1, n2) {
    if (game.cash >= game.price[n1][n2]) {
        game.cash -= game.price[n1][n2];
        game.nums[n1][n2] += 1;
        game.price[n1][n2] *= n1 + 1 * n2 + 1;
        updateTable();
    }
}