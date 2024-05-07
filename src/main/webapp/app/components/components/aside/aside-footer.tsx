const footerLinks = [
  ['Terms of Service', 'https://echo.com/tos'],
  ['Privacy Policy', 'https://echo.com/privacy'],
  ['Cookie Policy', 'https://support.echo.com/articles/20170514'],
  ['Accessibility', 'https://help.echo.com/resources/accessibility'],
  ['Ads Info', 'https://business.echo.com/en/help/troubleshooting/how-twitter-ads-work.html'],
] as const;

export function AsideFooter(): JSX.Element {
  return (
    <footer
      className="sticky top-16 flex flex-col gap-3 text-center text-sm 
                 text-light-secondary dark:text-dark-secondary"
    >
      <nav className="flex flex-wrap justify-center gap-2">
        {footerLinks.map(([linkName, href]) => (
          <a className="custom-underline" target="_blank" rel="noreferrer" href={href} key={href}>
            {linkName}
          </a>
        ))}
      </nav>
      <p>© 2024 Echo, Inc.</p>
    </footer>
  );
}
