# Slugify

Slugify is deno based package that help to convert your text into slug.

## How to use it

First, install the package from the jsr registry.

```bash
deno add @officialrajdeepsingh/slugify
# or
npx jsr add @officialrajdeepsingh/slugify
# or
yarn dlx jsr add @officialrajdeepsingh/slugify
# or
pnpm dlx jsr add @officialrajdeepsingh/slugify
# or
bunx jsr add @officialrajdeepsingh/slugify

```

To use the Slugify package, import the Slugify function and call it with a text argument.

```bash

import * as mod from "@officialrajdeepsingh/slugify";
# or
import {Slugify} from "@officialrajdeepsingh/slugify";

Slugify("Hello World")

``