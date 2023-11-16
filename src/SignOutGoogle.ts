import auth from '@react-native-firebase/auth';
import {
    GoogleSignout,
    statusCodes,
} from '@react-native-google-signin/google-signout';
//Paquete de google sign out

export const signOutGoogle = async () => {
    try{
        await GoogleSignout.hasPlayServices();
        const result = await GoogleSignout.signOut();
        return auth.GoogleAuthProvider.credential(result.idToken);
    } catch (error: any) {
        console.error(error);
        if (error.code === statusCodes.SIGN_OUT_CANCELLED) {
            console.warn('Sesión no se pudo cerrar');
        } else {
            console.log('ERROR in sign out: ', error);
        }
    }
};