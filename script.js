const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerTexts = '0'


    const upddateCoutner = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(upddateCoutner, 1)
        } else  {
            counter.innerText = target
        }
    }


    upddateCoutner()
})