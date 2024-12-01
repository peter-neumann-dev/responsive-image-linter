# Contributing Guide

## 👋 Hello there!

Thank you for considering contributing to this Chrome extension. Before
submitting your contribution, please read through the following guide.

## 📖 Table of Contents

- [Reporting Bugs](#-found-a-bug)
- [Feature Requests](#-missing-a-feature)
- [Submitting Issues](#-submitting-an-issue)
- [Submitting Pull Requests](#-submitting-a-pull-request)
- [Commit Message Format](#-commit-message-format)

## 🐛 Found a Bug?

If you find a bug, you can help by [submitting an issue](#submit-issue) on
[GitHub][Issues].

**Make sure the Bug is not already reported in the original repository
of [RespImageLint](https://github.com/ausi/respimagelint).**

## ✨ Missing a Feature?

You can request a new feature by opening a new **discussion**
on [GitHub][Discussions].

If you would like to **implement** a new feature, please consider the size of the
change to determine the right steps to proceed:

### Major Features

For a Major Feature, please open a discussion and outline your proposal before start
working on it so that it can be discussed. This process will prevent duplication
of work.

### Small Features

Small Features can be crafted and
directly [submitted as a Pull Request](#submit-pr).

## ⭕ Submitting an Issue

**Before you submit an issue, please search the issue tracker. An issue for your
problem might already exist, and the discussion might inform you of workarounds
readily available.**

To reproduce bugs, you should provide a minimal description how to
reproduce the problem. This description should be as specific as possible.

## 🔀 Submitting a Pull Request

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [PullRequests] for an open or
   closed PR that relates to your submission. You want to avoid duplicating
   existing efforts.

2. Be sure that an issue describes the problem you're fixing, or describes the
   feature you'd like to add.

3. Use
   a [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)
   of this repository to create your branch and changes.

4. Run all tests or linters and ensure that all tests pass.

5. Commit your changes using a descriptive commit message that follows
   the [commit message conventions](#commit-format).

## 🧾 Commit Message Format

To ensure consistency throughout the source code, commit messages must follow
a certain format. This will result in **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- The `header` is mandatory and must conform to the [Commit Message Header](#commit-message-header) format.
- The `body` is optional and must conform to the [Commit Message Body](#commit-message-body) format.
- The `footer` is optional and must conform to the [Commit Message Footer](#commit-message-footer) format.

### Commit Message Header

The header is a single line that contains a matching **[gitm😃ji](https://gitmoji.dev/)**,
a type and a short summary of the change. The gitmoji is a visual aid to quickly
identify the purpose of a commit. It should be the first character of the
header.

Examples:

```text
🐛 [BUGFIX] Fix bug in the extension
✨ [FEATURE] Add new feature to the extension
📝 [DOCS] Add documentation for the extension
🔒 [SECURITY] Fix security issue in the extension
🚧 [WIP] Work in progress
```

The type can be one of these types:

| Type         | Used for                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `[FEATURE]`  | A new feature (also small additions)                                                               |
| `[BUGFIX]`   | A fix for a bug                                                                                    |
| `[DOCS]`     | Documentation only changes                                                                         |
| `[SECURITY]` | Security related changes or upgrades                                                               |
| `[RELEASE]`  | Changes that are related to the release process (e.g. version bump, changelog generation, etc.)    |
| `[WIP]`      | Changes that are work in progress (should never land on main branches and squashed before merging) |
| `[REVERT]`   | Reverting a previous commit                                                                        |
| `[TASK]`     | Anything not covered by other types (e.g. upgrades, refactoring, code style changes, etc.)         |

In case of breaking changes, the type must get prefixed with `[!!!]`.

The summary is a short description of the change:

- Use the imperative, present tense `Change` not `Changed` nor `Changes`
- Capitalize the first letter
- No dot (.) at the end

### Commit Message Body

Just as in the summary, use the imperative, present tense: `Fix` not `Fixed`
nor `Fixes`.

Explain the motivation for the change in the commit message body. This commit
message should explain **why** you are making the change.

### Commit Message Footer

The footer can contain references to GitHub issues, tickets, and other PRs that
this commit closes or is related to. It should be formatted
in **[git-trailer](https://git-scm.com/docs/git-interpret-trailers)** format.

- Starting with a capital letter and a colon, followed by a space
- In case of multiple words, use a dash (-) to separate them
- Each trailer must be on its own line

Examples:

```text
Related-to: #123
Resolves: #123
Closes: #123
Fixes: #123
See-also: #123
Co-authored-by: #123
```

[GitHub]: https://github.com/peter-neumann-dev/responsive-image-linter/
[Issues]: https://github.com/peter-neumann-dev/responsive-image-linter/issues
[PullRequests]: https://github.com/peter-neumann-dev/responsive-image-linter/pulls
[Discussions]: https://github.com/peter-neumann-dev/responsive-image-linter/discussions
