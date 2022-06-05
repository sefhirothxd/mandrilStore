import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext({
	isOpen: true,
	items: [],
	openCart: () => {},
	closeCart: () => {},
	addItemCart: (item) => {},
	getNumberItems: () => {},
});

const StateWarapper = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [items, setItems] = useState([]);

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

	const handleNumberItems = () => {
		return items.reduce((total, item) => total + item.qty, 0);
	};

	return (
		<AppContext.Provider
			value={{
				isOpen,
				items,
				openCart: handleOpenCart,
				closeCart: handleCloseCart,
				addItemCart: handleAddItemCart,
				getNumberItems: handleNumberItems,
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
