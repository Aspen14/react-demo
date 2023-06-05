import { useState } from "react";
import { RankItems } from "./RankItems";

const RankItemsContainer = ({dataType, imgArr }) => {
    const albumnLocalStorageKey = "albums";
    const movieLocalStorageKey = "movies";

    var localStorageKey = "";

    const [albumItems, setAlbumItems] = useState(JSON.parse(localStorage.getItem(albumnLocalStorageKey)));
    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));

    var data = [];
    var setFunc = null;

    if(dataType === 1){
        data = movieItems;
        setFunc = setMovieItems;
        localStorageKey = movieLocalStorageKey;
    }
    else if (dataType === 2){
        data = albumItems;
        setFunc = setAlbumItems;
        localStorageKey = albumnLocalStorageKey;
    }

    return(
        <RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localStorageKey={localStorageKey} />
    )

}

export default RankItemsContainer;