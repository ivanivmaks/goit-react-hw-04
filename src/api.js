import axios from "axios";

const API_KEY = "yoAShT3jPrldBzvNATzuhRjCG3ZdXSHrL63mLdHlM1M";
const BASE_URL = "https://api.unsplash.com/";

export default async function fetchImagesWithTopic(topic, page) {
  const response = await axios.get(`${BASE_URL}/1search/photos`, {
    params: {
      query: topic,
      client_id: API_KEY,
      page,
      per_page: 9,
    },
  });
  return response.data.results;
}
