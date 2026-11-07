# Photo assets for the plumbing website

## Status

This pack contains **a folder structure, verified stock-photo source pages, a photo manifest, and an automatic download script**. **It does not yet contain downloaded JPG photos**, because remote image delivery was unavailable in the preparation environment. Run the script locally or use the supplied source links to download manually.

## Placement in the React + TypeScript + Vite project

Place the image directories under the **project root** (not `src/assets`):

```
project/
  AGENTS.md
  PHOTO_ASSETS.md
  public/
    images/
      hero/
        plumber-at-work.jpg
      services/
        radiator-installation.jpg
        plumbing-repair.jpg
        boiler-maintenance.jpg
        sink-plumbing.jpg
        underfloor-heating.jpg    # pending licensed source
        boiler-room.jpg          # pending licensed source
        water-supply.jpg         # pending licensed source
        sewerage.jpg             # pending licensed source
        bathroom-fixtures.jpg   # pending licensed source
      articles/
  src/
    assets/
      icons/                      # SVG UI icons, separate from photos
```

`public/images` works well for media used by YAML articles, service content and route metadata. Files are referenced with root-relative paths such as `/images/services/plumbing-repair.jpg`, and copied to the built `dist/images` automatically by Vite. The folders for pending assets are **not** image files and must not be referenced as though they existed.

## Selected Pexels photos

| Destination                          | Source (commercial-use Pexels page)                                                    | Usage                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `hero/plumber-at-work.jpg`           | https://www.pexels.com/photo/professional-plumber-installing-a-radiator-pipe-29226620/ | Hero candidate (check mobile crop).                         |
| `services/radiator-installation.jpg` | https://www.pexels.com/photo/professional-plumber-installing-a-radiator-pipe-29226620/ | Radiator fitting; same image as hero temporarily.           |
| `services/plumbing-repair.jpg`       | https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/      | Plumber working with pipes.                                 |
| `services/boiler-maintenance.jpg`    | https://www.pexels.com/photo/plumber-repairing-power-source-7859953/                   | Boiler maintenance; not a completed boiler room.            |
| `services/sink-plumbing.jpg`         | https://www.pexels.com/photo/a-person-holding-brown-doorknob-7220892/                  | Work under a sink; confirm image matches before publishing. |

### Download

From the unpacked package folder (with Python 3 installed):

```bash
python scripts/download_photos.py
```

After the script completes, copy **`public/images/`** into your project root. Or manually download each photo from the source page and save using the filename in the table.

If automatic download fails, do **not** create empty placeholder JPG files. Open the source URLs and use their download buttons; preserve the matching filenames.

## SEO, performance and accurate presentation

- Keep source URLs and authors in `photo-manifest.json` for license provenance; the file itself is not part of the public image directory.
- Pexels allows commercial use, but photos must not suggest that pictured workers are actual employees or that stock installations are real company projects.
- Set useful alt text matching **what is actually shown**, not stuffed with keywords.
- Use correct image width/height or `aspect-ratio`, responsive display, and appropriate crops.
- Use optimized WebP/AVIF variants later if the site benefits, and adjust actual filenames in the code together with the files. Do not rename JPG to WebP without conversion.
- Do not lazy-load the main hero/LCP image; lazy-load below-the-fold photos.
- Avoid publishing blank image paths or generic building-site pictures for unrelated services.
- Do not show a section titled “Our completed projects” with stock photos.
- The site's _two color themes_ must not require separate copies of photos unless image editing is deliberately requested.

## Codex task

Read `AGENTS.md`, `SITE_CONTENT_BLUEPRINT.md`, and this file. Use only existing downloaded images under `public/images/`; do not assume listed pending files exist. Integrate stock photos in service pages and hero only where the content fits, and use SVG icons where photos are missing. Never represent stock photos as actual company projects. Maintain mobile-first, accessibility, image-performance and SEO requirements. Keep this manifest updated when a new licensed photo is selected.
