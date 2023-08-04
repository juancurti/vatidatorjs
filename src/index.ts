import { createClient } from 'soap';
const euUrl = "http://ec.europa.eu/taxation_customs/vies/services/checkVatService.wsdl";

async function validateVAT(fullCode: string):Promise<boolean | void> {
    if (fullCode.length < 2) { return false };
    var cleanCode = fullCode.split(' ').join('');
    let countryCode = cleanCode.substring(0, 2);
    let code = cleanCode.substring(2, cleanCode.length);
    
    return new Promise(async(resolve, reject) => {
        await createClient(euUrl, function(err, client) {
            if(err) {
                console.log(err);
                reject(err);
            }else{
                const _args = { vatNumber: code, countryCode: countryCode };
            
                client.checkVat(_args, async function(errArg: any, result: any) {
                    if(errArg) {
                        console.log(errArg)
                        reject(errArg);
                    }
                    
                    resolve(result.valid);
                })
            }
        });
    })
}

export {
    validateVAT
}