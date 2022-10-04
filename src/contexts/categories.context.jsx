import { createContext, useState, useEffect } from 'react';
//import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

//import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //for one time insertionof categories and docs
// useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA);
//   }, []);

useEffect(() => {
  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    setCategoriesMap(categoryMap);
  }
  getCategoriesMap();
}, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};