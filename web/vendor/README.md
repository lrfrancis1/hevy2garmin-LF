# Fork engine package

`hevy2garmin-0.11.0-lf.1.tgz` contains the engine built from this fork's
`typescript/` package. The web dependency is pinned to this archive so Vercel
uses the merge calendar-date fix without waiting for an upstream npm release.
No npm registry package was published.

The matcher fix and regression tests are in commit `88b416aa921df00563167f052422ef1ba944e894`. The compiled
engine changes only the merge search padding from two hours to one day;
matching rules and watch strategies are unchanged.

To rebuild from the repository root:

```sh
npm ci --prefix typescript
cd typescript
npm pack --pack-destination ../web/vendor
cd ../web
npm install ./vendor/hevy2garmin-0.11.0-lf.1.tgz
```

After upstream publishes this fix, replace the archive dependency with the
published version and remove this directory and its Dockerfile copy step.
