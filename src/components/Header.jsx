import Button from "react-bootstrap/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../contetx/ProductContext";

const Header = () => {

  

const {setData} = useContext(ProductContext)


  const renkli = ["info", "danger", "success", "warning"];
  const [categories, setCategories] = useState();
  const [faceData, setFaceData] = useState();
  const getCategories = () => {
    const C_URL = "https://fakestoreapi.com/products/categories";
    axios
      .get(C_URL)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCategories();
    getData();
  }, []);

  const getData = async () => {
    const C_URL = " https://fakestoreapi.com/products ";
    try {
      const { data } = await axios.get(C_URL);

      setData(data);
      setFaceData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilter = (item) => {
    console.log(item);
    //  let filteredData = data.filter((urun) => urun.category === item);
    setData(faceData.filter((urun) => urun.category === item));
  };

  return (
    <div className="text-center ">
      <h1>Product List</h1>
      <div className="d-flex align-items-center justify-content-center  gap-2">
        <Button onClick={getData} variant="primary">
          ALL
        </Button>{" "}
        {categories?.map((item, i) => {
          return (
            <Button
              onClick={() => handleFilter(item)}
              className=""
              variant={renkli[i]}
            >
              {item.toUpperCase()}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
