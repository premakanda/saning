#!/usr/bin/env python3
"""Download selected Pexels stock photos into public/images/.

Run locally from pack root: python scripts/download_photos.py
Uses only Python standard library. Requires internet access.
"""
import json
import sys
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'photo-manifest.json').read_text(encoding='utf-8'))
failed = []
seen = {}
for item in manifest['images']:
    target = ROOT / item['destination']
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.stat().st_size > 1000:
        print(f'SKIP: {target.relative_to(ROOT)} already exists')
        continue
    image_id = item['pexelsId']
    if image_id in seen:
        target.write_bytes(seen[image_id])
        print(f'COPY: {target.relative_to(ROOT)}')
        continue
    url = f'https://images.pexels.com/photos/{image_id}/pexels-photo-{image_id}.jpeg?auto=compress&cs=tinysrgb&w=1600'
    try:
        req = Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; website image preparation)'})
        with urlopen(req, timeout=30) as response:
            body = response.read()
            content_type = response.headers.get('Content-Type','')
        if not content_type.startswith('image/') or len(body) < 1000:
            raise RuntimeError(f'Not an image ({content_type}, {len(body)} bytes)')
        target.write_bytes(body)
        seen[image_id] = body
        print(f'OK:   {target.relative_to(ROOT)} ({len(body)//1024} KiB)')
    except Exception as exc:
        print(f'FAIL: {target.relative_to(ROOT)} — {exc}')
        print(f'  Manual download: {item["source"]}')
        failed.append(item['destination'])

if failed:
    print('\nSome downloads failed; open their source pages and save files manually under the listed names.')
    sys.exit(1)
print('\nDone. Review the photographs and licenses before production use.')
