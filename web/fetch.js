export const fecthData = async (url, method = 'GET', body = undefined) => {
   const response = await fetch(url, {
      method,
      headers: {
         'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
   });
   return await response.json();
}