let variables = {
    local: {
        serviceurl: 'https://localhost:5000'
    }
}

export const getVariables = (env) => {
    let envToUse = ""
    switch (env) {
        case 'dev':
            envToUse = 'dev'
            break;
        case 'p':
        case 'prod':
        case 'production':
            envToUse = 'prod'
            break;
        case 'stage':
            envToUse = 'stage'
            break;
        default: 
            envToUse = 'local'
            break;
    }

    return variables[envToUse];
}