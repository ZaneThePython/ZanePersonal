# Security Policy

## Supported Versions

This is a personal website project. The latest version on the `main` branch is always supported.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

### Email
Send details to [contact@zane.org](mailto:contact@zane.org) with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to Expect
- **Response time**: Within 48 hours
- **Updates**: Regular communication about the issue
- **Fix timeline**: Depends on severity and complexity
- **Disclosure**: Coordinated disclosure after fix is deployed

### Please Do Not
- Create public issues for security vulnerabilities
- Exploit vulnerabilities beyond proof-of-concept
- Access data that doesn't belong to you
- Perform DoS attacks

## Security Measures

This project implements several security best practices:

### Code Security
- **Input Sanitization**: All user inputs are sanitized (minimal as site is static)
- **Dependencies**: Regular security audits via `npm audit`
- **Linting**: ESLint configured to catch common security issues
- **CSP Ready**: Content Security Policy headers can be added by hosting provider

### Build Security
- **Dependency Scanning**: GitHub Dependabot enabled
- **Automated Updates**: Security patches applied automatically
- **CI/CD**: All code passes linting and build checks

### Best Practices
- No sensitive data in repository
- No API keys or credentials in code
- HTTPS enforced on live site
- Regular dependency updates
- Minimal external dependencies

## Known Limitations

As a static personal website:
- No backend or database
- No user authentication
- No data collection or storage
- Minimal attack surface

## Security Updates

Security fixes are released as soon as possible after discovery. Check the [CHANGELOG](CHANGELOG.md) for security-related updates.

---

*Last updated: November 2024*
