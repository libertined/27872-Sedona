(function() {
    var minusEl = document.querySelectorAll(".counter .plus");
    var plusEl = document.querySelectorAll(".counter .minus");
    var countEl = document.querySelectorAll(".counter .counter-input");

    for (var i=0; i< minusEl.length; i++) {
        minusEl[i].addEventListener("click", function(e) {
            e.preventDefault();
            var changedField = this.parentNode.querySelector(".counter-input");
            if(changedField.value > 0)
                changedField.value = parseInt(changedField.value) - 1;
        });

        plusEl[i].addEventListener("click", function(e) {
            e.preventDefault();
            var changedField = this.parentNode.querySelector(".counter-input");
            changedField.value = parseInt(changedField.value) + 1;
        });

        /* Вводи только цифр */
        countEl[i].addEventListener("keyup", function() {
            this.value = this.value.replace(/[^\d,]/g, '');
        });
    }
})();