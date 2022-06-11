zip:
	zip installable/RSC-latest.zip -r content.js embed.js manifest.json icons

embed:
	curl https://redfin-shared-comments.disqus.com/embed.js --output embed.js
