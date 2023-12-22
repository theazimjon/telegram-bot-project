import { Context } from "telegraf";

export function start(ctx: Context) {
  ctx.reply("hello");
}

export function message(ctx: Context, next: Function) {
  if (!ctx.message) {
    return next();
  }

  if (!("text" in ctx.message)) {
    return next();
  }

  const text = ctx.message.text;
  const userId = ctx.message?.from.id;

  console.log(text);
}
