import Head from "next/head";

export function Metatags() {
  const title = "Cauã Adomaitis | Fullstack Engineer";
  const description =
    "Fullstack engineer creating beautiful and functional web apps.";
  const image =
    "https://raw.githubusercontent.com/adomaitisc/personal-website-v2/main/public/meta/image.png";

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <link rel="manifest" href="/meta/site.webmanifest" />
      <meta
        name="keywords"
        content="Website Developer Software Design Development Front End Back End Full Stack JavaScript React Next.js Node.js HTML CSS"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />

      {/* Twitter tags */}
      <meta name="twitter:domain" content="adomaitisc.com" />
      <meta name="twitter:url" content="https://adomaitisc.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Facebook tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adomaitisc.com" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Favicon tags */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#333333"
      />
      <meta name="msapplication-TileColor" content="#333333" />
      <meta name="theme-color" content="#333333" />
    </Head>
  );
}
