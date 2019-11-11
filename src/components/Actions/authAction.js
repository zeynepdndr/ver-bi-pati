
import "firebase/auth";

export const signIn=(credentials)=>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
            ).then(()=>{
                dispatch({type:'LOGIN_SUCCESS'});
            }).catch((err)=>{
                dispatch({type:'LOGIN_ERROR',err});
            });
        }
}

export const signOut=()=>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
                dispatch({type:'SIGNOUT_SUCCESS'});
            });
        }
}

export const signUp=(newUser)=>{
    
    return (dispatch, getState,{getFirebase, getFirestore})=>{    

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            "123456"
            ).then((resp)=>{
                console.log(resp);
                // return firestore.collection('users').doc(resp.user.uid).set({
                //     name: newUser.name,
                //     surname: newUser.surname,
                //     email: newUser.email,
                //     department: newUser.department,
                //     phone: newUser.phone,
                //});
            }).then(()=>{
                console.log("SignUp")
                // dispatch({type:'SIGNUP_SUCCESS'});
            }).catch(err=>{
                // dispatch({type:'SIGNUP_ERROR',err});
                console.log("ERROR")
            })
    }
}