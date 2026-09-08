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

```powershell
npm install
npm run dev
```

The local site normally opens at `http://localhost:4321`. Changes to `content.json` appear automatically after saving. Press `Ctrl+C` to stop the development server.

## Step-by-step editing and publishing

### 1. Open the repository

```powershell
Set-Location C:\p\personal\kcskribbl.github.io
git pull
```

Always pull before editing so your local copy includes the latest changes from GitHub.

### 2. Open and edit the content

```powershell
code .
```

Edit `src/data/content.json`, save the file, and preview the result with:

```powershell
npm run dev
```

### 3. Check the production build

Stop the development server with `Ctrl+C`, then run:

```powershell
npm run build
```

Do not publish if the build reports an error. JSON errors are commonly caused by a missing comma, an extra comma, or unmatched quotation marks.

### 4. Review the changes

```powershell
git status
git diff
```

### 5. Commit the changes

If only `content.json` changed:

```powershell
git add src\data\content.json
git commit -m "Update portfolio content"
```

If you changed the profile image, website code, or several files:

```powershell
git add .
git commit -m "Update portfolio website"
```

### 6. Push and publish

```powershell
git push
```

Pushing to `main` is the publishing step. The workflow in `.github/workflows/deploy.yml` automatically builds and deploys the website to GitHub Pages.

### 7. Check the deployment

List recent deployments:

```powershell
gh run list --repo kcskribbl/kcskribbl.github.io --limit 3
```

Watch the latest deployment until it finishes:

```powershell
gh run watch --repo kcskribbl/kcskribbl.github.io
```

After the deployment succeeds, refresh `https://kcskribbl.github.io/`. GitHub Pages may take a minute or two to show the newest version.

## Deployment details

Pushes to `main` deploy automatically through `.github/workflows/deploy.yml`.
