async function getContacts(url) {
    const response = await fetch(url);
    return await response.json();
  }

  export {getContacts}