/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

declare namespace App {
    interface Locals {
      user:
        | {
            email: string;
          }
        | undefined;
      isAuthenticated: boolean;
    }
  }