const deleteBookFetch = async (id) => {
  const response = await fetch(`http://192.168.1.131:3000/deletebooks/${id}`, {
    method: "DELETE",
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export default deleteBookFetch;
