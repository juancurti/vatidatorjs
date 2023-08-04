import validateVAT from '../dist/src/index.js';

const a = async() => {
    let _result = await validateVAT('FR30792757270');
    console.log(_result)
}
a()