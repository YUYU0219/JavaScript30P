
const checkboxes = document.querySelector('.inbox input[type="checkbox"]');

let click;
let selectClick;
let cancelClick;

const handleCheck = function (e) {

    if (e.shiftKey && this.checked) {
        selectClick = this;
        selectBox();
    } else if (e.shiftKey && !this.checked) {
        cancelClick = this;
        cancleBox();
    } else if (this.checked) {
        click = this;
        selectClick = undefined;
        cancelClick = undefined;
    } else {
        click = undefined;
        selectClick = undefined;
        cancelClick = undefined;
    }

    // 選取功能
    function selectBox() {
        let inBetween = false;
        checkboxes.forEach(checkbox => {
            // 將選取範圍內的checkbox加上標記
            if (checkbox === selectClick || checkbox === click) {
                inBetween = !inBetween;
            }
            // 將有標記的checkbox勾選（且click不為undefined與selectClick是為了避免點自己全選）
            if (inBetween && click !== undefined && click !== selectClick) {
                checkbox.checked = true;
            }
        })
    }

    //取消選取
    function cancleBox(el) {
        let inBetween = false;
        checkboxes.forEach(checkbox => {
            // 將選取範圍內的checkbox加上標記
            if (checkbox === selectClick || checkbox === cancelClick) {
                inBetween = !inBetween;
            }
            // 將有標記的checkbox勾選（以及selectClick）
            if (inBetween || checkbox === selectClick) {
                checkbox.checked = false;
            }
        })
    }

    // 偵測checkbox的click
    checkboxes.forEach(checkbox => { checkbox.addEventListener('click', handleCheck) });
    // 偵測當shift放開時讓click恢復未選取的狀態
    window.addEventListener('keyup', (e) => {
        if (e.keyCode === 16 || e.shiftKey) {
            click = undefined;
        };
    })

};















