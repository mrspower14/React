let hooks: any[] = [];
let currentIndex = 0;

function render () {
    return null;
}

function useState(initialValue: any) {
    const index = currentIndex;

    if (hooks[index] === undefined) {
        hooks[index] = initialValue;
    }

    function setState(newValue: any) {
        hooks[index] = newValue;
        render();
    }

    currentIndex++;

    return [hooks[index], setState];
}