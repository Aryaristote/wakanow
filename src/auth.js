// src/auth.js
import { auth } from './firebase';

export const signUp = async (email, password) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing in:', error.message);
        throw error;
    }
};

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Error signing out:', error.message);
        throw error;
    }
};

export const getCurrentUser = () => {
    return auth.currentUser;
};
