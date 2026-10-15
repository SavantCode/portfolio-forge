<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Use TanStack Start file routes and TypeScript for every page; the workspace runtime is fixed and must not be replaced with Next.js.
- Store typed demo content in `src/data/portfolio.ts`; shared listing and case-study views consume this data so adding projects does not require duplicating page code.
- Keep shared portfolio presentation in `src/components/portfolio` and primitive controls in `src/components/ui` to maintain clear reuse boundaries.
- Define theme roles and all visual colors in `src/styles.css`; page code uses semantic tokens to preserve theme consistency.
- Keep page metadata in each content route through `pageHead`; shared root metadata is only a fallback.
