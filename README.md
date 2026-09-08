# Karthik Chandrasekaran - Personal Website

Personal branding site for engineering leadership, technical writing, research, credentials, and selected projects. Built with Astro and deployed to GitHub Pages.

## Edit website content

All portfolio content is stored in:

```text
src/data/content.json
```

Edit that one file to update the profile or add blogs, publications, projects, certifications, credentials, contributions, reviews, awards, and topics. Astro automatically refreshes the page while the local development server is running. Committing and pushing the JSON change automatically publishes it through GitHub Pages.

Each list item supports `"published": true`. Set it to `false` to keep an entry in the file without displaying it.

### Add a blog

Add an object to the `"blogs"` array:

```json
{
  "title": "Designing an effective engineering operating system",
  "date": "September 2026",
  "description": "A short description shown on the website.",
  "url": "https://example.com/article",
  "tags": ["leadership", "engineering-management"],
  "featured": true,
  "published": true
}
```

`"featured": true` also places the blog on the home page.

### Add a certification, credential, or award

Add an object to the matching array:

```json
{
  "title": "Credential name",
  "organization": "Issuing organization",
  "date": "September 2026",
  "description": "What this credential represents.",
  "url": "https://example.com/credential",
  "published": true
}
```

### Add a contribution or review

These entries use the same fields plus `"type"`:

```json
{
  "type": "Conference reviewer",
  "title": "Contribution title",
  "organization": "Organization name",
  "date": "2026",
  "description": "A concise summary of the contribution.",
  "url": "https://example.com/contribution",
  "published": true
}
```

## Development

```sh
npm install
npm run dev
```

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/deploy.yml`.
