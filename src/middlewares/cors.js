import _cors from "cors";
import { allowedOrigins } from "../config/allowedOrigins";

const corsOptions = {
  origin(origin, callback) {
    // allow requests with no origin
    if (!origin) return callback(null, false);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(null, false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
};

const cors = _cors(corsOptions);

export { cors };
