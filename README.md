# BeigeMachine---website-
Official website for BeigeMachine - small software for useful things.

## Structure

```
index.html                     Homepage (approved design - do not redesign)
software/index.html            Software list
software/disksnap/index.html   DiskSnap product page
guides/index.html              Guides landing page (guide cards + empty "shelf")
about/index.html               About Beige Machine
contact/index.html             Contact
privacy/index.html             Privacy
style.css                      All site styles (shared, homepage, inner pages)
assets/img/                    Pixel-art images
assets/fonts/                  Self-hosted fonts
assets/js/site.js              Small site-wide script (local preview, Beige Mail form)
```

- New product: copy `software/disksnap/` to `software/<name>/`, then add a
  `product-card` for it on `software/index.html`.
- New guide: copy the commented `guide-card` template in `guides/index.html`
  into the `guide-list`. The "shelf" message hides itself once a guide is listed.

## Preview locally

Double-click `index.html` to open it in Chrome or Edge. Links between pages work
when opened from disk.

## Before launch

Search the project for `REPLACE-WITH-`, `TO COMPLETE` and `LAUNCH TODO`.

- [ ] `#REPLACE-WITH-DISKSNAP-DOWNLOAD-URL` - DiskSnap download link
      (`software/index.html` x1, `software/disksnap/index.html` x2).
- [ ] `#REPLACE-WITH-BUY-ME-A-COFFEE-URL` - Buy me a coffee link (header, every page).
- [ ] `#REPLACE-WITH-GITHUB-URL` - GitHub link (footer, every page).
- [ ] `REPLACE-WITH-CONTACT-EMAIL` - contact address (`contact/index.html`: link x2 + visible text).
- [ ] Privacy page: every `TO COMPLETE` item in `privacy/index.html`.
- [ ] Connect the Beige Mail form (homepage + Guides) to a mailing-list service (see `assets/js/site.js`).
