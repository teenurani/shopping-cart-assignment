export const getResults = async url => {
  try {
    const res = await fetch(url);
    const results = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async data => {
  try {
    const res = await fetch(data.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data.body)
    });
    const results = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
