import { MailtrapClient } from "mailtrap";

const TOKEN = "28fed6719a0936d19ec56761a7d67f93";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Shaquib",
};
