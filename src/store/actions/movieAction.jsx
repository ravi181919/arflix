export { removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import loadmovie from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getStore) => {
  try {
    const detail = await axios.get(`movie/${id}`);
    const externalId = await axios.get(`movie/${id}/external_ids`);
    const recommendations = await axios.get(`movie/${id}/recommendations`);
    const similar = await axios.get(`movie/${id}/similar`);
    const videos = await axios.get(`movie/${id}/videos`);
    const watchproviders = await axios.get(`movie/${id}/watch/providers`);

    let theUltimateDetails = {
        detail: detail.data,
        externalId: externalId.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(m => m.type === "Trailer"),
        watchproviders: watchproviders.data.results.IN,
    } 
    console.log(theUltimateDetails);
    
  } catch (error) {
    console.log("Error", error);
  }
};
