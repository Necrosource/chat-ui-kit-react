# Theming and Customization

The `chat-ui-kit-react` components are designed to be flexible and easy to customize. You can change the appearance of the components using global CSS overrides, component-level props, or by providing your own styles.

## CSS Class Prefix

All components in the library use a consistent CSS class prefix: `cs-`. For example:
- `.cs-main-container`
- `.cs-chat-container`
- `.cs-message`
- `.cs-message-input`

Knowing this prefix is essential for performing global CSS overrides.

## Customization Methods

### 1. Global CSS Overrides

The most powerful way to theme the entire chat UI is by overriding the default CSS classes in your global stylesheet. Since the library uses plain CSS classes, you can target them directly.

**Example: Changing the primary brand color**
