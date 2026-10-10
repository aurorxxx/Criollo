# Criollo web fonts

Fonts downloaded from the official Google Fonts repository via verified HTTPS on 2026-10-10 and bundled locally. All use SIL Open Font License 1.1; the original notices and full licenses are included alongside the font files.

## Families and use

- **DM Sans** (`dm-sans-latin.woff2`): upright variable font, weight 100–1000, optical size 9–40. Rounded sans headings and readable UI. This is a visual substitute, not a claim to identify the Instagram font.
- **Fraunces** (`fraunces-soft-latin.woff2`): upright variable font, weight 700–900, optical size 9–144. SOFT fixed at 100 and WONK fixed at 1 to produce rounded, expressive labels in the spirit of the reference's heavy serif. It is an OFL substitute for that style; Cooper Black is not bundled.
- **Criollo Mono** (`criollo-mono-regular-latin.woff2`, `criollo-mono-italic-latin.woff2`): weight 400. Subsets derived from IBM Plex Mono. Renamed internally to Criollo Mono because the original license reserves the name “Plex.” The original copyright and license are preserved.

Subsets include Latin and Latin Extended-A letters, Spanish accents and punctuation (áéíóúüñ, capitals, ¿ and ¡), general punctuation, euro, arrows supported by each source font, and the minus sign. Required Spanish glyphs were checked after generating each WOFF2.

Conversion/subsetting used fontTools with Brotli compression; original TrueType source files were kept outside the repository. No browser requests to font services are required.

## Source provenance

- dm-sans.ttf: https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/DMSans%5Bopsz,wght%5D.ttf
  Source SHA-256: `8cd08d97e89c24d0aa92edd2f0f4c8ee6195eee9b7c9f154865a58b02f0c1c0d`
- fraunces.ttf: https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/Fraunces%5BSOFT,WONK,opsz,wght%5D.ttf
  Source SHA-256: `177ff6c0f14e5550a3c624247cd1189611d4eb65d000b14944c63d967958abbb`
- ibm-plex-mono-regular.ttf: https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexmono/IBMPlexMono-Regular.ttf
  Source SHA-256: `6a3412f058c7d8dfd9170c41e85ade48e5156ecb89356110ca57a0a27734af46`
- ibm-plex-mono-italic.ttf: https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexmono/IBMPlexMono-Italic.ttf
  Source SHA-256: `3362fc791b0652193328b862c1c5f23a789bc7288b1617fa63302f88689a2a34`

## Bundled files

- `criollo-mono-italic-latin.woff2` — 19,340 bytes; SHA-256 `4e3eda3e16f34a1145e5e08986e78c36628de058a936b8505bdaf7c62ac702e9`
- `criollo-mono-regular-latin.woff2` — 17,588 bytes; SHA-256 `f243d4c53936a66167b246fc77481519135040ad7959a9bdade736621fe4c3e0`
- `dm-sans-latin.woff2` — 68,448 bytes; SHA-256 `4b46734798140a7081093b98d8a781fa99eb2e896bfe38a4481d9377cde8c88e`
- `fraunces-soft-latin.woff2` — 63,096 bytes; SHA-256 `d66f19ccf7ea9f705997bc61ac95c074233d54bd095bef88f8274a968a45c32a`
