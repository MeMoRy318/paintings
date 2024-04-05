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


export {postData};