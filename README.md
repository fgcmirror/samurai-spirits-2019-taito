# SAMURAI SPIRITS (2019, NESiCAxLive2 arcade)

Mirror of [https://www.taito.co.jp/nxl/title/0000002751](https://www.taito.co.jp/nxl/title/0000002751), preserved as part of the [fgcmirror](https://github.com/fgcmirror) project.

Live at <https://samurai-spirits-2019.fgcmirror.com>.

## Source

- **Category**: Official game site
- **Original URL**: <https://www.taito.co.jp/nxl/title/0000002751>
- **Original host**: `www.taito.co.jp`
- **Captured at**: 2026-05-16T06:20:00Z
- **Tool**: `wget`

### Scope

Single-page mirror of Taito's NESiCAxLive2 catalogue entry for SAMURAI SPIRITS (2019 arcade reboot). Site was still live at capture time; mirrored for FGC posterity because Taito's NESiCAxLive2 catalogue is volatile (title pages are removed when games leave operator rotation). Scope is the host root, not the URL's directory — the page's CSS/JS/images live above /nxl/title/ on the original server, so flattening would have dumped everything to _outside/. The NESiCAxLive2 navigation menu (about / howto / playtitle / playshop) was rewritten to absolute https://www.taito.co.jp/nxl/... URLs so users clicking the chrome end up on the still-live parent site; these six entries appear in missing_assets because they aren't mirrored locally but are intentional external links.

## Snapshots used

- **Captured live** from <https://www.taito.co.jp/nxl/title/0000002751> on 2026-05-16T06:20:00Z.

## Notes

Stripped Google Tag Manager (no external runtime deps allowed). Replaced the YouTube promotional-video iframe with an external link marked data-fgcmirror-external="youtube" pointing at https://www.youtube.com/watch?v=_hlBb4IxTMQ. Converted AngularJS ng-src/ng-href attributes on the lightbox screenshots to plain src/href and removed the angular bundle (Angular was only used here for lazy bind, the page is server-rendered HTML). Lightbox2 v2.10.0 icons (close.png, loading.gif, prev.png, next.png) returned soft-404s on Taito's server (the CSS shipped without its asset directory) — replaced with the canonical icons from lightbox2 v2.10.0 on npm. Empty 0-byte Scripts/main/first.js dropped from the page. Content/images/null.png (a transparent fallback referenced only by the map-hover code that isn't reachable on this page) added as a 1x1 placeholder.

- 6 referenced path(s) not mirrored locally (typically external links to live pages on the original host):
  - `nxl/about/index.html`
  - `nxl/howto/index.html`
  - `nxl/index.html`
  - `nxl/playshop/index.html`
  - `nxl/playshop01/index.html`
  - `nxl/playtitle/index.html`

## Contributing

Found a missing asset or better version?

Feel free to open a PR.
