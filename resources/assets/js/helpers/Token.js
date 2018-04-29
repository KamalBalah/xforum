class Token
{

    payload(token)
    {
       const payload=token.split('.')[1];
       return this.decode(payload);

    }

    decode(payload)
    {
        return JSON.parse(atob(payload));
    }

    isValid(token)
    {
        const payload= this.payload(token);
        var pass=false;
        if(payload)
        {

            pass= payload.iss=="http://localhost/xforum/public/api/auth/signup" ? true : pass;
            pass= payload.iss=="http://localhost/xforum/public/api/auth/login" ? true : pass;


        }

        return pass;
    }

}

export default Token =new Token()