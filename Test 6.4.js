
fetch('https://example.com')
    .then(response => response.text())
    .then(html => {
        const regex = /<img.*?src=['"](.*?)['"]/g;
        let match;
        while ((match = regex.exec(html))) {
            const imageUrl = match[1];
            const img = new Image();

            img.src = imageUrl;
            document.body.appendChild(img);
        }
    });