function createGrid(a) {
    let id = 1;
    arr = createRandomNoArray();
    for (let index = 0; index < a; index++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row rowline");
        const maindiv = document.getElementById("main");
        maindiv.appendChild(row);
        for (let i = 0; i < a; i++) {
            const node = document.createElement("div");
            if (arr.includes(id)) {
                node.setAttribute("class", "box bomb");
            } else {
                node.setAttribute("class", "box");
            }
            node.setAttribute("onmouseover", "light(this)");
            node.setAttribute("onmouseout", "real(this)");
            node.setAttribute("onclick", "boxClick(this)");
            node.setAttribute("isclicked", "0");
            node.setAttribute("id", `class_{${id}}`);
            const row = document.getElementsByClassName("row")[index];
            row.appendChild(node);
            id++;
        }

    }

};


function light(b) {
    if (b.getAttribute("isclicked") === '0') {
        b.style.backgroundColor = "#f5f5f0";
    }
}

function real(c) {
    if (c.getAttribute("isclicked") === '0') {
        c.removeAttribute("style");
    }
}

function boxClick(d) {
    let fullId = d.id;
    let id = Number(fullId.slice(fullId.indexOf('{') + 1, fullId.indexOf('}')));
    console.log(id)
    if (d.getAttribute("isclicked") === '0') {
        console.log(arr.includes(id));
        if (!arr.includes(id)) {
            d.style.backgroundColor = "#29a329";

        } else {
            let bomb = document.getElementsByClassName("bomb");
            for (var i = 0; i < bomb.length; i++) {
                bomb[i].style.backgroundImage = "url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)";
                bomb[i].style.backgroundSize = "contain";
                bomb[i].setAttribute("isClicked", "1");
                bomb[i].style.backgroundColor = "#ffffff";

            }
        }
        d.setAttribute("isClicked", "1");
    }
}

let arr;
createGrid(9);
function createRandomNoArray() {
    let num
    let arr = new Array(10);
    let start = 1, end = 81;

    for (let i = 0; i < 10;) {
        num = (Math.random() * (end - start) + start) ^ 0;
        if (!(num in arr)) {
            arr[i] = num;
            i++;
        }
    }
    return arr;

}
