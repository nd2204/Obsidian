
```dataview
LIST
FROM "001. Permanent Notes"
WHERE startswith(file.name, "1")
	OR contains(file.tags, "#CompGraph")
	OR contains(file.tags, "#graphic")
SORT file.name

```

