import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
import SearchResult from "./SearchResult";
import axios from "axios";
const Home = () => {
  let { darkMode, setdarkMode } = useContext(DarkModeContext);
  const [search, setSearch] = useState("dog");
  const [fotos, setfotos] = useState([]);
  const [page, setpage] = useState(1);
  const [disableLoadMore, setdisableLoadMore] = useState(false);
  let access_key = import.meta.env.VITE_ACCESS_KEY;

  useEffect(() => {
    peticionAPI();
    let a = localStorage.getItem("darkMode");
    if (a === "true") setdarkMode(true);
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setfotos([]);
    setpage(1);
    setdisableLoadMore(false);
    peticionAPI();
  };
  const peticionAPI = async () => {
    try {
      let url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: "Client-ID " + access_key,
        },
      });
      const newResponse = response.data.results;
      console.log(newResponse);

      setfotos((prevFotos) => [...prevFotos, ...newResponse]);

      if (newResponse.length === 0) {
        setdisableLoadMore(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleMore = () => {
    setpage((prevpage) => prevpage + 1);
  };

  return (
    <div className="page-container">
      <div className={`contenedor ${darkMode ? "modo-oscuro" : "contenedor"}`}>
        <h1> Buscador de Imagenes</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Buscar Imagen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" id="search-button">
            Buscar
          </button>
        </form>
        <div className="grid">
          {fotos.length ? (
            fotos.map((foto) => {
              return (
                <SearchResult
                  key={Math.random()}
                  src={foto.urls.regular}
                  alt={foto.alt_description}
                  tags={foto.tags}
                  links={foto.links.download}
                />
              );
            })
          ) : (
            <div>
              <h2>No hay busquedas 😥</h2>
            </div>
          )}
        </div>
        {fotos.length != 0 ? (
          <button
            id="show-more-button"
            onClick={handleMore}
            disabled={disableLoadMore}
            className={disableLoadMore ? "show-more-button-disabled " : ""}
          >
            Mostar más
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
