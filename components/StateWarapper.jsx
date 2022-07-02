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
import { useFirestoreState } from '../hooks/useFirestore';
const AppContext = createContext({
  isLogin: true,
  isOpen: true,
  pay: true,
  items: [],
  orders: [],
  clearCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  addOrders: (item) => {},
  addItemCart: (item) => {},
  deleteItemCart: (item) => {},
  getNumberItems: () => {},
  loginEmail: (email, password) => {},
  register: (item) => {},
  google: () => {},
  googleLogout: () => {},
  userinfo: {},
  openPay: () => {},
  closePay: () => {},
});

const StateWarapper = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userinfo, setUserinfo] = useState({});
  const [pay, setPay] = useState(false);
  const { addOrdersFire, addInformationsRegister } = useFirestoreState();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
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

  const registerUser = async ({
    email,
    password,
    documentos,
    genero,
    nDocumento,
    nombre,
  }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await addInformationsRegister({
      email,
      documentos,
      genero,
      nDocumento,
      nombre,
      uid: res.user.uid,
    });
  };
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
  const handleOpenPay = () => {
    setPay(true);
  };
  const handleClosePay = () => {
    setPay(false);
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
  const handleOrder = async (item) => {
    const temp = [...orders];
    temp.push(item);
    setOrders([...temp]);
    await addOrdersFire(item);
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
  const handleClearCart = () => {
    setItems([]);
  };

  const handleNumberItems = () => {
    return items.reduce((total, item) => total + item.qty, 0);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        orders,
        userinfo,
        isLogin,
        pay,
        clearCart: handleClearCart,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemCart: handleAddItemCart,
        deleteItemCart: handleDeleteItemCart,
        getNumberItems: handleNumberItems,
        register: registerUser,
        loginEmail: loginUser,
        google: loginGoogle,
        googleLogout: closeGoogle,
        openPay: handleOpenPay,
        closePay: handleClosePay,
        addOrders: handleOrder,
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
