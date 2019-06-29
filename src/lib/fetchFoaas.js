const fetchFoaas = async (opts = {}) => {
  const { type, from } = opts;
  try {
    const response = await fetch(`https://foaas.com/${type}/${from}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      message: false,
      subtitle: 'Unable to connect, check console.',
    };
  }
};

export default fetchFoaas;
