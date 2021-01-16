;(async function() {
    const promiseFunction = async  (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemMapped = promiseFunction('x')
    console.log(await itemMapped)

    // const itemsMapped = items.map(promiseFunction)

    // console.log(itemsMapped)
})()