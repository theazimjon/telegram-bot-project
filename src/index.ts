import { BOT_TOKEN } from "./config/env.vars";
import { Context, Scenes, Telegraf } from "telegraf";
import session from "telegraf-session-local";
import connectMongo from "./config/db.connect";
import { message, start } from "./handlers/main.handlers";

const bot = new Telegraf(BOT_TOKEN as string);

// 0. Middlewares
bot.use(new session());

// 1. Start handler
bot.start(start);

// 2. Command handlers
// bot.command("/lang")

// 3. Keyboard handlers
// bot.hears(menuButtons);

// 4. Inline button handlers
// bot.on("click",)

// 5. Message handler
bot.on("message", message);

async function bootstrap() {
  // 1. connect to database
  await connectMongo();
  console.log("db connection established");
  // 2. launch the bot
  await bot.launch();
  console.log("bot launched");

  // 3. cron job
  // cron.getTasks().forEach((task) => task.stop());
  // cron.schedule("0 */8 * * *", job);
}
bootstrap();

// global error handlers
bot.catch((err: unknown, ctx: Context) => {
  console.log(`Oops, encountered an error for ${ctx.updateType}`, err);
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException", err);
});
process.on("unhandledRejection", (err: Error) => {
  console.log("unhandledRejection", err);
});
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
