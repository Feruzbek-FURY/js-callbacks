console.log('a');

function doSomething(fn) {
    console.log('Something')
    fn()
}

doSomething(() => {
    console.log('Hello World');
})

doSomething(() => {
    console.log('This is second operation');
})