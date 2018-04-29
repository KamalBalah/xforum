import Token from './Token.js'
import AppStorage from './AppStorage'

class User
{
    login(data)
    {
        axios.post('api/auth/login',data).then(res=>this.resAfterLogin(res))
            .catch(console.log(error=>error.response.data));
    }

    resAfterLogin(res)
    {
        const tokenKey=res.data.access_token;
        const user=res.data.user;
        if(Token.isValid(tokenKey))
        {
            AppStorage.store(tokenKey,user);

        }
        window.location= "/xforum/public";
    }

    loggedIn()
    {
        const storedToken=AppStorage.getStore();

        if(storedToken.token)
        {
            return Token.isValid(storedToken.token)? true : false ;

        }

        return false;

    }

    logOut()
    {
        AppStorage.clear();
        window.location='/xforum/public';
    }

    userName()
    {
        if(this.loggedIn())
        {
            return AppStorage.getStore().user;
        }
    }

    userID()
    {
        if(this.loggedIn())
        {
            return Token.payload(AppStorage.getStore().token).sub;
        }
    }

}

export default User=new User();