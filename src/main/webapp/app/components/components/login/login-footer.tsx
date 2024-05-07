const footerLinks = [
  ['About', 'https://about.echo.com'],
  ['Help Center', 'https://help.echo.com'],
  ['Privacy Policy', 'https://echo.com/tos'],
  ['Cookie Policy', 'https://support.echo.com/articles/20170514'],
  ['Accessibility', 'https://help.echo.com/resources/accessibility'],
  ['Ads Info', 'https://business.echo.com/en/help/troubleshooting/how-echo-ads-work.html'],
  ['Blog', 'https://blog.eco.com'],
  ['Status', 'https://status.echostat.us'],
  ['Careers', 'https://careers.echo.com'],
  ['Brand Resources', 'https://about.echo.com/press/brand-assets'],
  ['Advertising', 'https://ads.echo.com/?ref=gl-tw-tw-echo-advertise'],
  ['Marketing', 'https://marketing.echo.com'],
  ['Echo for Business', 'https://business.echo.com'],
  ['Developers', 'https://developer.echo.com'],
  ['Directory', 'https://echo.com/i/directory/profiles'],
  ['Settings', 'https://echo.com/settings'],
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className="hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex">
      <nav className="flex flex-wrap justify-center gap-4 gap-y-2">
        {footerLinks.map(([linkName, href]) => (
          <a className="custom-underline" target="_blank" rel="noreferrer" href={href} key={linkName}>
            {linkName}
          </a>
        ))}
        <p>© 2024 Echo, Inc.</p>
      </nav>
    </footer>
  );
}
