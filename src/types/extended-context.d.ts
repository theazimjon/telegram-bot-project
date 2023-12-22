import { Context } from "telegraf";
import { Session } from "./session.type";

declare module "telegraf" {
  interface Context {
    session: Session;
  }
}
