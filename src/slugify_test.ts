import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { Slugify } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Slugify("Hello World"), "hello-world");
});
