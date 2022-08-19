export class HttpRequest {
    static async server(url: string, methodType: string, data:object, key:string)  {
        try 
            {
            let response:any;
            if(data != undefined && key != undefined)
            {
                response = await fetch(url, {
                    headers: {
                        Accept: "application/json"
                    },
                    method: methodType,
                    body: JSON.stringify({ key: data })
                });
            }
            else if(data != undefined){
                response = await fetch(url, {
                    method: methodType,
                    headers: {
                        Accept: "application/json"
                    },
                    body: JSON.stringify(data)
                });
            }
            else{
                response = await fetch(url, {
                    headers: {
                        Accept: "application/json"
                    },
                    method: methodType,
                });
            }
           
            
            return await response.json();       
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

}
