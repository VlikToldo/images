import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/?key=33878859-cda4694236e6f273cd0cc913b',
    params: {
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    }
})

export const searchImage = async (q, page = 1,) => {

    const {data} = await instance.get('', {
        params: {
            q,
            page,
        }
    });
    return data;
}