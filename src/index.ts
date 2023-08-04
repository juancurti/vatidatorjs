import { createClient } from 'soap';
const euUrl = "http://ec.europa.eu/taxation_customs/vies/services/checkVatService.wsdl";

async function validateVAT(code: string, countryCode: string):Promise<boolean | void> {
    if (code.length == 0 || countryCode.length == 0) {return false};
    
    return new Promise(async(resolve, reject) => {
        await createClient(euUrl, function(err, client) {
            if(err) {
                reject(err);
            }else{
                const _args = { vatNumber: code, countryCode: countryCode };
            
                client.checkVat(_args, async function(errArg: any, result: any) {
                    if(errArg) {
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