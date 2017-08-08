
var my_step = 1;
var main = document.querySelector('body');
var index = 0;
var form_steps = document.querySelectorAll('.container_signin .connect-form');

var btn_step_after = document.querySelector('button.step-after');

var btn_step_before = document.querySelector('button.step-before');

btn_step_after.addEventListener('click', function() {
    stepAfter();
});

btn_step_before.addEventListener('click', function() {
    stepBefore();
});


function stepAfter() {
    my_step++;
    form_steps[index].classList.remove('active');
    form_steps[index+1].classList.add('active');
    index++;

    if (my_step > 1) {
        btn_step_before.style.display = '';

        if (my_step == 3) {
            btn_step_after.style.display = 'none';
        }

        if (my_step >= 4) {
            main.classList.add('ending');
            btn_step_before.style.display = 'none';
            btn_step_after.style.display = 'none';
        }
    }
}

function stepBefore() {
    my_step--;
    form_steps[index].classList.remove('active');
    form_steps[index-1].classList.add('active');
    index--;

    if (my_step <= 1) {
        btn_step_before.style.display = 'none';
    }
}