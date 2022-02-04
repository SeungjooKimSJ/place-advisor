import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'a39c8337f2msh20f70e6ea6da074p1d2bcajsnfe4b7cde0867'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'a39c8337f2msh20f70e6ea6da074p1d2bcajsnfe4b7cde0867'
//   }
// };

// export const getPlacesData = async () => {
//   try {
//     const { data: { data } } = await axios.get(URL, options);

//     return data;
//   } catch (error) {
//     console.log(error)
//   }
// }
