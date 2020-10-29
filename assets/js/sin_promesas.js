const info = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const solicitud = await fetch(url).then(solicitud => solicitud.json())
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    console.log(`${i+1}: ${solicitud[i].title}`);
                }
            }, 3000);
    } catch (error) {
            console.log(`Error: ${error}`);
    }
}

const respInfo = () => {
    let prom = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve('La información de los 20 primeros títulos solicitados, a sido enviada.');
        }, 3000);
    })
    return prom;
}

async function app(info, respInfo) {
    info();
    let rInfo = await respInfo();
    console.log(rInfo);
}

app(info, respInfo);
