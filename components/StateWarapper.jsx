import { createContext, useState, useContext, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../firebase';
const AppContext = createContext({
  isLogin: true,
  isOpen: true,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemCart: (item) => {},
  deleteItemCart: (item) => {},
  getNumberItems: () => {},
  loginEmail: (email, password) => {},
  register: (email, password) => {},
  google: () => {},
  googleLogout: () => {},
  userinfo: {},
});

const StateWarapper = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setIsLogin(true);
        setUserinfo({ email, photoURL, displayName, uid });
      } else {
        setIsLogin(false);
        setUserinfo({});
      }
    });
    return () => unsuscribe();
  }, []);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const loginUser = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUserinfo(res.user);
    setIsLogin(true);
  };
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    setUserinfo(res.user);
    setIsLogin(true);
  };

  const closeGoogle = async () => signOut(auth);
  const handleOpenCart = () => {
    setIsOpen(true);
  };
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleAddItemCart = (item) => {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);
    if (found) {
      found.qty += 1;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
  };
  const handleDeleteItemCart = (item) => {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);
    if (found) {
      found.qty -= 1;
      if (found.qty === 0) {
        temp.splice(temp.indexOf(found), 1);
      }
    }
    setItems([...temp]);
  };

  const handleNumberItems = () => {
    return items.reduce((total, item) => total + item.qty, 0);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        userinfo,
        isLogin,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemCart: handleAddItemCart,
        deleteItemCart: handleDeleteItemCart,
        getNumberItems: handleNumberItems,
        register: registerUser,
        loginEmail: loginUser,
        google: loginGoogle,
        googleLogout: closeGoogle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export function useAppContext() {
  return useContext(AppContext);
}

export default StateWarapper;
