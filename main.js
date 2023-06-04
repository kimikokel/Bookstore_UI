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
        main.style.marginLeft = "17%";
        header.style.marginLeft = "0";
        footer.style.marginLeft = "17%";
    }
}

function quantity(id) {
    const operation = document.getElementById(id).value;
    let qty_, price_, t_id_, p_id_, total_;

    if (id == "add" || id == "minus") {
        qty_ = document.getElementById("qty");

        p_id_ = document.getElementById("price");
        price_ = parseFloat(p_id_.innerHTML);

        t_id_ = document.getElementById("total");
        total_ = parseFloat(t_id_.innerHTML);
    } else {
        qty_ = document.getElementById("qty2");

        p_id_ = document.getElementById("price2");
        price_ = parseFloat(p_id_.innerHTML);

        t_id_ = document.getElementById("total2");
        total_ = parseFloat(t_id_.innerHTML);
    }

    if (operation == "+") {
        if (qty_.value != 9) {
            total_ = total_ + price_;
            t_id_.innerHTML = total_.toFixed(2);
        }
    }
    else if (operation == "-") {
        if (qty_.value != 1) {
            total_ = total_ - price_;
            t_id_.innerHTML = total_.toFixed(2);
        }
    }
    checkout_quantity(id, "amount");
}

function checkout_quantity(id, ttl) {
    const operation = document.getElementById(id).value;

    let qty = document.getElementById("qty");
    let p_id = document.getElementById("price");
    let price = parseFloat(p_id.innerHTML);

    let qty2 = document.getElementById("qty2");
    let p_id2 = document.getElementById("price2");
    let price2 = parseFloat(p_id2.innerHTML);

    let t_id = document.getElementById(ttl);
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