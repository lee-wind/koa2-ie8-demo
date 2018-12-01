(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            if(document.addEventListener){
                document.addEventListener('DOMContentLoaded', setBodyFontSize)
            }else{
                document.attachEvent('DOMContentLoaded', setBodyFontSize)
            }
            //document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    if(document.addEventListener){
        window.addEventListener('resize', setRemUnit)
    }else{
        document.attachEvent('resize', setRemUnit)
    }
    if(document.addEventListener){
        window.addEventListener('pageshow', function (e) {
            if (e.persisted) {
                setRemUnit()
            }
        })
    }else{
        document.attachEvent('pageshow', function (e) {
            if (e.persisted) {
                setRemUnit()
            }
        })
    }
    // window.addEventListener('resize', setRemUnit)
    // window.addEventListener('pageshow', function (e) {
    //     if (e.persisted) {
    //         setRemUnit()
    //     }
    // })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))