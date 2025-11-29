# 🌟 My Universal Signature

This is a small, reusable signature widget for all my personal projects. It displays an interactive icon linking to my portfolio with a tooltip.

---

## ⚙️ Data Attributes

You can configure the signature by adding `data-` attributes to the `<script>` tag:

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `data-position` | Array | Sets vertical and horizontal position of the signature. Values: `"top"|"bottom"`, `"left"|"right"` | `["bottom","left"]` |
| `data-offset` | Array | Sets offset according to given positions. | `["20px","15px"]` |
| `data-color` | String | Sets the color of the icon and tooltip text | `"white"` |
| `data-bg` | String | Sets the background of the icon and tooltip (can use gradient) | `"linear-gradient(45deg, darkblue, transparent)"` |

---

## 🔗 Example Usage

- Add the following in head tag
```html
<link rel="stylesheet" href="https://cdn.jsdelvir.net/gh/unseenumair/universal-signature@main/styles.css">
```

- Add the following in body tag
```html
<script 
  src="https://cdn.jsdelivr.net/gh/unseenumair/universal-signature@main/script.js"
  data-position='["bottom","left"]'
  data-offset='["20px","15px"]'
  data-color="white"
  data-bg="linear-gradient(45deg, darkblue, transparent)">
</script>
```
