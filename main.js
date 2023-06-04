function nav_visible() {
    let nav = document.getElementById("nav-visible");
    let main = document.getElementById("main");
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");

    if (nav.style.display == "flex") {
        nav.style.display = "none";
        main.style.marginLeft = "0";
        header.style.marginLeft = "12%";
        footer.style.marginLeft = "0";
    } else {
        nav.style.display = "flex";
        main.style.marginLeft = "16%";
        header.style.marginLeft = "0";
        footer.style.marginLeft = "17%";
    }
}

function quantity(id) {
    const operation = document.getElementById(id).value;
    let qty, price, t_id, p_id, total;
    // let amount = document.getElementById("amount");
    // let sum = parseFloat(amount.innerHTML);

    if (id == "add" || id == "minus") {
        qty = document.getElementById("qty");

        p_id = document.getElementById("price");
        price = parseFloat(p_id.innerHTML);

        t_id = document.getElementById("total");
        total = parseFloat(t_id.innerHTML);
    } else {
        qty = document.getElementById("qty2");

        p_id = document.getElementById("price2");
        price = parseFloat(p_id.innerHTML);

        t_id = document.getElementById("total2");
        total = parseFloat(t_id.innerHTML);
    }

    if (operation == "+") {
        if (qty.value != 9) {
            qty.value = parseInt(qty.value) + 1;
            total = total + price;
            t_id.innerHTML = total.toFixed(2);
        }
    }
    else if (operation == "-") {
        if (qty.value != 1) {
            qty.value = parseInt(qty.value) - 1;
            total = total - price;
            t_id.innerHTML = total.toFixed(2);
            // sum = sum - total;
            // amount.innerHTML = sum.toFixed(2);
        }
    }
    // sum = total;
    // amount.innerHTML = sum.toFixed(2);
}

function checkout_quantity(id) {
    const operation = document.getElementById(id).value;

    let qty = document.getElementById("qty");
    let p_id = document.getElementById("price");
    let price = parseFloat(p_id.innerHTML);

    let qty2 = document.getElementById("qty2");
    let p_id2 = document.getElementById("price2");
    let price2 = parseFloat(p_id2.innerHTML);

    let t_id = document.getElementById("total");
    let total = parseFloat(t_id.innerHTML);

    switch (operation) {
        case "+":
            if (id == "add") {
                if (qty.value != 9) {
                    qty.value = parseInt(qty.value) + 1;
                    total = total + price;
                    t_id.innerHTML = total.toFixed(2);
                }
            }
            else {
                if (qty2.value != 9) {
                    qty2.value = parseInt(qty2.value) + 1;
                    total = total + price2;
                    t_id.innerHTML = total.toFixed(2);
                }
            }
            break;
        case "-":
            if (id == "minus") {
                if (qty.value != 1) {
                    qty.value = parseInt(qty.value) - 1;
                    total = total - price;
                    t_id.innerHTML = total.toFixed(2);
                }
            }
            else {
                if (qty2.value != 1) {
                    qty2.value = parseInt(qty2.value) - 1;
                    total = total - price2;
                    t_id.innerHTML = total.toFixed(2);
                }
            }
    }
}

function collapse() {
    let collapse = document.getElementById("collapse");

    if (collapse.style.display == "block") {
        collapse.style.display = "none";
    } else {
        collapse.style.display = "block";
    }
}