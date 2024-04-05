const postData = async (url,data) => {
  const response = await fetch(url,{
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method:'POST',
    body: JSON.stringify(data)
  });

  return await response.json();
};


const getData = async (url) => {
  const response = await fetch(url);
  
  if(!response.ok){
    throw new Error(`Could not fetch ${url}, status ${response.status}`);
  }

  return response.json();
};


export { postData, getData };