#!/usr/bin/env python3
"""Met à jour l'âge et l'année écrits en dur dans index.html et script.js.

Ces deux valeurs sont normalement calculées en JavaScript au chargement de la
page. Celles présentes dans le HTML ne servent que de repli, pour les lecteurs
qui n'exécutent pas JS (crawlers, navigateurs en mode texte, « afficher la
source »). Sans ce script elles se périment : l'année au 1er janvier, l'âge au
30 août.

Usage : python3 scripts/update-dates.py
Sortie : code 0 toujours ; la liste des fichiers modifiés est affichée.
"""

import datetime as dt
import pathlib
import re

BIRTH = dt.date(2003, 8, 30)
ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = ("index.html", "script.js")

today = dt.date.today()
age = today.year - BIRTH.year - ((today.month, today.day) < (BIRTH.month, BIRTH.day))
year = today.year

SUBS = (
    (re.compile(r'(<span id="age-inline">)\d+(</span>)'), age),
    (re.compile(r'(<span id="age">)\d+(</span>)'), age),
    (re.compile(r'(<span id="year">)\d+(</span>)'), year),
)

changed = []
for name in FILES:
    path = ROOT / name
    before = path.read_text(encoding="utf-8")
    after = before
    for pattern, value in SUBS:
        after = pattern.sub(rf"\g<1>{value}\g<2>", after)
    if after != before:
        path.write_text(after, encoding="utf-8")
        changed.append(name)

print(f"âge = {age} · année = {year}")
print("fichiers modifiés :", ", ".join(changed) if changed else "aucun")

# Le CV est un PDF généré : il ne peut pas être régénéré ici (JetBrains Mono
# n'est pas installée sur les runners, le rendu différerait). On se contente de
# signaler qu'il est périmé pour qu'il soit refait à la main.
cv = ROOT / "cv-src" / "cv.html"
if cv.exists():
    found = re.search(r"(\d+) ans, étudiant-ingénieur", cv.read_text(encoding="utf-8"))
    if found and int(found.group(1)) != age:
        print(
            f"::warning file=cv-src/cv.html::Le CV indique {found.group(1)} ans "
            f"au lieu de {age}. Corriger cv-src/cv.html puis relancer "
            f"« node cv-src/build.js » en local."
        )
