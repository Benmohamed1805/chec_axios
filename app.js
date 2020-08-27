const axios = require('axios')

const requestOne = axios.get
("http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=f947f7e94f4456388049aaab1737b815");
 const requestTwo = axios.get("http://jsonplaceholder.typicode.com/todos/1");


axios
        .all([requestOne, requestTwo])
        .then(axios.spread((firstResponse, secondResponse) => {
            console.log(firstResponse.data, secondResponse.data);
        })
        )
        .catch(errors => {
            console.error(errors);
        });