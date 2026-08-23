# Launch guidance

This is a maintainer note for sharing the repository's public entry points. It
is guidance for human review, not an automated posting mechanism, a support
SLA, or a request for private tenant evidence.

## Approved positioning and boundaries

- Describe the project as a **public source-available engineering kit**. The
  repository uses the Personal and Internal Use License; it is not an OSI
  open-source license and the launch copy must not imply permissive commercial
  redistribution rights.
- Ask people to test the [Quick Start](../README.md#quick-start) with synthetic
  data and give feedback. Do not organize artificial star, upvote, comment, or
  paid-promotion campaigns.
- Local checks are offline/read-only and prove only their stated local or
  synthetic evidence class. Live execution remains tenant-specific and
  requires the user's own authenticated Power Platform tenant and connections.
  Local GREEN does not prove tenant import, rebinding, enablement, execution,
  mutation, semantic readback, publication, or publication readback.
- Never ask for or publish tenant URLs, credentials, email addresses, GUIDs,
  private identifiers, raw connector payloads, screenshots, mailbox content,
  production exports, or other private data. Route security issues through
  [SECURITY.md](../SECURITY.md) and a private channel, not a public issue.
- Use the [bug report form](../.github/ISSUE_TEMPLATE/bug-report.yml) for a
  reproducible problem and the [lesson proposal form](../.github/ISSUE_TEMPLATE/lesson-proposal.yml)
  for a sanitized RED/GREEN idea. Only reviewed registry promotion becomes a
  global instruction; a proposal or local result is not enough.

## Launch readiness

Before sharing a channel message, run the repository-local gates and preserve
their real status:

```text
node --test tests/docs/discoverability.test.mjs
node packages/cli/dist/bin/spflow.js learn audit knowledge/self-improvement/registry.json --execute --format json
npm run check
git diff --check
```

If an official scanner or an external GitHub gate is unavailable, record it as
`NOT_RUN`. Never convert unavailable tenant, provider, publication, or scanner
evidence into `PASS`. GitHub Discussions, repository topics, social preview,
and release readback are separate maintainer/UI gates.

## Approved channel copy

The copy below is intentionally technical and feedback-oriented. Replace no
boundary language with stronger marketing claims.

### LinkedIn

> Power Automate Flow Engineering Kit is a **public source-available engineering kit** for testing Power Automate and Power Platform application contracts with deterministic RED/GREEN checks. Try the [Quick Start](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit#quick-start) with synthetic data, then share a connector, failure mode, or expected/observed behavior in [GitHub Discussions](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit/discussions). Live execution remains tenant-specific. Please test and give feedback; this is not an artificial star or upvote campaign.

### Power Platform Community

> Are your Power Automate checks green before the installed reference or semantic result is trustworthy? The **public source-available engineering kit** turns those failure modes into offline/read-only RED/GREEN checks across connector-backed workflows. Start with the [three-minute Quick Start](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit#quick-start), use synthetic data, and share a sanitized connector or failure mode. Please do not post tenant URLs, credentials, emails, GUIDs, raw payloads, or production exports; live execution remains tenant-specific.

### GitHub Discussions

> Start here: [Power Automate Flow Engineering Kit](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit). Run the local [Quick Start](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit#quick-start), inspect the architecture and evidence boundaries, and tell us what connector, failure mode, or expected/observed behavior you tested. Keep examples synthetic and sanitized. Use the [bug report form](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit/issues/new?template=bug-report.yml) for reproducible problems, the [lesson proposal form](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit/issues/new?template=lesson-proposal.yml) for reusable invariants, and [SECURITY.md](https://github.com/brunotaisa01-source/power-automate-flow-engineering-kit/blob/main/SECURITY.md) for private security reporting.

### Hacker News

Use Hacker News for **technical curiosity, not primary promotion**. If the
repository has a concrete technical artifact or a genuinely interesting
question to discuss, use this copy:

> A public source-available engineering kit for deterministic RED/GREEN validation of Power Automate and Power Platform artifacts. The interesting question is whether local, evidence-bound checks can catch connector and semantic failures before a live tenant run. The repository is offline/read-only; try the synthetic Quick Start and critique the boundaries. Live execution remains tenant-specific.

Do not frame this as an OSI open-source launch, a star campaign, or a request
for tenant data.

### Product Hunt

Wait for a live product or demo before using Product Hunt. Templates and
boilerplates are not normally featured, so the current repository-only kit
should not be submitted there. When a live product/demo exists and the
maintainer has approved the external gate, use:

> Power Automate Flow Engineering Kit is a public source-available engineering kit that helps engineers test connector-backed automation with deterministic RED/GREEN checks before considering a live run. Explore the live demo, then use the synthetic Quick Start and send technical feedback. Live execution remains tenant-specific; the repository's Personal and Internal Use License still applies.

## Channel routing

Public questions and sanitized reproducible feedback belong in GitHub
Discussions or the issue forms. Security reports belong in a private GitHub
security advisory or private maintainer channel. No channel should be used to
collect tenant access, private exports, or production payloads.
