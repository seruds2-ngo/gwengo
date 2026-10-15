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

- Recreated pages use local TanStack routes (Home and About Us); all other organization links preserve their original absolute URLs until those pages are recreated.
- Share the site header, navigation and footer between content pages in a site-shell module to keep presentation and local navigation consistent.
- Use imported Lovable asset pointers for source-site photographs and uploaded media; the favicon remains a small local PNG for browser compatibility.
- Keep the homepage visual system in src/styles.css and use the shared Button for actions so presentation stays consistent.
