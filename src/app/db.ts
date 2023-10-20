import { connect } from "@planetscale/database";

const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export type Session = {
  id: number;
  ip: string;
  time_spent: number;
};

export const conn = connect(config);
