/**
 * Slugify the title
 * @param {string} slug - Pass the text.
 * @param {Object} option - Extend the functionality of slugify. 
 * @param {string} option.replacement - Replace spaces with replacement character, defaults to `-`
 * @param {string} option.which - The default character you need to replace in the string defaults is space.

 * @example
 * ```ts
 * import { Slugify } from "@luca/greet";
 *
 * Slugify("Hello World");
 * ```
**/

export function Slugify(slug:string, option? : { replacement: string; which: string } ): string {

  const defaultWhich = option?.which ? option.which : " "
  const defaultReplacement = option?.replacement? option.replacement : "-"

  return slug.toLowerCase().trim()?.replaceAll(defaultWhich, defaultReplacement)

}
