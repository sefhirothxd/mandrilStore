import {
  collection,
  getDocs,
  doc,
  query,
  where,
  Timestamp,
  setDoc,
} from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { nanoid } from 'nanoid';

export const useFirestoreState = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState({});

  console.log('soy auth', auth?.currentUser?.uid);
  const uid = auth?.currentUser?.uid;

  useEffect(() => {
    getOrders();
    console.log('soy uid', uid);
  }, [uid]);

  console.log(Timestamp.now());

  const getOrders = async () => {
    try {
      setLoading((prev) => ({ ...prev, getOrders: true }));
      const q = query(collection(db, 'ordenes'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      const datos = querySnapshot.docs.map((doc) => doc.data());
      setOrders(datos);
    } catch (error) {
      console.log(error);
      setError(error.code);
    } finally {
      setLoading((prev) => ({ ...prev, getOrders: false }));
    }
  };

  const addOrdersFire = async (item) => {
    try {
      setLoading((prev) => ({ ...prev, addOrdersFire: true }));
      const newData = {
        ...item,
        uid,
        fechaCreada: Timestamp.now(),
      };
      const docRef = doc(db, 'ordenes', nanoid(6));
      await setDoc(docRef, newData);
      setOrders([...orders, newData]);
    } catch (error) {
      console.log(error);
      setError(error.code);
    } finally {
      setLoading((prev) => ({ ...prev, addOrdersFire: false }));
    }
  };
  const addInformationsRegister = async (item) => {
    console.log('SOY LO QUE MANDAS AL REGISTER', item);
    try {
      setLoading((prev) => ({ ...prev, addOrdersFire: true }));
      const newData = {
        ...item,
        fechaCreada: Timestamp.now(),
      };
      const docRef = doc(db, 'registerUser', nanoid(6));
      await setDoc(docRef, newData);
    } catch (error) {
      console.log(error);
      setError(error.code);
    } finally {
      setLoading((prev) => ({ ...prev, addOrdersFire: false }));
    }
  };

  return {
    orders,
    error,
    loading,
    getOrders,
    addOrdersFire,
    addInformationsRegister,
  };
};
