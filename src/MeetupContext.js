/*import React, { createContext, useContext, useState } from "react";

export const MeetupContext = createContext();

export const contextFunction = () => {
  return useContext(MeetupContext);
};

export const MeetContext = ({ children }) => {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);
  
  const [data, setData] = useState();
  const [cantidad, setCantidad] = useState("");
  const [birras, setBirras] = useState(6);

  const fetchCity = (e) => {
    e.preventDefault(e);
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=40UALyt0txsx11rBI6lGuqUgi0mGGvdu&q=${citySearch}`
      )
      .then((response) => {
        console.log(response.data);
        setCitySearch("");
        setCityData(response.data[0]);
      });
  };

  /*useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=40UALyt0txsx11rBI6lGuqUgi0mGGvdu`
      )
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityData.Key]);

  return (
    <MeetContext.Provider
      value={{
        citySearch,
        cityData,
        data,
        cantidad,
        birras,
        fetchCity,

      }}
    ></MeetContext.Provider>
  );

  /*const [cart, setCart] = useState([])
    }

    const AddToCart = (obj) => {
        if (!InCart(obj.id)) {
          setCart([...cart, obj]);
        } else {
          cart.forEach((product, index) => {
            if (product.id === obj.id) {
              cart[index].amount = product.amount + obj.amount;
              setCart([...cart]);
            }
          });
        }
      };
   
    console.log(cart)

    const RemoveItem = (id) => {
        const deleteItem = cart.filter((product) => product.id !== id);
        setCart(deleteItem);
    }

    const InCart = (id) => {
        const esIgual = cart.find((product) => product.id === id);
            return esIgual === undefined ? false : true;
    }

    const ClearCart = () => {
        setCart([]);
    }

    const CalculatePrice = () => {
        let total = 0;
        cart.forEach(({ amount, price }) => {
          total = total + amount * price;
        });
        return total;
      };

    return (
        <CartContext.Provider value={{
            cart,
            AddToCart, 
            RemoveItem,
            ClearCart,
            InCart,
            CalculatePrice,
        }}
        >
            {children}
        </CartContext.Provider>
        
    )
};
*/