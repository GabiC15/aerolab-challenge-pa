export const getProducts = async () => {
  const url = `https://coding-challenge-api.aerolab.co/products`;
  const resp = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwZjUyMTk1ODhmNTAwMjExNjhjNjEiLCJpYXQiOjE2OTg3NTU4NzN9.vqKRyY6SmESsFbZXV-xf2lM2MwtmTgzLkOjgbc0n9ww",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await resp.json();

  return data.map((data) => ({ ...data, id: data._id }));
};
