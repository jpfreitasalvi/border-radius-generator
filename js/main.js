const elementos = {
    allCorners: {
        input: document.querySelector('#all-corners  input'),
        label: document.querySelector('#all-corners label')
    },

    topLeft: {
        input: document.querySelector('#top-left input'),
        label: document.querySelector('#top-left label')
    },

    TopRight: {
        input: document.querySelector('#top-right input'),
        label: document.querySelector('#top-right label')
    },

    BottomRight: {
        input: document.querySelector('#bottom-right input'),
        label: document.querySelector('#bottom-right label')
    },

    BottomLeft: {
        input: document.querySelector('#bottom-left input'),
        label: document.querySelector('#bottom-left label')
    }
}
let px = ''
function changeBorder(allCornersIndicator) {
    Object.keys(elementos).forEach(function (item) {
        if (allCornersIndicator === '1') {
            if (elementos['allCorners'].input.value !== 0) {
                px = elementos['allCorners'].input.value + 'px;'
                elementos[item].label.innerHTML =
                    elementos['allCorners'].input.value
                elementos[item].input.value =
                    elementos['allCorners'].input.value
            }
        } else {
            if (item !== 'allCorners') {
                elementos[item].label.innerHTML = elementos[item].input.value
                px += elementos[item].input.value + 'px '
            }
        }
    })
    document.querySelector('#border-radius-preview').style.cssText =
        'border-radius: ' + px
    document.getElementById('copy-area').value = 'border-radius: ' + px
    px = ''
}

function copiedText() {
    var copyTextValue = document.getElementById('copy-area').value
    var copyText = document.getElementById('copy-area')

    // verify if value greater than 0
    if (copyTextValue !== '') {
        copyText.select()
        copyText.setSelectionRange(0, 99999) /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand('copy')

        /* Alert the copied text */
        alert('Texto copiado!')
    }
}

function resetInputBorders() {
    const labelPx = document.querySelectorAll('label')
    Object.keys(labelPx).forEach(function (keys) {
        if (labelPx[keys] !== '') {
            labelPx[keys].innerHTML = 0
        }
    })

    const inputSlider = document.querySelectorAll('input[name="input-slider"]')
    Object.keys(inputSlider).forEach(function (keys) {
        if (inputSlider[keys] !== '') {
            inputSlider[keys].value = 0
        }
    })

    document.getElementById('copy-area').value = ''
    document.getElementById('border-radius-preview').style.cssText = ''
}
