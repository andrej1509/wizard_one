function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
};

    function mask(e) {
        var matrix = this.placeholder, // .defaultValue
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
    };

     function hideLabel(e) {
    //     for (const element of theArray) {
    // // ...use `element`...
    //     }
        var namesFiles = "";
        [...e.target.files].forEach((element) => {
            namesFiles = namesFiles + element.name;
        })
        var commonLabel = document.querySelector("label.common-label");
        commonLabel.innerHTML = namesFiles;
    };
    //
    function hideSuccessBg() {
        var bgSuccess = document.querySelector(".bg-success");
        bgSuccess.style.display = "none";
    }

    window.addEventListener("DOMContentLoaded", function() {
        var input = document.querySelector("#online-phone");
        var portfolio = document.querySelector("#portfolio");
        var okButton = document.querySelector(".button-ok");
        input.addEventListener("input", mask, false);
        portfolio.addEventListener("change", hideLabel, false);
        okButton.addEventListener("click", hideSuccessBg, false);
    })


