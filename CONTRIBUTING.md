# Contributing to ZanePersonal

Thank you for your interest in contributing to this project! While this is primarily a personal website, contributions are welcome.

## Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi-colons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Changes to build system or dependencies
- **ci**: Changes to CI configuration
- **chore**: Other changes that don't modify src or test files

### Examples

```
feat(effects): add new particle collision detection

fix(animations): resolve timing issue with typewriter effect

docs(readme): update installation instructions

style(css): apply consistent naming convention

refactor(modules): extract sound utilities to separate module

perf(effects): optimize particle rendering loop

test(interactions): add unit tests for ripple effect

build(vite): update build configuration for better tree-shaking

ci(github-actions): add accessibility testing workflow
```

## Development Workflow

1. **Fork the repository** (if you're an external contributor)

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ZanePersonal.git
   cd ZanePersonal
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

5. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary
   - Update documentation if needed

6. **Run quality checks**
   ```bash
   npm run lint        # Check for linting errors
   npm run format      # Format code with Prettier
   npm run build       # Ensure project builds successfully
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat(scope): your descriptive message"
   ```

8. **Push to your fork**
   ```bash
   git push origin feat/your-feature-name
   ```

9. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Ensure CI checks pass

## Code Style Guidelines

### JavaScript

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Keep functions small and focused
- Add JSDoc comments for complex functions
- Follow the existing modular structure

### CSS

- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-like naming conventions where appropriate
- Group related properties together
- Use meaningful class names
- Avoid overly specific selectors

### HTML

- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Ensure all images have alt text
- Maintain proper heading hierarchy

## Testing

While this project doesn't currently have automated tests, please ensure:
- All features work in modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile, tablet, and desktop
- No console errors or warnings
- Accessibility features work with keyboard navigation

## Performance Considerations

- Keep total bundle size under 150KB (compressed)
- Optimize images before adding them
- Minimize use of heavy libraries
- Test animations on lower-end devices
- Use lazy loading where appropriate

## Accessibility Standards

- Maintain WCAG 2.1 Level AA compliance
- Test with screen readers
- Ensure keyboard navigation works
- Provide sufficient color contrast
- Include focus indicators on interactive elements

## Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] All linting checks pass (`npm run lint`)
- [ ] Code is properly formatted (`npm run format`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Changes are tested in multiple browsers
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional commits format
- [ ] PR description clearly explains the changes

## Questions or Issues?

Feel free to:
- Open an issue for bugs or feature requests
- Start a discussion for questions
- Email [contact@zane.org](mailto:contact@zane.org)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
