
---
**Linked to this**
```dataviewjs
// Show all files that link TO this one
let current = dv.current()
if (current) {
	let inlinks = current.file.inlinks;
dv.list(inlinks);
}
```
---