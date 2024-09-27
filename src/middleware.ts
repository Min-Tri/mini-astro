import { clerkMiddleware } from "@clerk/astro/server";
import { defineMiddleware } from "astro:middleware";

export const onRequestAuth = clerkMiddleware();

export const onRequest = defineMiddleware((context, next) => {
    const user = context.cookies.get("user")?.json();
  
    context.locals.isAuthenticated = user !== undefined;
    context.locals.user = user;
  
    return next();
  });