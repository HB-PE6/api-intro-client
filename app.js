window.onload = async () => {
  try {
    const response = await fetch("http://localhost:8000");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
