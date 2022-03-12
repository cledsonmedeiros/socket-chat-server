const allowedHosts = ["localhost:3001"];

const allowedOrigins = allowedHosts
  .map((host) => [
    `https://${host}`,
    `https://www.${host}`,
    `http://${host}`,
    `http://www.${host}`,
  ])
  .flat();

export { allowedOrigins };
