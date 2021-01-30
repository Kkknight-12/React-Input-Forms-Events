import axios from 'axios';

// with axio you can setup pre-configured instance of axios client
// that have default property set for where it's going to make request to 
// or headers or even params if want to..

// create method create instance of axios client with default properties
// customsied towards making request to some specific URLs
// with just these headers
export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _VtG5n6vKkM5SjzwCyxZler0e-VsjL3QDeo_p-w0av0'
    }
});