---
id: <% crypto.randomUUID() %>
created_date: <% tp.file.creation_date('YYYY-MM-DDTHH:mm:ss') %>
type: permanent
tags:
  - Uncategorized
links:
zettel_id:
---
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