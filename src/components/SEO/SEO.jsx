import { Helmet } from "react-helmet-async";

export default function SEO({title,description,url, image = "https://ammertav.com/logo.png", lang = "en", keywords, type = "website",}){
    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="AMMERTAV" />

            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    )
}