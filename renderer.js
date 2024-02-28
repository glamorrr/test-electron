console.log('Welcome to renderer');
console.log(versionsAll.node(), versionsAll.chrome(), versionsAll.electron());

async function fuck() {
    const res = await window.versionsAll.ping();
    console.log(res);
}

fuck();
