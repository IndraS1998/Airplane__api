/*
*       $$$         LOGIN IN METHOD            $$$
* */

const onLogin = (name,password,list,loader) =>{
//this method received a name, a password and a list such that it can verify user credentials
//it returns a boolean

//find if user exits
    loader(true);
    const user  = list.find(user => user.name === name);
   /* try{
        user = ;
    }catch (e) {
        loader(false);
        return false;
    }*/
    if(!user){
        loader(false);
        alert("wrong credentials");
        return {log : false, user : null};
    }
    if(user.password !== password){
        loader(false);
        alert("wrong credentials");
        return {log : false, user : null};
    }
    loader(false);
    return {log : true, user}
};

const onSetString = (e,setString) =>{
    setString(e.target.value);
};

export {onLogin,onSetString}