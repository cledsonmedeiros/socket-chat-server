const allowedHosts = [
  "localhost:3001",
  "https://socket-chat-client.vercel.app",
];

const allowedOrigins = allowedHosts
  .map((host) => [
    `https://${host}`,
    `https://www.${host}`,
    `http://${host}`,
    `http://www.${host}`,
  ])
  .flat();

export { allowedOrigins };
