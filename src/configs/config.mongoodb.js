const dev ={
    app:{
        port:process.env.DEV_APP_PROT
    },
    db:{
        host:process.env.DEV_DB_HOST,
        port:process.env.DEV_DB_PROT,
        name:process.env.DEV_DB_NAME
    }
}

const pro ={
    app:{
        port:process.env.PRO_APP_PROT
    },
    db:{
        host:process.env.PRO_DB_HOST,
        port:process.env.PRO_DB_PROT,
        name:process.env.PRO_DB_NAME
    }
}
const config = {dev,pro}
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env];