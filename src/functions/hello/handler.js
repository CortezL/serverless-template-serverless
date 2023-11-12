const axios = require('axios');

exports.hello = async (event) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error fetching data: ', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
